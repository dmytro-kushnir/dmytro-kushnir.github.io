import { useEffect, useState } from 'react';
import {
  Alert, Container, Spinner, Table,
} from 'react-bootstrap';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

interface VariantRow {
  id: number;
  baud: number;
  format: string;
  sensor: string;
  poll_ms: number;
  mock_usb_name: string;
}

interface VariantsPayload {
  variants: VariantRow[];
}

function sensorLabel(sensor: string): string {
  if (sensor === 'OLED') return 'I²C OLED (SSD1306)';
  if (sensor === 'BME280') return 'BME280 → BMP180 у Wokwi';
  return sensor;
}

function VariantsFromJson() {
  const config = useConfig(useAppName());
  const { variantsDataUrl } = config;

  const [data, setData] = useState<VariantsPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!variantsDataUrl) {
      setError('URL таблиці варіантів не задано в конфігу курсу.');
      setLoading(false);
      return undefined;
    }

    const controller = new AbortController();

    (async () => {
      try {
        const response = await fetch(variantsDataUrl, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const json = (await response.json()) as VariantsPayload;
        if (!Array.isArray(json.variants)) {
          throw new Error('У JSON немає масиву variants');
        }
        setData(json);
        setError(null);
      } catch (err) {
        if ((err as Error).name === 'AbortError') return;
        setError(`Не вдалося завантажити варіанти: ${(err as Error).message}`);
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [variantsDataUrl]);

  return (
    <Container fluid="md" className="mt-4 mb-5 pb-4">
      <h1 className="mb-3">Варіанти завдань</h1>
      <p className="mb-2">
        Номер варіанту — за порядком у списку групи; якщо більше 10 — знову з початку.
      </p>
      <p className="mb-3">
        Для варіантів використати своє прізвище латиницею A–Z без пробілів
        (наприклад
        {' '}
        <code>IVANOV</code>
        ).
      </p>
      {loading && (
        <div className="d-flex align-items-center gap-2">
          <Spinner animation="border" size="sm" />
          <span>Завантаження…</span>
        </div>
      )}

      {error && <Alert variant="warning">{error}</Alert>}

      {data && (
        <Table striped bordered hover responsive size="sm">
          <thead>
            <tr>
              <th>№</th>
              <th>Baudrate</th>
              <th>Формат</th>
              <th>Датчик (лаб. 4)</th>
              <th>Інтервал, мс (лаб. 5)</th>
              <th>Mock USB (лаб. 3)</th>
            </tr>
          </thead>
          <tbody>
            {data.variants.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.baud}</td>
                <td><code>{row.format}</code></td>
                <td>{sensorLabel(row.sensor)}</td>
                <td>{row.poll_ms}</td>
                <td>{row.mock_usb_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
}

export default VariantsFromJson;

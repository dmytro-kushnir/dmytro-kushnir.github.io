import {
  Badge, Button, Col, Container, Row,
} from 'react-bootstrap';
import { LabLink } from '../config/configMapping.ts';
import IframeLoader from '../iframe/iframe.tsx';
import cssClasses from '../lecture/lecture.module.scss';
import { isMobileDevice } from '../../utils/utils.ts';

interface Props {
  lab: LabLink;
}

function Lab({ lab }: Props) {
  const baseUrl = window.location.origin;

  return (
    <Container fluid="md" className="my-4">
      <Row>
        <Col>
          <h1 className="mb-4">
            {lab.name}
            .
            {' '}
            {lab.description}
          </h1>
          <p>
            <strong>Мета роботи:</strong>
            {' '}
            {lab.objective}
          </p>
          <p> Файли зроблених завдань а також звіт потрібно завантажити на диск у іменну теку.</p>
        </Col>
        {lab.sample && lab.samplePath && (
        <a href={`${lab.samplePath}${lab.sample}`} download={lab.sample}>
          <Button variant="primary" className="mb-4" style={{ backgroundColor: 'var(--app-color-content)' }}>
            {`Завантажити матеріали до лабараторної ${lab.sample}`}
          </Button>
        </a>
        )}
        {lab.reference && (
        <a href={lab.reference} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className="mb-4" style={{ backgroundColor: 'var(--app-color-content)' }}>
            Посилання на веб-сайт лабараторної для виконання роботи
          </Button>
        </a>
        )}
      </Row>
      <Row>
        <Col>
          { isMobileDevice()
            ? (
              <h3>
                <Badge bg="secondary" as="a" href={`${baseUrl}${lab.filePath}`} target="_blank" rel="noopener noreferrer">
                  Переглянути методичні вказівки
                </Badge>
              </h3>
            )
            : <IframeLoader className={cssClasses['pdf-iframe']} src={lab.filePath} title={lab.name} /> }
        </Col>
      </Row>
    </Container>
  );
}

export default Lab;

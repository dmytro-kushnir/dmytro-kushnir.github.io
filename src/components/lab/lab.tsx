import {
  Badge, Button, Col, Container, Row,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import { LabLink } from '../config/configMapping.ts';
import IframeLoader from '../iframe/iframe.tsx';
import cssClasses from '../lecture/lecture.module.scss';
import { isExternalUrl, pdfSrcWithCacheBust } from '../../utils/pdfSrc.ts';
import { isMobileDevice } from '../../utils/utils.ts';

interface Props {
  lab: LabLink;
}

function Lab({ lab }: Props) {
  const baseUrl = window.location.origin;
  const config = useConfig(useAppName());
  const { appPath, codeRepoUrl, labList } = config;

  const currentIndex = labList.findIndex((item) => item.id === lab.id);
  const prevLab = currentIndex > 0 ? labList[currentIndex - 1] : null;
  const nextLab = currentIndex >= 0 && currentIndex < labList.length - 1
    ? labList[currentIndex + 1] : null;

  const externalGuide = isExternalUrl(lab.filePath);
  const pdfSrc = pdfSrcWithCacheBust(lab.filePath, lab.id, 'lab');

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
      </Row>
      <Row className="mt-2 mb-4">
        <Col>
          {prevLab && (
            <Link to={`${appPath}/labs/${prevLab.id}`}>
              <Button variant="primary" className="mb-2 me-2">Попередня лабораторна</Button>
            </Link>
          )}
          {nextLab && (
            <Link to={`${appPath}/labs/${nextLab.id}`}>
              <Button variant="secondary" className="mb-2 me-2">Наступна лабораторна</Button>
            </Link>
          )}
          {lab.sample && lab.samplePath && (
            <a href={`${lab.samplePath}${lab.sample}`} download={lab.sample}>
              <Button variant="primary" className="mb-2 me-2" style={{ backgroundColor: 'var(--app-color-content)' }}>
                {`Завантажити матеріали до лабораторної ${lab.sample}`}
              </Button>
            </a>
          )}
          {lab.theoryPath && (
            <a href={lab.theoryPath} target="_blank" rel="noopener noreferrer">
              <Button variant="outline-primary" className="mb-2 me-2">Теоретичні відомості</Button>
            </a>
          )}
          {codeRepoUrl && (
            <a href={codeRepoUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline-secondary" className="mb-2 me-2">Репозиторій коду</Button>
            </a>
          )}
          {lab.reference && (
            <a href={lab.reference} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="mb-2 me-2" style={{ backgroundColor: 'var(--app-color-content)' }}>
                {lab.reference.startsWith('http') ? 'Код і завдання (GitHub)' : 'Методичне доповнення 2026'}
              </Button>
            </a>
          )}
          {externalGuide && (
            <a href={lab.filePath} target="_blank" rel="noopener noreferrer">
              <Button variant="outline-secondary" className="mb-2">Матеріали (GitHub)</Button>
            </a>
          )}
        </Col>
      </Row>
      {!externalGuide && lab.filePath && (
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
            : (
              <IframeLoader
                key={lab.id}
                className={cssClasses['pdf-iframe']}
                src={pdfSrc}
                title={lab.name}
              />
            ) }
        </Col>
      </Row>
      )}
    </Container>
  );
}

export default Lab;

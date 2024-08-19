import {
  Badge, Col, Container, Row,
  Button,
} from 'react-bootstrap';
import IframeLoader from '../iframe/iframe.tsx';
import cssClasses from '../lecture/lecture.module.scss';
import { isMobileDevice } from '../../utils/utils.ts';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

function CourseWork() {
  const baseUrl = window.location.origin;

  const {
    courseWork: {
      description = '',
      filePath = '',
      name = '',
      objective = '',
      sample = '',
      samplePath = '',
    } = {},
  } = useConfig(useAppName());

  return (
    <Container fluid="md" className="my-4">
      <Row>
        <Col>
          <h1 className="mb-4">
            {description}
          </h1>
          <p>
            <strong>Мета роботи:</strong>
            {' '}
            {objective}
          </p>
          {sample && samplePath && (
          <a href={`${samplePath}${sample}`} download={sample}>
            <Button variant="primary" className="mb-4" style={{ backgroundColor: 'var(--app-color-content)' }}>
              {`Завантажити приклад ${sample}`}
            </Button>
          </a>
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          {isMobileDevice()
            ? (
              <h3>
                <Badge bg="secondary" as="a" href={`${baseUrl}${filePath}`} target="_blank" rel="noopener noreferrer">
                  Переглянути завдання
                </Badge>
              </h3>
            )
            : <IframeLoader className={cssClasses['pdf-iframe']} src={filePath} title={name} /> }
        </Col>
      </Row>
    </Container>
  );
}

export default CourseWork;

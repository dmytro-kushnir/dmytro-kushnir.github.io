import {
  Badge, Col, Container, Row,
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
        </Col>
      </Row>
      <Row>
        <Col>
          { isMobileDevice()
            ? (
              <h3>
                <Badge bg="secondary" as="a" href={`${baseUrl}${lab.filePath}`} target="_blank" rel="noopener noreferrer">
                  Переглянути завдання
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

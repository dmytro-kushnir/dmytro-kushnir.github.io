import {
  Container, Tab, Nav, Row, Col,
} from 'react-bootstrap';
import IframeLoader from '../iframe/iframe.tsx';

import './journals.scss';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

function Journals() {
  const config = useConfig(useAppName());
  const { driveLinks } = config;

  return (
    <Container className="result-block">
      <Tab.Container id="v-pills-tab" defaultActiveKey={driveLinks[0].name}>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column me-3 result-title" role="tablist" aria-orientation="vertical">
              {driveLinks.map((link) => (
                <Nav.Item key={link.name}>
                  <Nav.Link eventKey={link.name}>{link.name}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className="result-table">
              {driveLinks.map((link) => (
                <Tab.Pane key={link.name} eventKey={link.name}>
                  <h6>
                    <a href={link.drive} className="journal-link" target="_blank" rel="noopener noreferrer">
                      Перейти на Google Диск
                    </a>
                  </h6>
                  <IframeLoader src={link.doc} title={link.name} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Journals;

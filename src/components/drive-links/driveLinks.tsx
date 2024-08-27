import {
  Container, Tab, Nav, Row, Col,
} from 'react-bootstrap';
import IframeLoader from '../iframe/iframe.tsx';

import './driveLinks.scss';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

interface DriveLinksProps {
  showJournals?: boolean;
  showVariants?: boolean;
}

function DriveLinks({
  showJournals = false,
  showVariants = false,
}: DriveLinksProps) {
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
                  {showJournals && <IframeLoader src={link.journal} title={link.name} />}
                  {showVariants && link.variants
                      && <IframeLoader src={link.variants} title={link.name} />}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

DriveLinks.defaultProps = {
  showJournals: false,
  showVariants: false,
};

export default DriveLinks;

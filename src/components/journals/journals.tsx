import {
  Container, Tab, Nav, Row, Col,
} from 'react-bootstrap';
import IframeLoader from '../iframe/iframe.tsx';

import './journals.scss';

function Journals() {
    interface TabConfigItem {
        eventKey: string;
        iframeSrc: string;
        link: string;
        title: string;
    }

    const tabConfig: TabConfigItem[] = [
      {
        eventKey: 'journal41',
        iframeSrc: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTFN-svO1QDp9pVAuOLG04_EaBSYtrVedllXBOZ7OCculCvKwaeOQgycI-G0V8K2w/pubhtml?widget=true&chrome=false&headers=false',
        link: 'https://docs.google.com/spreadsheets/d/1Cq50xhcB1aXG2i06z2TTFGQKO9Ov-PLl',
        title: 'KI-41',
      },
      {
        eventKey: 'journal42',
        iframeSrc: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT6R52D_GobEB4aXbe6AIbyMYDH-f0e6xr8KjZl5jwAyidiLuzRP10Kq4rqT1VhDQ/pubhtml?widget=true&chrome=false&headers=false',
        link: 'https://docs.google.com/spreadsheets/d/1cTeO678uh9C8Thpl-To5jLvBJcQVdFTo',
        title: 'KI-42',
      },
    // ... other tabs
    ];

    return (
      <Container className="result-block">
        <Tab.Container id="v-pills-tab" defaultActiveKey={tabConfig[0].eventKey}>
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column me-3 result-title" role="tablist" aria-orientation="vertical">
                {tabConfig.map((tab) => (
                  <Nav.Item key={tab.eventKey}>
                    <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="result-table">
                {tabConfig.map((tab) => (
                  <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
                    <h6>
                      <a href={tab.link} target="_blank" rel="noopener noreferrer">
                        Перейти на Google Диск
                      </a>
                    </h6>
                    <IframeLoader src={tab.iframeSrc} title={tab.title} />
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

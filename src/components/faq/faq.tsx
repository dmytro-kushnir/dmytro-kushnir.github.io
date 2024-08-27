/* eslint-disable max-len */
import {
  Container, Row, Col, Accordion,
} from 'react-bootstrap';
import { FaEnvelope, FaTelegram } from 'react-icons/fa';

import './faq.scss';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

function FaqSection() {
  const config = useConfig(useAppName());
  const faqConfig = config.homePage.faqSection;

  return (
    <section className="faq">
      <Container className="container-narrow">
        <h2 className="text-center">Часті запитання</h2>
        <Row>
          <Col lg={12}>
            <div className="faq-wrapper">
              <Accordion id="accordionMain">
                {faqConfig?.length && faqConfig.map((item, index) => (
                  <Accordion.Item eventKey={String(index)} key={`${item?.title}`}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <div>
                        {item.content.map((text) => (
                          <p key={text}>{text}</p>
                        ))}
                        {item.showOnlineLink && config.onlineLink && (
                        <ul className="summary-list">
                          <li>
                            <strong>Google Meets:</strong>
                          </li>
                          <li>
                            <a href={config.onlineLink} target="_blank" rel="noreferrer">
                              Лінк до сторінки Google
                              Meet
                            </a>
                          </li>
                        </ul>
                        )}
                        {item.includeDriveLinks && (
                        <ul className="disk-list">
                          {config.driveLinks.map((link) => (
                            <li key={link.name}>
                              {link.name}
                              <a href={link.drive} target="_blank" rel="noreferrer">Диск</a>
                              <a href={link.journal} target="_blank" rel="noreferrer">Журнал</a>
                            </li>
                          ))}
                        </ul>
                        )}
                        {item.includeLecturerContact && (
                        <div className="teacher-box">
                          <div className="img-lecturer">
                            <img src={config.staff.lecturerPhoto} alt={config.staff.lecturerName} />
                          </div>
                          <ul className="summary-list">
                            <li>
                              <a href={`mailto:${config.links.mail}`} target="_blank" rel="noreferrer">
                                <FaEnvelope />
                                {config.links.mail}
                              </a>
                            </li>
                            <li>
                              <a href={config.links.telegram} target="_blank" rel="noreferrer">
                                <FaTelegram />
                                {config.links.telegram}
                              </a>
                            </li>
                          </ul>
                        </div>
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FaqSection;

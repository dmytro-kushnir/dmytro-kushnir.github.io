/* eslint-disable max-len */
import {
  Container, Row, Col, Accordion,
} from 'react-bootstrap';
import { FaEnvelope, FaTelegram } from 'react-icons/fa';

import './faq.scss';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';

interface FaqItem {
    id: string;
    title: string;
    content: JSX.Element;
}

function FaqSection() {
  const config = useConfig(useAppName());
  const {
    driveLinks,
    lecturerAssistants,
    lecturerName,
    lecturerPhoto,
    links,
    onlineLink,
    semesters,
  } = config;

  const faqConfig: FaqItem[] = [
    {
      content: (
        <div>
          <p>Заняття з дисципліни Веб-програмування у 2024 році відбуваються офлайн у визначених аудиторіях. За потреби проведення онлайн консультацій, буде доступно онлайн посилання.</p>
          {onlineLink
            && (
            <ul className="summary-list">
              <li>
                <strong>Google Meets:</strong>
              </li>
              <li><a href={onlineLink} target="_blank" rel="noreferrer">Лінк до сторінки Google Meet</a></li>
            </ul>
            )}
          <br />
          <p>
            <strong>Лекції веде та проводить захисти: </strong>
            {lecturerName}
          </p>
          <p>
            <strong>Лабараторні ведуть: </strong>
            {lecturerAssistants.join(', ')}
          </p>
        </div>
      ),
      id: 'collapseOne',
      title: 'Як і де відбуваються заняття?',
    },
    {
      content: (
        <div>
          {/* eslint-disable-next-line max-len */}
          <p>Захист роботи відбувається на наступних поточних заняттях, після пояснення матеріалу. Викладач задає дотичні питання і оцінює роботу студента. Звіти по виконаних роботах викладаються на диск у відповідну папку студента.</p>
          <p>
            Після контрольних дат (
            <strong>
              {`${semesters.duration.partOneEnd} - №1-3, ${semesters.duration.partTwoEnd} - №4-6`}
            </strong>
            ) бали за відповідні лабораторні роботи та доповіді не виставляються.
          </p>
          <p>
            Самостійну роботу можна захищати протягом семестру до
            <strong>
              {' '}
              {semesters.duration.partTwoEnd}
            </strong>
            . Після зазначеної дати бали будуть зменшені.
          </p>
          <p>До заліку допускаються студенти, які захистили ВСІ лабораторні та самостійну роботи.</p>
          <h5 className="text-center mt-3 mb-3">Диски для звітів</h5>
          <ul className="disk-list">
            {driveLinks.map((link) => (
              <li key={link.name}>
                {link.name}
                <a href={link.drive} target="_blank" rel="noreferrer">Диск</a>
                <a href={link.doc} target="_blank" rel="noreferrer">Журнал</a>
              </li>
            ))}
          </ul>
        </div>
      ),
      id: 'collapseTwo',
      title: 'Як відбуваються захисти робіт?',
    },
    {
      content: (
        <div>
          <p>Протягом семестру студенти мають можливість захистити 2 онлайн-задачі.</p>
          <ul className="summary-list">
            <li>{`І половина семестру: ${semesters.duration.partOneStart} - ${semesters.duration.partOneEnd}`}</li>
            <li>{`II половина семестру: ${semesters.duration.partTwoStart} - ${semesters.duration.partTwoEnd}`}</li>
          </ul>
          <p>Якщо студент не зробив задачі протягом першої половини семестру, то в подальшому він має можливість здати лише одну задачу.</p>
          <p>Бали, що отримані за задачі будуть враховані на екзамені як відповідь на описове питання. Описових питань на екзамені є 2, тому кожна захищена задача зараховується як відповідь на одне описове питання. Під час складання екзамену студент завантажує посилання на задачу у вікно описового питання.</p>
          <p>LeetCode задачі НЕ є обов’язковою частиною дисципліни. Студенти, що не робили задачі до екзамену допускаються і мають відповісти на тестові завдання та описові питання.</p>
        </div>
      ),
      id: 'collapseThree',
      title: 'Що таке онлайн задачі LeetCode?',
    },
    {
      content: (
        <div className="teacher-box">
          <div className="img-lecturer">
            <img src={lecturerPhoto} alt={lecturerName} />
          </div>
          <ul className="summary-list">
            <li>
              <a href={`mailto:${links.mail}`} target="_blank" rel="noreferrer">
                <FaEnvelope />
                {links.mail}
              </a>
            </li>
            <li>
              <a href={links.telegram} target="_blank" rel="noreferrer">
                <FaTelegram />
                {links.telegram}
              </a>
            </li>
          </ul>
        </div>
      ),
      id: 'collapseFour',
      title: 'Як зв’язатися з викладачем?',
    },
  ];

  return (
    <section className="faq">
      <Container className="container-narrow">
        <h2 className="text-center">Часті запитання</h2>
        <Row>
          <Col lg={12}>
            <div className="faq-wrapper">
              <Accordion id="accordionMain">
                {faqConfig.map((item) => (
                  <Accordion.Item eventKey={item.id} key={item.id}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.content}</Accordion.Body>
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

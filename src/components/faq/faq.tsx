import {
  Container, Row, Col, Accordion,
} from 'react-bootstrap';
import { FaEnvelope, FaTelegram } from 'react-icons/fa';

import './faq.scss';

interface FaqItem {
  id: string;
  title: string;
  content: JSX.Element;
}

const faqConfig: FaqItem[] = [
  {
    content: (
      <div>
        {/* eslint-disable-next-line max-len */}
        <p>Заняття з дисципліни Веб-програмування у 2024 році відбуваються офлайн у визначених аудиторіях. За потреби проведення онлайн консультацій, буде доступно онлайн посилання.</p>
        <br />
        <h5>Лекції, лабораторні, захисти - Кушнір Дмитро Олександрович</h5>
        <ul className="summaru-list">
          <li>
            <strong>Google Meets:</strong>
            {' '}
            Pass here
          </li>
          <li><a href="link here" target="_blank" rel="noreferrer">Лінк до сторінки Zoom</a></li>
          {/* Other content elements */}
        </ul>
      </div>
    ),
    id: 'collapseOne',
    title: 'Проведення занять',
  },
  {
    content: (
      <div>
        {/* eslint-disable-next-line max-len */}
        <p>Захист роботи відбувається на наступних поточних заняттях, після пояснення матеріалу. Викладач задає дотичні питання і оцінює роботу студента. Звіти по виконаних роботах викладаються на диск у відповідну папку студента</p>
        <p>
          Після контрольних дат (
          <strong>26 березня - №1-3, 24 квітня - №4-6</strong>
          ) бали за відповідні лабораторні роботи та доповіді не виставляються.
        </p>
        <p>
          Самостійну роботу можна захищати протягом семестру до
          <strong> 24 квітня</strong>
          . Після зазначеної дати бали будуть зменшені.
        </p>
        <p>До заліку допускаються студенти, які захистили ВСІ лабораторні та самостійну роботи.</p>
        <h5>Диски для звітів</h5>
        <ul className="summaru-list">
          <li>
            <strong>КІ-41</strong>
            {' '}
            <a href="https://drive.google.com/drive/u/0/folders/168tWDv7CTfGKh5DOTG4rNujxaJS9ZDGW" target="_blank" rel="noreferrer">https://drive.google.com/drive/u/0/folders/168tWDv7CTfGKh5DOTG4rNujxaJS9ZDGW</a>
          </li>
          {/* Other content elements */}
        </ul>
      </div>
    ),
    id: 'collapseTwo',
    title: 'Захист робіт',
  },
  {
    content: (
      <div>
        <p>Протягом семестру студенти мають можливість зробити 2 презентації</p>
        <ul className="summaru-list">
          <li>І половина семестру: 27.02.2023 - 26.03.2023</li>
          <li>ІІ половина семестру: 27.03.2023 - 23.04.2023</li>
        </ul>
        {/* eslint-disable-next-line max-len */}
        <p>Якщо студент не зробив презентацію протягом першої половини семестру, то в подальшому він має можливість зробити лише одну презентацію.</p>
        {/* eslint-disable-next-line max-len */}
        <p>Презентація НЕ є обов’язковою частиною дисципліни. Студенти, що не робили презентацій до екзамену допускаються і мають відповісти на описові питання.</p>
      </div>
    ),
    id: 'collapseThree',
    title: 'Доповіді - презентації',
  },
  {
    content: (
      <div className="teacher-box">
        <div className="teacher-img">
          <img src="" alt="Кушнір Дмитро Олександрович" />
        </div>
        <ul className="summaru-list">
          <li>
            <a href="mailto:Dmytro.O.Kushnir@lpnu.ua" target="_blank" rel="noreferrer">
              <FaEnvelope />
              Dmytro.O.Kushnir@lpnu.ua
            </a>
          </li>
          <li>
            <a href="tel:0679476121" target="_blank" rel="noreferrer">
              <FaTelegram />
              https://t.me/dmytro_kushnir
            </a>
          </li>
          {/* Other contact details */}
        </ul>
      </div>
    ),
    id: 'collapseFour',
    title: 'Зв’язок з викладачем',
  },
];

function FaqSection() {
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

/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import './homePage.scss';
import { FaArrowRight, FaBookOpen, FaCode } from 'react-icons/fa';

import { Container, Row, Col } from 'react-bootstrap';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import Image from '../image/index.tsx';

function CourseIntro() {
  const config = useConfig(useAppName());
  const { appPath } = config;

  return (
    <section>
      <Container>
        <Row className="d-flex align-items-center">
          <Col lg={5}>
            <Image path="/images/apps/wp/about.jpg" alt="Мета та завдання курсу" />
          </Col>
          <Col lg={7}>
            <div className="wow fadeInUp">
              <h2>Мета та завдання курсу</h2>
              <p>Мета курсу - формування сучасного рівня інформаційної та комп&apos;ютерної культури, набуття практичних навичок роботи при створенні інтерактивних технологій.</p>
              <p>В навчальній дисципліні відбувається ознайомлення студентів концептуальним основам сучасних мов Веб-програмування:</p>
              <ul className="about-list">
                <li>
                  <FaArrowRight className="fa-arrow-right" />
                  Концепції дії, концепції розробки Веб-додатків, концепції стилів у Веб-програмуванні.
                </li>
                <li>
                  <FaArrowRight className="fa-arrow-right" />
                  Загальним положеням та властивостям технологій Веб-програмування.
                </li>
                <li>
                  <FaArrowRight className="fa-arrow-right" />
                  Стандартам розробки програмного забезпечення.
                </li>
                <li>
                  <FaArrowRight className="fa-arrow-right" />
                  Побудови складних систем на базі технології Веб-програмування.
                </li>
              </ul>
              <p>Завдання курсу полягає у тому, щоб навчити студентів використовувати підходи до реалізації динамічних веб-додатків, вибір відповідних засобів при розв’язанні конкретних задач, продемонструвати різноманітність варіантів для втілення власних ідей.</p>
              <Link to={`${appPath}/self-work`} className="button button-effect">Підсумок вивчення</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function CourseShortInfo() {
  const config = useConfig(useAppName());
  const { appPath } = config;

  return (
    <section className="courseshort">
      <Container>
        <Row className="courseshort-box wow fadeInUp">
          <Col className="courseshort-item">
            <div className="courseshort-item-content">
              <h4>Теоретична частина</h4>
              <p>Лекції, презентації</p>
            </div>
            <Link to={`${appPath}/lectures`}>
              <FaBookOpen className="icon" />
            </Link>
          </Col>
          <Col className="courseshort-item courseshort-item-secondary">
            <div className="courseshort-item-content">
              <h4>Практична частина</h4>
              <p>Лабораторні та самостійна роботи</p>
            </div>
            <Link to={`${appPath}/self-work`}>
              <FaCode className="icon" />
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function CourseFullInfo() {
  return (
    <section className="course">
      <Container className="container-narrow">
        <h2 className="text-center mb-5">Завдання  навчальної дисципліни</h2>
        <p>
          Внаслідок вивчення навчальної дисципліни  студент повинен бути здатним продемонструвати такі
          <strong> результати</strong>
          :
        </p>
        <ul className="about-list">
          <li>Знати  базові складові клієнт-серверної архітектури.</li>
          <li>Мати уявлення про створення інтерактивних веб-додатків з використанням мови клієнтського програмування JavaScript.</li>
          <li>Мати  уявлення про взаємодію з сервером за технологією Ajax, використання плагінів.</li>
          <li>Набути  навички роботи з програмування на JavaScript. Збереження та отримання даних.  Використання масивів. Робота текстом. Регулярні вирази. Повторне використання  коду і створення функцій. Об&apos;єктно-орієнтоване програмування на JavaScript.  Взаємодія з файловою системою і сервером. Робота з датою і часом. Створення  графіки. </li>
          <li>Керування сесіями. Виконання  запитів і обробка результатів.</li>
          <li>Набути  навички використання використання баз даних при розробці ВЕБ-застосувань.  Проектування Веб-баз даних. Створення баз даних. З&apos;єднання з сервером MySQL засобами JavaScript.</li>
        </ul>
      </Container>
      <Container>
        <Col className="course-area mt-5">
          <Row>
            <Col md={6} xl={5}>
              <div className="course-box">
                <div className="course-box-item">
                  <h5>Лекції</h5>
                  <p>Теоретичні базові знання з клієнтських та серверних мов програмування, грунтовне ознайомлення з сучасними методами та засобами побудови динамічних та інтерактивних веб-додатків.</p>
                  <div className="text">
                    <p>60</p>
                  </div>
                  <span className="arrow" />
                </div>
                <div className="course-box-item">
                  <h5>Презентації</h5>
                  <p>Презентація - це коротке, змістовне представлення певної новинки з області Інтернет чи Веб: інструмент, мова, фреймворк, бібліотека, сервіс, технологія тощо.</p>
                  <div className="text">
                    <p>10</p>
                  </div>
                  <span className="arrow" />
                </div>
              </div>
            </Col>
            <Col md={6} xl={{ offset: 2, span: 5 }}>
              <div className="course-box course-box-right">
                <div className="course-box-item course-box-item-right">
                  <h5>Лабораторні роботи</h5>
                  <p>Створення інтерактивних веб-додатків з  використанням  мови  JavaScript. Вміння перевіряти дані користувача на стороні клієнта. Практичні навики створення інформаційної системи на базі мови програмування JavaScript.</p>
                  <div className="text">
                    <p>30</p>
                  </div>
                  <span className="arrow" />
                </div>
                <div className="course-box-item course-box-item-right">
                  <h5>Самостійна робота</h5>
                  <p>Самостійною роботою є створення динамічного веб-додатку в обраний студентом спосіб.</p>
                  <div className="text text-alt">
                    <p>10</p>
                  </div>
                  <span className="arrow" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
}

function HomePage() {
  return (
    <main>
      <CourseIntro />
      <CourseShortInfo />
      <CourseFullInfo />
    </main>
  );
}

export default HomePage;

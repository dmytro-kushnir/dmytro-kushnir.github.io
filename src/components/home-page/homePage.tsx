/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import './homePage.scss';
import { FaArrowRight, FaBookOpen, FaCode } from 'react-icons/fa';

import {
  Container, Row, Col, Card,
} from 'react-bootstrap';
import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import Image from '../image/index.tsx';
import SliderComponent from '../slider/slider.tsx';

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

function LecturesInfo() {
  const lectures = [
    {
      description: 'Огляд дисципліни. Базові знання об’єктно-орієнтованого програмування.', id: 1, imageUrl: '/images/apps/wp/lectures/lecture1.jpg', link: '/lectures/1', title: 'Тема 1',
    },
    {
      description: 'Клієнт-серверна архітектура. Модель OSI. Протокол прикладного рівня HTTP.', id: 2, imageUrl: '/images/apps/wp/lectures/lecture2.jpg', link: '/lectures/2', title: 'Тема 2',
    },
    {
      description: 'Основні поняття веб-програмування. Знання та вміння для веб-розробника.', id: 3, imageUrl: '/images/apps/wp/lectures/lecture3.jpg', link: '/lectures/3', title: 'Тема 3',
    },
    {
      description: 'Базові технології Веб-програмування. Мова розмітки HTML, HTML 5. Мова стилів CSS, CSS3. Верстка (HTML + CSS). Фреймворки: Angular, React.', id: 4, imageUrl: '/images/apps/wp/lectures/lecture4.jpg', link: '/lectures/4', title: 'Тема 4',
    },
    {
      description: 'Програмування на стороні клієнта (Front-end). Javascript. AJAX. JavaScript и XML. PHP.', id: 5, imageUrl: '/images/apps/wp/lectures/lecture5.jpg', link: '/lectures/5', title: 'Тема 5',
    },
    {
      description: 'Програмування на стороні сервера (Back-end). Огляд мов програмування (Python, Php, Java, C#, Ruby). Javascript. Фреймворк Node.js', id: 6, imageUrl: '/images/apps/wp/lectures/lecture6.jpg', link: '/lectures/6', title: 'Тема 6',
    },
    {
      description: 'Бази даних. MySQL. PostgreSQL. Oracle.', id: 7, imageUrl: '/images/apps/wp/lectures/lecture7.jpg', link: '/lectures/7', title: 'Тема 7',
    },
    {
      description: 'Back-end інструменти.', id: 8, imageUrl: '/images/apps/wp/lectures/lecture8.jpg', link: '/lectures/8', title: 'Тема 8',
    },
    {
      description: 'Front-end інструменти Javascript, jQuery, TwitterBootstrap', id: 9, imageUrl: '/images/apps/wp/lectures/  lecture9.jpg', link: '/lectures/9', title: 'Тема 9',
    },
    {
      description: 'Додаткові інструменти та знання.', id: 10, imageUrl: '/images/apps/wp/lecture10.jpg', link: '/lectures/10', title: 'Тема 10',
    },
  ];

  return (
    <section className="lecture">
      <Container>
        <h2 className="text-center mb-5">Лекційний курс</h2>
        <Row>
          <Col lg={12}>
            <div className="lecture-slider">
              <SliderComponent>
                {lectures.map((lecture) => (
                  <Card className="lecture-single img-effect" key={lecture.id}>
                    <Card.Body className="lecture-single-inner">
                      <div className="poster lecture-item">
                        <Link to={lecture.link}>
                          <img src={lecture.imageUrl} alt={lecture.title} className="img-fluid" />
                        </Link>
                        <Link to={`/lecture/${lecture.id}`} className="read-more">Читати</Link>
                      </div>
                      <div className="lecture-item lecture-content">
                        <h3><Link to={`/lecture/${lecture.id}`}>{lecture.title}</Link></h3>
                        <p>{lecture.description}</p>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </SliderComponent>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function LabsSection() {
  const config = useConfig(useAppName());
  const { appPath } = config;

  const labs = [
    {
      description: 'Знайомство з JavaScript',
      iconSrc: '/images/apps/wp/svg/index-js.svg',
      id: 1,
      imgSrc: '/images/apps/wp/labs/lab1.jpg',
      link: '/labs/lab1',
      title: 'Лабораторна робота 1',
    },
    {
      description: 'Основні конструкції мови JavaScript',
      iconSrc: '/images/apps/wp/svg/index-constuction.svg',
      id: 2,
      imgSrc: '/images/apps/wp/labs/lab2.jpg',
      link: '/labs/lab2',
      title: 'Лабораторна робота 2',
    },
    {
      description: 'Використання функцій JavaScript',
      iconSrc: '/images/apps/wp/svg/index-function.svg',
      id: 3,
      imgSrc: '/images/apps/wp/labs/lab3.jpg',
      link: '/labs/lab3',
      title: 'Лабораторна робота 3',
    },
    {
      description: 'Робота з масивами JavaScript',
      iconSrc: '/images/apps/wp/svg/index-matrix.svg',
      id: 4,
      imgSrc: '/images/apps/wp/labs/lab4.jpg',
      link: '/labs/lab4',
      title: 'Лабораторна робота 4',
    },
    {
      description: 'Робота з рядками у JavaScript',
      iconSrc: '/images/apps/wp/svg/index-string.svg',
      id: 5,
      imgSrc: '/images/apps/wp/labs/lab5.jpg',
      link: '/labs/lab6',
      title: 'Лабораторна робота 5',
    },
    {
      description: "Робота з об'єктами JavaScript",
      iconSrc: '/images/apps/wp/svg/index-object.svg',
      id: 6,
      imgSrc: '/images/apps/wp/labs/lab6.jpg',
      link: '/labs/lab6',
      title: 'Лабораторна робота 6',
    },
  ];

  return (
    <section className="labs">
      <Container>
        <Row className="justify-content-center">
          {labs.map((lab) => (
            <Col md={6} lg={4} className="align-center row-item" key={lab.id}>
              <div className="labs-single img-effect">
                <div className="labs-single-content">
                  <div className="poster">
                    <Link to={`${appPath}${lab.link}`}>
                      <img src={lab.imgSrc} alt={lab.title} />
                    </Link>
                  </div>
                  <div className="icon-box-wrapper">
                    <div className="icon-box">
                      <Link to={`${appPath}${lab.link}`}>
                        <img src={lab.iconSrc} alt={lab.title} />
                      </Link>
                    </div>
                  </div>
                  <h5>{lab.title}</h5>
                  <p>{lab.description}</p>
                </div>
                <Link to={`${appPath}${lab.link}`} className="button button-full button-effect">
                  Перейти до роботи
                </Link>
              </div>
            </Col>
          ))}
        </Row>
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
      <LecturesInfo />
      <LabsSection />
    </main>
  );
}

export default HomePage;

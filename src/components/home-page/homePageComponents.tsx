/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import './homePageComponents.scss';
import { FaArrowRight, FaBookOpen, FaCode } from 'react-icons/fa';

import {
  Container, Row, Col, Card, Accordion,
} from 'react-bootstrap';

import useConfig from '../config/useConfig.ts';
import useAppName from '../context/useAppNameContext.ts';
import Image from '../image/index.tsx';
import SliderComponent from '../slider/slider.tsx';
import { isMobileDevice } from '../../utils/utils.ts';

export function CourseIntro() {
  const config = useConfig(useAppName());
  const { appPath, homePage: { aboutSection = { } } } = config;
  const {
    logo = { alt: '', url: '' },
    objective = {},
  } = aboutSection;

  return (
    <section>
      <Container>
        <Row className="d-flex align-items-start">
          <Col lg={5}>
            <Image alt={logo.alt} className="rounded" path={logo.url} />
          </Col>
          <Col lg={7}>
            <div className="wow fadeInUp">
              <h2>{logo.alt}</h2>
              <p>{objective.primary}</p>
              {objective?.secondary && <p>{objective.secondary}</p>}
              <ul className="about-list">
                {objective?.list && objective.list?.length > 0 && objective.list.map((item) => (
                  <li key={item}>
                    <FaArrowRight className="fa-arrow-right" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>{objective.conclusion}</p>
              <Link to={`${appPath}${objective.link}`} className="button button-effect">
                Підсумок вивчення
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export function CourseShortInfo() {
  const config = useConfig(useAppName());
  const { appPath, homePage = {} } = config;
  const { shortInfoSection: { theoryPart = '', practicalPart = '' } = {} } = homePage;

  return (
    <section className="courseshort">
      <Container>
        <Row className="courseshort-box wow fadeInUp">
          <Col className="courseshort-item">
            <div className="courseshort-item-content">
              <h4>Теоретична частина</h4>
              <p>{theoryPart}</p>
            </div>
            <Link to={`${appPath}/lectures`}>
              <FaBookOpen className="icon" />
            </Link>
          </Col>
          <Col className="courseshort-item courseshort-item-secondary">
            <div className="courseshort-item-content">
              <h4>Практична частина</h4>
              <p>{practicalPart}</p>
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

export function CourseFullInfo() {
  const config = useConfig(useAppName());
  const { scores, homePage = {} } = config;
  const { fullInfoSection: { roadmap = [], tasks = [] } = {} } = homePage;

  return (
    <section className="course">
      <Container className="container-narrow">
        <h2 className="text-center mb-5">Завдання навчальної дисципліни</h2>
        <p>
          Внаслідок вивчення навчальної дисципліни студент повинен бути здатним продемонструвати такі
          <strong> результати</strong>
          :
        </p>
        {tasks && (
          <ul className="about-list">
            {tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        )}
      </Container>
      <Container>
        <Col className="course-area mt-5">
          <Row>
            {roadmap?.map((item, index) => {
              const score = scores[item.type];
              const isLastItem = index === roadmap.length - 1;
              const isOdd = roadmap.length % 2 !== 0;

              return (
                <Col key={item.type} md={6} xl={index % 2 === 0 ? 5 : { offset: 2, span: 5 }}>
                  <div className={`course-box ${index % 2 !== 0 ? 'course-box-right' : ''}`}>
                    <div
                      className={`course-box-item ${index % 2 !== 0 ? 'course-box-item-right' : ''} ${
                        isLastItem && isOdd ? 'last-item' : ''
                      }`}
                    >
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      {score !== undefined && (
                        <div className={`text ${isLastItem ? 'text-alt' : ''}`}>
                          <p>{score}</p>
                        </div>
                      )}
                      {!isLastItem && <span className="arrow" />}
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Container>
    </section>
  );
}

export function LecturesInfo() {
  const config = useConfig(useAppName());
  const { appPath, lecturesList } = config;
  const baseUrl = window.location.origin;

  return (
    <section className="lecture">
      <Container>
        <h2 className="text-center mb-5">Лекційний курс</h2>
        <Row>
          <Col lg={12}>
            <div className="lecture-slider">
              <SliderComponent>
                {lecturesList.map((lecture, index) => (
                  <Card className="lecture-single img-effect" key={lecture.id}>
                    <Card.Body className="lecture-single-inner">
                      <div className="poster lecture-item">
                        <Image path={lecture.imageUrl || ''} alt={`Тема ${index + 1}`} className="img-fluid" />
                        { isMobileDevice()
                          ? <a href={`${baseUrl}${lecture.filePath}`} className="read-more" target="_blank" rel="noopener noreferrer">Читати</a>
                          : <Link to={`${appPath}/lectures/${lecture.id}`} className="read-more">Читати</Link>}
                      </div>
                      <div className="lecture-item lecture-content">
                        <h3>
                          { isMobileDevice()
                            ? <a href={`${baseUrl}${lecture.filePath}`} target="_blank" rel="noopener noreferrer">{`Тема ${index + 1}`}</a>
                            : <Link to={`${appPath}/lectures/${lecture.id}`}>{`Тема ${index + 1}`}</Link>}
                        </h3>
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

export function LabsSection() {
  const config = useConfig(useAppName());
  const { appPath, labList } = config;
  const baseUrl = window.location.origin;

  return (
    <section className="labs">
      <Container>
        <h2 className="text-center mb-5">Лабараторні роботи</h2>
        <Row className="justify-content-center">
          {labList.map((lab) => (
            <Col md={6} lg={4} className="align-center row-item" key={lab.id}>
              <div className="labs-single img-effect">
                <div className="labs-single-content">
                  <div className="poster">
                    {isMobileDevice()
                      ? (
                        <a href={`${baseUrl}${lab.filePath}`} target="_blank" rel="noopener noreferrer">
                          <img
                            src={lab.imgSrc}
                            alt={lab.name}
                          />
                        </a>
                      )
                      : (<Link to={`${appPath}${lab.link}`}><img src={lab.imgSrc} alt={lab.name} /></Link>)}
                  </div>
                  <div className="icon-box-wrapper">
                    <div className="icon-box">
                      {isMobileDevice()
                        ? (
                          <a href={`${baseUrl}${lab.filePath}`} target="_blank" rel="noopener noreferrer">
                            <img
                              src={lab.iconSrc}
                              alt={lab.name}
                            />
                          </a>
                        )
                        : (<Link to={`${appPath}${lab.link}`}><img src={lab.iconSrc} alt={lab.name} /></Link>)}
                    </div>
                  </div>
                  <h5>{lab.name}</h5>
                  <p>{lab.description}</p>
                </div>
                {isMobileDevice()
                  ? (
                    <a
                      href={`${baseUrl}${lab.filePath}`}
                      className="button button-full button-effect"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Перейти до роботи
                    </a>
                  )
                  : (
                    <Link to={`${appPath}${lab.link}`} className="button button-full button-effect">
                      Перейти до
                      роботи
                    </Link>
                  )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export function LeetCodeTasksSection() {
  type LeetCodeLink = {
    title: string;
    url: string;
  }

  interface AccordionItem {
    content: string[];
    eventKey: string;
    header: string;
    link?: LeetCodeLink;
    listItems?: string[];
  }

  interface LeetCodeTasksConfig {
    accordionItems: AccordionItem[];
    introduction: string;
    title: string;
  }

  const config = useConfig(useAppName());
  const { semesters } = config;

  const leetCodeTasksConfig: LeetCodeTasksConfig = {
    accordionItems: [
      {
        content: [
          'Задачі на LeetCode - це завдання, яке практично демонструє вимоги до технічного кандидата під час співбесіди в IT.',
          'Структурно, типи задач можна поділити на:',
        ],
        eventKey: '0',
        header: 'Що таке онлайн задачі LeetCode?',
        listItems: [
          'алгоритмічні задачі;',
          'задачі на стуктури даних;',
          'математичні задачі;',
          'дизайн систем (ООП, API інтерфейси тощо);',
          'задачі пов\'язані з конкретною мовою програмування (наприклад Javascript).',
        ],
      },
      {
        content: [
          'Задачі на онлайн ресурсі LeetCode - це завдання, які практично демонструють вимоги до технічного кандидата під час співбесіди в IT. Нижче надано посилання для виконання задач.',
          'Список відсортований від легших задач до важчих, але цілком можна обирати довільну складність. Щодо варіантів, то студент може обирати ті задачі, які йому найбільше подобаються.',
          'Обов\'язково виконані задачі потрібно пояснити викладачеві на лабараторній роботі і аргументувати чому саме такий підхід іплементації було обрано.',
        ],
        eventKey: '1',
        header: 'Посилання на виконання задач та порядок роботи.',
        link: {
          title: 'Перейти до завдання',
          url: 'https://leetcode.com/problem-list/top-interview-questions/?sorting=W3sic29ydE9yZGVyIjoiQVNDRU5ESU5HIiwib3JkZXJCeSI6IkRJRkZJQ1VMVFkifV0%3D',
        },
      },
      {
        content: [
          'Презентація виконаних задач на LeetCode проводиться на лабораторних заняттях в присутності викладача та студентів групи.',
          'Викладач оцінює якість доповіді, виконання задачі та опанування теми студентом.',
          'Максимальна оцінка за успішно виконану та захищену онлайн задачу - 5 балів.',
        ],
        eventKey: '2',
        header: 'Оцінювання виконання задач.',
      },
      {
        content: [
          'Протягом семестру студенти мають можливість захистити 2 онлайн-задачі.',
          'Якщо студент не зробив задачі протягом першої половини семестру, то в подальшому він має можливість здати лише одну задачу.',
          'Бали, що отримані за задачі будуть враховані на екзамені як відповідь на описове питання. Описових питань на екзамені є 2, тому кожна захищена задача зараховується як відповідь на одне описове питання. Під час складання екзамену студент завантажує посилання на задачу у вікно описового питання.',
          'LeetCode задачі НЕ є обов’язковою частиною дисципліни. Студенти, що не робили задачі до екзамену допускаються і мають відповісти на тестові завдання та описові питання.',
        ],
        eventKey: '3',
        header: 'Бонуси від виконання онлайн-задач.',
        listItems: [
          `І половина семестру: ${semesters.duration.partOneStart} - ${semesters.duration.partOneEnd}`,
          `II половина семестру: ${semesters.duration.partTwoStart} - ${semesters.duration.partTwoEnd}`,
        ],
      },
    ],
    introduction: `Вміння презентувати як теоретичні так і практичні знання є важливою складовою для успішного працевлаштування в IT. 
    Для того щоб набути цих навичок, студенти мають можливість виконати набір завдань на онлайн ресурсі LeetCode, та представити результати викладачеві.`,
    title: 'Онлайн задачі на LeetCode',
  };

  return (
    <section className="presentation">
      <Container>
        <h2>{leetCodeTasksConfig.title}</h2>
        <Row>
          <Col lg={6}>
            <div className="presentation-img">
              <Image path="/images/apps/wp/presentation.png" alt="LeetCode задачі" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="presentation-box">
              <p>{leetCodeTasksConfig.introduction}</p>
              <div className="presentation-wrapper">
                <Accordion className="accordion-flush" id="accordionPresentation">
                  {leetCodeTasksConfig.accordionItems.map((item) => (
                    <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                      <Accordion.Header as="h6" id={`flush-heading${item.eventKey}`}>
                        {item.header}
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        {item.content.map((paragraph) => <p className="mb-2" key={paragraph.substring(0, 10)}>{paragraph}</p>)}
                        {item.link?.url && (<a href={item.link.url} target="_blank" rel="noopener noreferrer">{item.link.title}</a>
                        )}
                        {item.listItems && (
                        <ul className="summary-list">
                          {item.listItems.map((listItem) => <li key={listItem.substring(0, 10)}>{listItem}</li>)}
                        </ul>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export function PointsDistributionSection() {
  const config = useConfig(useAppName());
  const { appPath, homePage = {} } = config;
  const { pointsDistributionSection: { additionalNotes = [], periods = [] } = {} } = homePage;

  return (
    <section className="balls dark-overlay bg-img" style={{ backgroundImage: "url('/images/apps/wp/bg-points.jpg')" }}>
      <Container>
        <h2>Розподіл балів</h2>
        <Row>
          <Col lg={12}>
            <div className="balls-box">
              <div className="icon-box__wrapper">
                <Link to={`${appPath}`} className="icon-box">
                  <i className="las la-phone" />
                </Link>
              </div>
              <Row>
                {periods.map((period) => (
                  <Col lg={4} md={6} key={period.title.substring(0, 10)}>
                    <div className="inner-box">
                      <h4>{period.title}</h4>
                      <ul className="inner-list">
                        {period.items.map((item) => (
                          <li key={item.label.substring(0, 10)}>
                            <span className={item.specialClass}>{item.points}</span>
                            {item.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
              <hr />
              <Row>
                <Col xs={12} className="text-center">
                  {additionalNotes.map((note) => (
                    <p key={note.substring(0, 10)}>{note}</p>
                  ))}
                  <ul className="inner-bullet">
                    <li>
                      <strong className="work" />
                      {' '}
                      Виконання під час навчання
                    </li>
                    <li>
                      <strong className="test" />
                      {' '}
                      Виконання під час контрольних заходів
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

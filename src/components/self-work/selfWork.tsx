import {
  Container, ListGroup, Figure, Row, Col,
} from 'react-bootstrap';
import './selfWork.module.scss';
import IframeLoader from '../iframe/iframe.tsx';
import cssClasses from '../lecture/lecture.module.scss';

type CourseOption = {
    title: string;
    description: string;
    examples: string[];
    iframeSrc?: string;
};

type FrameworkOption = {
    name: string;
    imageUrl: string;
    link: string;
};

type CourseContentConfig = {
    courseOptions: CourseOption[];
    frameworkOptions: FrameworkOption[];
};

const config: CourseContentConfig = {
  courseOptions: [
    {
      description: 'Написання власних динамічних елементів на чистому Javascript...',
      examples: [
        'Різноманітні ефекти, залежно від дій користувача.',
        'Діалогові вікна.',
        'Випадне меню на сайті при наведенні курсору миші.',
        'Поява чи зникнення елементів при натисканні на кнопку.',
        'Поява спливаючого вікна, коли курсор миші пішов межі вікна браузера.',
        'Затемнення заднього фону та ефекти плавної появи елемента.',
        // ... other examples ...
      ],
      title: 'Створення повноцінного тематичного сайту з втіленням Javascript',
    },
    {
      description: 'Description for creating a standalone web app using pure Javascript...',
      examples: [
        'Інтерактивна гра.',
        'Автоматизована презентація.',
        'Система анкетування з виведенням підсумкового висновку.',
        'Інфографіка, що формується з даних форми, яка заповнюється користувачам',
        'Математичний калькулятор.',
        // ... other examples ...
      ],
      iframeSrc: 'https://htmlpreview.github.io/?https://github.com/dmytro-kushnir/tic-tac-toe-legacy-2015-project/blob/main/index%20(1).html',
      title: 'Створення окремого веб-додатку, написаного на чистому Javascript',
    },
    {
      description: 'Description for creating a full-fledged website using JS frameworks...',
      examples: [
        // Examples if applicable
      ],
      title: 'Створення повноцінного сайту, написаного за допомогю JS-фрейворків',
    },
    // ... other course options, like dynamic applications using server-side languages ...
  ],
  frameworkOptions: [
    // ... existing frameworks ...
    {
      imageUrl: 'images/icon/angular.png',
      link: 'https://angularjs.org/',
      name: 'Angular JS',
    },
    {
      imageUrl: 'images/icon/ember.png',
      link: 'https://emberjs.com/',
      name: 'Ember JS',
    },
    {
      imageUrl: 'images/icon/backbone.png',
      link: 'https://backbonejs.org/',
      name: 'Backbone JS',
    },
    {
      imageUrl: 'images/icon/nextjs.png',
      link: 'https://nextjs.org/',
      name: 'NextJS',
    },
    // ... other server-side frameworks ...
  ],
};

function CourseContent() {
  const renderCourseOptions = (courseOptions: CourseContentConfig['courseOptions']) => courseOptions.map((option) => (
    <div key={option.description}>
      <h5>{option.title}</h5>
      <p>{option.description}</p>
      <ListGroup as="ul">
        {option.examples.map((example) => (
          <ListGroup.Item key={example}>{example}</ListGroup.Item>
        ))}
      </ListGroup>
      {option.iframeSrc && (
      <IframeLoader className={cssClasses['example-iframe']} src={option.iframeSrc} title="tic-tac-toe-legacy-2015-project" />
      )}
    </div>
  ));

  const renderFrameworkOptions = (frameworkOptions: CourseContentConfig['frameworkOptions']) => (
    <Row>
      {frameworkOptions.map((framework) => (
        <Col md={4} key={framework.link}>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt={framework.name}
              src={framework.imageUrl}
            />
            <Figure.Caption>
              <a href={framework.link} target="_blank" rel="noopener noreferrer">{framework.name}</a>
            </Figure.Caption>
          </Figure>
        </Col>
      ))}
    </Row>
  );

  return (
    <Container className="container-narrow my-4">
      <h1>Виконання самостійної роботи</h1>
      {renderCourseOptions(config.courseOptions)}
      {renderFrameworkOptions(config.frameworkOptions)}
    </Container>
  );
}

export default CourseContent;

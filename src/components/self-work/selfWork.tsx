import {
  Container, Card, ListGroup, Accordion, Row, Col,
} from 'react-bootstrap';

import cssClasses from './selfWork.module.scss';

import IframeLoader from '../iframe/iframe.tsx';

interface CourseOptionLink {
  url: string;
  imageUrl: string;
  altText: string;
  text: string;
}

interface SubTopic {
  items: string[];
  title: string;
}

interface CourseOption {
  title: string;
  description: string;
  subTopics?: SubTopic[];
  links?: CourseOptionLink[];
  iframeSrc?: string;
}

interface CourseInfoConfig {
  assessment: string;
  instruction: string;
  objective: string;
  options: CourseOption[];
  reportContents: string[];
  title: string;
  workOrder: string[];
}

const courseInfoConfig: CourseInfoConfig = {
  assessment: 'Максимальна оцінка виконаної самостійної роботи 20 балів.',
  instruction: 'Для виконання самостійної роботи студент обирає один з наведених нижче варіантів:',
  objective: 'практично застосувати отримані під час вивчення курсу навички та знання.',
  options: [
    {
      description: 'Написання власних динамічних елементів на чистому Javascript з використанням додаткових бібліотек. Інтерфейс сайту - українською мовою.',
      subTopics: [
        {
          items: [
            'Різноманітні ефекти, залежно від дій користувача.',
            'Діалогові вікна.',
            'Випадне меню на сайті при наведенні курсору миші.',
            'Поява чи зникнення елементів при натисканні на кнопку.',
            'Поява спливаючого вікна, коли курсор миші пішов межі вікна браузера.',
            'Затемнення заднього фону та ефекти плавної появи елемента.',
          ],
          title: 'Взаємодії з користувачем та події',
        },
        {
          items: [
            'При настанні певної події зміна зовнішнього вигляду елементів на сторінці.',
            'При певній події додавання певних елементів або атрибутів до них.',
          ],
          title: 'Взаємодія з HTML-елементами на сторінці та керувати їх вмістом та стилями',
        },
        {
          items: [
            'JS-анімація, що реагує на дії користувача.',
            'Плавна поява, приховування та переміщення об\'єктів сторінки при певних діях користувача.',
          ],
          title: 'Додавання анімації та різноманітних графічних ефектів на веб-сторінки',
        },
        {
          items: [
            'Таймер зворотного відліку від заданої користувачем дати.',
            'Калькулятор підрахунку з певних полів форми.',
            'Конвертація певних величин, введених користувачем (валюта, одиниці виміру, RGB to HEX тощо).',
            'Опитувальна система з виведенням результату.',
          ],
          title: 'Окремі сервіси. Насправді список реалізацій є необмежений, тому студент може втілювати власні ідеї.',
        },
      ],
      title: '1. Створення повноцінного тематичного сайту з втіленням Javascript',
    },
    {
      description: 'Написання інтерактивної аплікації, сервісу або веб-додатку',
      iframeSrc: 'http://htmlpreview.github.io/?https://github.com/dmytro-kushnir/tic-tac-toe-legacy-2015-project/blob/main/index.html',
      subTopics: [
        {
          items: [
            'Інтерактивна гра.  ',
            'Автоматизована презентація.',
            'Система анкетування з виведенням підсумкового висновку.',
            'Інфографіка, що формується з даних форми, яка заповнюється користувачам',
            'Математичний калькулятор.',
          ],
          title: 'Приклади сервісів. Насправді список реалізацій є необмежений, тому студент може втілювати власні ідеї.',
        },
      ],
      title: '2. Створення окремого веб-додатку, написаного на чистому Javascript',
    },
    {
      description: 'Написання інтерактивного сайту за допомогою веб-фреймворків. Наприклад цей статичний сайт написаний на Vite + ReactJs',
      links: [
        {
          altText: 'Angular',
          imageUrl: '/images/apps/wp/icon/angular.png',
          text: 'Angular JS',
          url: 'https://angularjs.org/',
        },
        {
          altText: 'Backbone',
          imageUrl: '/images/apps/wp/icon/backbone.png',
          text: 'Backbone JS',
          url: 'https://backbonejs.org/',
        },
        {
          altText: 'Ember',
          imageUrl: '/images/apps/wp/icon/ember.png',
          text: 'Ember JS',
          url: 'https://emberjs.com/',
        },
        {
          altText: 'NextJS',
          imageUrl: '/images/apps/wp/icon/nextjs.png',
          text: 'NextJS',
          url: 'https://nextjs.org/',
        },
        {
          altText: 'React',
          imageUrl: '/images/apps/wp/icon/react.png',
          text: 'React JS',
          url: 'https://react.dev/learn',
        },
        {
          altText: 'Svelte',
          imageUrl: '/images/apps/wp/icon/svelte.png',
          text: 'Svelte JS',
          url: 'https://svelte.dev/',
        },
        {
          altText: 'Vue',
          imageUrl: '/images/apps/wp/icon/vue.png',
          text: 'Vue JS',
          url: 'https://vuejs.org/',
        },
      ],
      title: '3. Створення повноцінного сайту, написаного за допомогою JS-фрейворків',
    },
    {
      description: `Ваш сайт цілком може хоститись на локальному сервері. Така технологія називається Server Side Rendering (SSR).
       Для реалізації таких потреб цілком можна використати мову програмування Javascript (фреймворк  NodeJs), але цілком можуть підійти і
       інші мови програмування з можливістю підключення відповідних фреймворків:`,
      links: [
        {
          altText: 'C#',
          imageUrl: '/images/apps/wp/icon/c.png',
          text: 'C#',
          url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
        },
        {
          altText: 'Java',
          imageUrl: '/images/apps/wp/icon/java.png',
          text: 'Java',
          url: 'https://www.java.com/en/',
        },
        {
          altText: 'PHP',
          imageUrl: '/images/apps/wp/icon/php.png',
          text: 'PHP',
          url: 'https://www.php.net/',
        },
        {
          altText: 'Python',
          imageUrl: '/images/apps/wp/icon/python.png',
          text: 'Python',
          url: 'https://www.python.org/',
        },
        {
          altText: 'Ruby',
          imageUrl: '/images/apps/wp/icon/ruby.png',
          text: 'Ruby',
          url: 'https://www.ruby-lang.org/en/',
        },
      ],
      title: '4. Створення динамічного додатку, написаного мовою серверного програмування',
    },
  ],
  reportContents: [
    'Тема розробленого додатку.',
    'Адреса або місце розміщення.',
    'Застосовані мови, фрейворки чи бібліотеки.',
    'Скрін сторінки з реалізованими динамічними елементами.',
    'У висновку оцінити процес створення додатку, доступність та ефективність застосованих мов, фреймворків та бібліотек.',
  ],
  title: 'Виконання самостійної роботи',
  workOrder: [
    'Обрати варіант виконання самостійної роботи.',
    'Визначитися з тематикою проєкту, його назвою та динамічними елементами для реалізації.',
    'Реалізувати проект у вибраний спосіб.',
    'Розгорнути проект на безкоштовному хостингу або локальному сервері.',
    'По результатах роботи сформувати звіт.',
  ],
};

function CourseContent() {
  return (
    <Container className="container-narrow my-4">
      <h1>{courseInfoConfig.title}</h1>
      <p>
        <strong>Мета роботи:</strong>
        {' '}
        {courseInfoConfig.objective}
      </p>
      <p>{courseInfoConfig.instruction}</p>

      <Accordion id="accordionMain" className="mb-4">
        {courseInfoConfig.options.map((option, index) => (
          <Accordion.Item eventKey={String(index)} key={option.title}>
            <Accordion.Header>{option.title}</Accordion.Header>
            <Accordion.Body>
              <p>{option.description}</p>
              {option.subTopics && option.subTopics.map((subTopic) => (
                <Card className="mb-3" key={subTopic.title}>
                  <Card.Header>
                    <h6 className="lead">{subTopic.title}</h6>
                  </Card.Header>
                  <ListGroup variant="flush">
                    {subTopic.items.map((item) => (
                      <ListGroup.Item key={item}>{item}</ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card>
              ))}
              <Row>
                {option.links && option.links.map((link) => (
                  <Col md={6} lg={4} key={link.url}>
                    {' '}
                    {' '}
                    {/* Adjust the column sizes as needed */}
                    <Card className="mb-2 text-center">
                      <Card.Body>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <img src={link.imageUrl} alt={link.altText} className="img-fluid" />
                          <Card.Title>{link.text}</Card.Title>
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
              {option.iframeSrc && (
              <IframeLoader className={cssClasses['example-iframe']} src={option.iframeSrc} title={`Embedded Content - ${option.title}`} />
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

      <h2>Оцінювання роботи</h2>
      <p>{courseInfoConfig.assessment}</p>

      <h2>Порядок роботи</h2>
      <ol>
        {courseInfoConfig.workOrder.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h2>Зміст звіту</h2>
      <ol className="mb-4">
        {courseInfoConfig.reportContents.map((content) => (
          <li key={content}>{content}</li>
        ))}
      </ol>
    </Container>
  );
}

export default CourseContent;

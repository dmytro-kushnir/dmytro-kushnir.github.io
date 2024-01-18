import {
  Container, Card, ListGroup, Accordion,
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
  instruction: 'Для виконання самостійної роботи студент обирає один з наведених нижче варіантів',
  objective: 'практично застосувати отримані під час вивчення курсу навички та знання.',
  options: [
    {
      description: 'Написання власних динамічних елементів на чистому Javascript з використанням бібліотеки jQuery (не обов’язково).',
      subTopics: [
        {
          items: [
            'Різноманітні ефекти, залежно від дій користувача.',
            'Діалогові вікна.',
            // ... other items ...
          ],
          title: 'Взаємодії з користувачем та події',
        },
        {
          items: [
            'При настанні певної події зміна зовнішнього вигляду елементів на сторінці.',
            // ... other items ...
          ],
          title: 'Взаємодія з HTML-елементами на сторінці та керувати їх вмістом та стилями',
        },
        {
          items: [
            'JS-анімація, що реагує на дії користувача.',
            // ... other items ...
          ],
          title: 'Додавання анімації та різноманітних графічних ефектів на веб-сторінки',
        },
        {
          items: [
            'Таймер зворотного відліку від заданої користувачем дати.',
            // ... other items ...
          ],
          title: 'Окремі сервіси',
        },
        // ... other subTopics ...
      ],
      title: 'Створення повноцінного тематичного сайту з втіленням Javascript',
    },
    {
      description: 'Опис варіанту, що включає розробку окремих веб-додатків...',
      iframeSrc: 'https://htmlpreview.github.io/?https://github.com/dmytro-kushnir/tic-tac-toe-legacy-2015-project/blob/main/index%20(1).html',
      subTopics: [
        {
          items: [
            'Інтерактивна гра.',
            'Автоматизована презентація.',
          ],
          title: '',
        },
      ],
      title: '2. Створення окремого веб-додатку, написаного на чистому Javascript',
    },
    {
      description: 'Опис варіанту, що включає розробку за допомогою мов серверного програмування.',
      links: [
        {
          altText: 'PHP',
          imageUrl: 'images/icon/php.png',
          text: 'PHP',
          url: 'https://www.php.net/',
        },
        {
          altText: 'Python',
          imageUrl: 'images/icon/python.png',
          text: 'Python',
          url: 'https://www.python.org/',
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
    'Визначитися з тематикою проекту, його назвою та динамічними елементами для реалізації.',
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

      <Accordion id="accordionMain">
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
              {option.links && option.links.map((link) => (
                <div key={link.imageUrl} className="mb-2">
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <img src={link.imageUrl} alt={link.altText} />
                    <p>{link.text}</p>
                  </a>
                </div>
              ))}
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
      <ol>
        {courseInfoConfig.reportContents.map((content) => (
          <li key={content}>{content}</li>
        ))}
      </ol>
    </Container>
  );
}

export default CourseContent;

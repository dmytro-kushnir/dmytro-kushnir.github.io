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
  type?: 'poster' | 'logo';
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

interface SelfWorkConfig {
  assessment: string;
  instruction: string;
  objective: string;
  options: CourseOption[];
  reportContents: string[];
  title: string;
  workOrder: string[];
}

const selfWorkConfig: SelfWorkConfig = {
  assessment: 'Максимальна оцінка виконаної самостійної роботи 20 балів.',
  instruction: `Для виконання самостійної роботи студент обирає один з наведених нижче варіантів. Складність варіантів зростає від 1 до 6 (зверху-вниз).
  Чим складніше завдання, тим легше можна отримати позитивні бали. Проте варіанти цілком можна поєднувати то розширювати, і можна отримати хороші
  бали за перші завдання, якщо вони будуть якісно зроблені:`,
  objective: 'практично застосувати отримані під час вивчення курсу навички та знання. Результат виконання у вигляді звіту потрібно завантажити на диск.',
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
      iframeSrc: 'https://raw.githack.com/dmytro-kushnir/tic-tac-toe-legacy-2015-project/main/index.html',
      subTopics: [
        {
          items: [
            'Автоматизована презентація.',
            'Система анкетування з виведенням підсумкового висновку.',
            'Інфографіка, що формується з даних форми, яка заповнюється користувачам',
            'Математичний калькулятор.',
            'Інтерактивна гра. Наприклад, як нижче: ',
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
        {
          altText: 'Vite',
          imageUrl: '/images/apps/wp/icon/vite.svg',
          text: 'Vite JS',
          url: 'https://vitejs.dev/',
        },
        {
          altText: 'TailWind (extra tool for styling)',
          imageUrl: 'https://cdnblog.webkul.com/blog/wp-content/uploads/2024/05/tailwindcss-1633184775.webp',
          text: 'TailWind (extra tool for styling)',
          url: 'https://tailwindcss.com/',
        },
        {
          altText: 'Zod (extra tool for TypeScript type validation)',
          imageUrl: 'https://zod.dev/logo.svg',
          text: 'Zod (extra tool for TypeScript type validation)',
          url: 'https://zod.dev/https://zod.dev/',
        },
        {
          altText: 'XState (extra tool for context management)',
          imageUrl: 'https://stately.ai/logo-black.svg',
          text: 'XState (extra tool for context management)',
          url: 'https://stately.ai/docs/xstate',
        },
      ],
      title: '3. Створення повноцінного сайту, написаного за допомогою JS-фрейворків',
    },
    {
      description: `Ваш сайт цілком може хоститись на локальному сервері. Така технологія називається Server Side Rendering (SSR).
       Для реалізації таких потреб можна використати мову програмування Javascript (фреймворк  NodeJs), але можуть підійти і
       інші мови програмування з можливістю підключення відповідних фреймворків:`,
      links: [
        {
          altText: 'NodeJs',
          imageUrl: '/images/apps/wp/icon/node-js.png',
          text: 'NodeJs (JavaScript)',
          url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
        },
        {
          altText: 'C#',
          imageUrl: '/images/apps/wp/icon/c.png',
          text: 'C#',
          url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
        },
        {
          altText: 'ASP.NET',
          imageUrl: '/images/apps/wp/icon/asp-net.png',
          text: 'ASP.NET (C#)',
          url: 'https://dotnet.microsoft.com/en-us/apps/aspnet',
        },
        {
          altText: 'Java',
          imageUrl: '/images/apps/wp/icon/java.png',
          text: 'Java',
          url: 'https://www.java.com/en/',
        },
        {
          altText: 'Spring',
          imageUrl: '/images/apps/wp/icon/spring.png',
          text: 'Spring (Java)',
          url: 'https://spring.io/',
        },
        {
          altText: 'PHP',
          imageUrl: '/images/apps/wp/icon/php.png',
          text: 'PHP',
          url: 'https://www.php.net/',
        },
        {
          altText: 'Laravel',
          imageUrl: '/images/apps/wp/icon/laravel.png',
          text: 'Laravel (PHP)',
          url: 'https://laravel.com/',
        },
        {
          altText: 'Python',
          imageUrl: '/images/apps/wp/icon/python.png',
          text: 'Python',
          url: 'https://www.python.org/',
        },
        {
          altText: 'Django',
          imageUrl: '/images/apps/wp/icon/django.png',
          text: 'Django (Python)',
          url: 'https://www.djangoproject.com/',
        },
        {
          altText: 'Flask',
          imageUrl: '/images/apps/wp/icon/flask.jpeg',
          text: 'Flask (Python)',
          url: 'https://flask.palletsprojects.com/',
        },
        {
          altText: 'Ruby',
          imageUrl: '/images/apps/wp/icon/ruby.png',
          text: 'Ruby',
          url: 'https://www.ruby-lang.org/en/',
        },
        {
          altText: 'Ruby on Rails',
          imageUrl: '/images/apps/wp/icon/ruby-on-rails.png',
          text: 'Ruby on Rails (Ruby)',
          url: 'https://rubyonrails.org/',
        },
        {
          altText: 'Dart (for Web)',
          imageUrl: '/images/apps/wp/icon/dart.png',
          text: 'Dart (for Web)',
          url: 'https://dart.dev/web',
        },
      ],
      title: '4. Створення динамічного додатку, написаного мовою серверного програмування або серверним фреймворком',
    },
    {
      description: `Кросплатформні рішення з залученням технологій веб-розробки. Такі підходи дозволяють мати одну архітектуру для усіх платфторм.
      Наприклад на React Native простий додаток, написаний на JS фреймворці React може бути запущений як у браузері, так і на Android та iOS.
      Цілком можливо реалізувати мобільний додаток і для конкретної платформи, але тоді він має бути з'єднаний з певним бекенд сервісом через, наприклад, Rest/GraphQL.`,
      links: [
        {
          altText: 'React Native',
          imageUrl: '/images/apps/wp/icon/react-native.png',
          text: 'React Native',
          url: 'https://reactnative.dev/',
        },
        {
          altText: 'Flutter',
          imageUrl: '/images/apps/wp/icon/flutter.png',
          text: 'Flutter',
          url: 'https://flutter.dev/multi-platform/web',
        },
      ],
      title: '5. Створення кросплатформного додатку',
    },
    {
      description: `Рішення масштабуванння веб-аплікації дозволяє створити ізольовані компоненти, які можуть бути запущенні на довільній кількості серверів.
       В рамках цієї роботи доречно поєднати  масштабоване рішення (наприклад Docker), з існуючими веб-фреймворками (попередні пункти). Наприклад, запустити NodeJs сервер, фронтенд на React та базу даних MongoDB в окремих контейнерах Docker.
       З такими більш абстрактними SAAS (Software as a Service) системами як Google Cloud чи AWS можна працювати як і через веб-інтерфейс, так і через їхнє SDK (Software Development Kit), яке інтегровується у ваш веб-фреймворк або операційну систему.
       Інший варіант - PAAS рішення для CI/CD (Continious Integration/Continious Deployment). Доречно використати такі системи як Github Pages чи Vercel для інтеграції статичних сайтів аба serverless. Наприклад, при кожному комміті в гітхабі відбувається автоматичний деплой на обрану PAAS систему.`,
      links: [
        {
          altText: 'Docker',
          imageUrl: '/images/apps/wp/icon/docker.png',
          text: 'Docker',
          url: 'https://www.docker.com/',
        },
        {
          altText: 'Github Pages',
          imageUrl: '/images/apps/wp/icon/github-mark.png',
          text: 'Github Pages',
          url: 'https://pages.github.com/',
        },
        {
          altText: 'Vercel',
          imageUrl: '/images/apps/wp/icon/vercel.png',
          text: 'Vercel',
          url: 'https://vercel.com/docs/getting-started-with-vercel',
        },
        {
          altText: 'Google Cloud',
          imageUrl: '/images/apps/wp/icon/google-cloud.png',
          text: 'Google Cloud',
          url: 'https://cloud.google.com/',
        },
        {
          altText: 'Amazon Web Services',
          imageUrl: '/images/apps/wp/icon/aws.png',
          text: 'Amazon Web Services',
          url: 'https://aws.amazon.com/',
        },
        {
          altText: 'Firebase',
          imageUrl: '/images/apps/wp/icon/firebase.png',
          text: 'Firebase',
          url: 'https://firebase.google.com/',
        },
        {
          altText: 'Fast API',
          imageUrl: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png',
          text: 'Fast API',
          url: 'https://fastapi.tiangolo.com/',
        },
      ],
      title: '6. Створення масштабованого веб-додатку',
    },
    {
      description: `У цьому розділі студент може створити інтерактивний вебдодаток, що використовує сучасні AI-моделі — такі як генеративні мовні моделі (LLM), системи розпізнавання зображень або відеогенерацію. Проєкт реалізується за допомогою таких інструментів, як ComfyUI, YOLO, Jupyter Notebook та Python-бібліотеки, з акцентом на практичне застосування штучного інтелекту у вебсередовищі;
      Приклади робіт:

7.1 Генерація відео з зображення за допомогою AI — студент реалізує інтерфейс для створення коротких відео з одного зображення, використовуючи моделі типу WAN 2.1, lTXV чи інші у ComfyUI. Передбачено базове налаштування тривалості, роздільної здатності та використання VAE;

7.2 Чат з AI: інтеграція LLM у вебдодаток — створення чат-інтерфейсу, який використовує локальну або хмарну LLM-модель (наприклад GPT4All, Mistral або Ollama), збереження історії діалогу, кастомізація промптів, налаштування температури;

7.3 Розпізнавання об’єктів за допомогою AI — проєкт включає завантаження зображення або відео та обробку через модель YOLO чи Segment Anything, відображення bounding box або маски, з можливістю налаштування порогу впевненості. Після цього можна задеплоїти на serverless, наприклад Fast API;

7.4 Інтерактивне середовище для роботи з AI — створення рішення у Jupyter Notebook, що дозволяє експериментувати з моделями, промптами та обробкою зображень/відео. Може включати графічний інтерфейс на Gradio чи Streamlit;

7.5 Відстеження об’єктів на відео (Object Tracking) — побудова застосунку, що дозволяє не лише розпізнавати, але й відстежувати об’єкти на відео в реальному часі. Може використовувати такі трекери як SORT, DeepSORT чи ByteTrack на базі YOLO.`,
      links: [
        {
          altText: 'ComfyUI',
          imageUrl: 'https://blenderneko.github.io/ComfyUI-docs/media/default_workflow.svg',
          text: 'ComfyUI',
          type: 'poster',
          url: 'https://github.com/comfyanonymous/ComfyUI',
        },
        {
          altText: 'YOLO',
          imageUrl: 'https://miro.medium.com/v2/resize:fit:744/1*Vo2wti8Lhmi2lbkvlvU-rA.jpeg',
          text: 'YOLO Object Detection',
          url: 'https://github.com/THU-MIG/yolov10',
        },
        {
          altText: 'Jupyter Notebook',
          imageUrl: 'https://jupyter.org/assets/homepage/main-logo.svg',
          text: 'Jupyter Notebook',
          url: 'https://jupyter.org/',
        },
      ],
      title: '7. Створення інтерактивного додатку з залученням AI моделей (LLM, Object Recognition, тощо.)',
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
    'Реалізувати проєкт у вибраний спосіб.',
    'Розгорнути проєкт на безкоштовному хостингу або локальному сервері. Щодо хостингу можна використати GitHub Pages, Vercel, Netlify, Firebase Hosting, Heroku, AWS, Google Cloud, Azure тощо. Посилання на деякі з них є в пункті 6.',
    'По результатах роботи сформувати звіт.',
  ],
};

function SelfWorkContent() {
  return (
    <Container className="container-narrow my-4">
      <h1>{selfWorkConfig.title}</h1>
      <p>
        <strong>Мета роботи:</strong>
        {' '}
        {selfWorkConfig.objective}
      </p>
      <p>{selfWorkConfig.instruction}</p>

      <Accordion id="accordionMain" className="mb-4">
        {selfWorkConfig.options.map((option, index) => (
          <Accordion.Item eventKey={String(index)} key={option.title}>
            <Accordion.Header>{option.title}</Accordion.Header>
            <Accordion.Body>
              {option.description.split('\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

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
                  <Col xs={12} sm={6} md={6} lg={4} key={link.url}>
                    <Card className="mb-2 text-center">
                      <Card.Body>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={link.imageUrl}
                            alt={link.altText}
                            className={`
                              ${cssClasses['img-fluid']}
                              ${cssClasses['img-fluid-tablet']}
                              ${cssClasses['img-fluid-mobile']}
                              ${link.type === 'poster' ? cssClasses['img-poster'] : ''}
                            `}
                          />
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
      <p>{selfWorkConfig.assessment}</p>

      <h2>Порядок роботи</h2>
      <ol>
        {selfWorkConfig.workOrder.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>

      <h2>Зміст звіту</h2>
      <ol className="mb-4">
        {selfWorkConfig.reportContents.map((content) => (
          <li key={content}>{content}</li>
        ))}
      </ol>
    </Container>
  );
}

export default SelfWorkContent;

import { CommonAppMapping } from '../configMapping.ts';

const courseName = 'Веб Програмування';

const labIcons = [
  '/images/apps/wp/svg/index-js.svg',
  '/images/apps/wp/svg/index-construction.svg',
  '/images/apps/wp/svg/index-function.svg',
  '/images/apps/wp/svg/index-matrix.svg',
  '/images/apps/wp/svg/index-hash.svg',
  '/images/apps/wp/svg/index-object.svg',
];

const posibnykPdf = '/files/apps/wp/navchalnyi-posibnyk.pdf';
/** Absolute URL for FAQ / notes (plain text, not site-relative). */
const posibnykPdfPublic = 'https://dmytro-kushnir.github.io/files/apps/wp/navchalnyi-posibnyk.pdf';
const labsRepoUrl = 'https://github.com/dmytro-kushnir/wp-labs';

// Page anchors into navchalnyi-posibnyk.pdf (physical PDF pages, out/toc.json of wp-book).
const posibnykPages = {
  lab1: 41,
  lab2: 59,
  lab3: 62,
  lab4: 83,
  lab5: 103,
  lab6: 122,
  setup: 148,
  theoryAsync: 56,
  theoryDelivery: 110,
  theoryDom: 48,
  theoryJs: 25,
  theorySecurity: 91,
  theoryServer: 69,
  tracks: 144,
  variants: 140,
};

// Pages of manual sections used by lectures (physical PDF pages, out/toc.json of wp-book).
const posibnykSections: Record<string, number> = {
  1: 10,
  1.1: 11,
  1.2: 12,
  1.3: 14,
  1.4: 16,
  1.5: 18,
  1.6: 19,
  1.7: 20,
  1.8: 21,
  2: 25,
  2.1: 26,
  2.2: 28,
  2.3: 30,
  2.4: 32,
  2.5: 34,
  2.6: 36,
  2.7: 37,
  2.8: 39,
  2.9: 41,
  3: 48,
  3.1: 49,
  3.2: 51,
  3.3: 53,
  3.4: 54,
  3.5: 55,
  3.6: 56,
  3.7: 58,
  3.8: 59,
  3.9: 62,
  4: 69,
  4.1: 70,
  4.2: 72,
  4.3: 74,
  4.4: 76,
  4.5: 78,
  4.6: 80,
  4.7: 81,
  4.8: 83,
  5: 91,
  5.1: 92,
  5.2: 94,
  5.3: 96,
  5.4: 98,
  5.5: 99,
  5.6: 101,
  5.7: 103,
  6: 110,
  6.1: 111,
  6.2: 113,
  6.3: 114,
  6.4: 116,
  6.5: 117,
  6.6: 119,
  6.7: 121,
  6.8: 122,
};

const lectureImages = Array.from({ length: 9 }, (_, i) => `/images/apps/wp/lectures/topic${i + 1}.webp`);

const links = {
  courses: [
    {
      name: 'Архітектура Комп’ютерів',
      path: '/computer-architecture',
    },
    {
      name: 'Периферійні пристрої',
      path: '/peripheral-devices',
    },
    {
      name: courseName,
      path: '/web-programming',
    },
  ],
  department: 'https://eom.lpnu.ua',
  institute: 'https://lpnu.ua/ikta',
  mail: 'Dmytro.O.Kushnir@lpnu.ua',
  scheduleExam: 'https://student2023.lpnu.ua/students_exam',
  scheduleLesson: 'https://student2023.lpnu.ua/students_schedule',
  telegram: 'https://t.me/dmytro_kushnir',
  university: 'https://lpnu.ua',
  vle: 'https://vns.lpnu.ua',
};

const scores = {
  current: 40,
  exam: 45,
  interview: 15,
  labs: 20,
  selfStudy: 20,
};

const semester = {
  end: '02.04.2027',
  middle: '05.03.2027',
  periods: [
    {
      end: '05.03.2027',
      labs: '1-3',
      score: 10,
      start: '08.02.2027',
    },
    {
      end: '02.04.2027',
      labs: '4-6',
      score: 10,
      start: '08.03.2027',
    },
  ],
  start: '08.02.2027',
};

const staff = {
  lecturerAssistants: [
    `Кушнір Дмитро Олександрович (${links.mail})`,
    'Мальцев Едуард Євгенович (Eduard.Y.Maltsev@lpnu.ua)',
    'Іванов Юрій Сергійович (Yuriy.S.Ivanov@lpnu.ua)',
  ],
  lecturerName: 'Кушнір Дмитро Олександрович',
  lecturerPhoto: '/images/apps/wp/lecturer.jpeg',
};

const wpConfig: CommonAppMapping = {
  appPath: '/web-programming',
  articles: [
    {
      description: 'Про паттерни та код стайл | Refactoring Guru',
      link: 'https://refactoring.guru/uk/design-patterns',
      thumbnail: 'https://refactoring.guru/images/patterns/content/index-design-patterns.png?id=2a73abe6d41f0108d6bf636473851484',
      type: 'link',
    },
    {
      description: 'Tech Talk | Вирішуємо життєві негаразди за допомогою JavaScript — Володимир Агафонкін | DOU Day.',
      link: 'https://www.youtube.com/watch?v=m8XXeqpHmfA',
      thumbnail: 'https://img.youtube.com/vi/m8XXeqpHmfA/maxresdefault.jpg',
      type: 'link',
    },
    {
      description: 'Головна проблема мікросервісів, яку часто недооцінюють | Віктор Турський.',
      link: 'https://www.youtube.com/watch?v=MCFMQR6Yvd0',
      thumbnail: 'https://img.youtube.com/vi/MCFMQR6Yvd0/maxresdefault.jpg',
      type: 'link',
    },
    {
      description: 'Чиста Архітектура: Як Створювати Масштабовані Та Гнучкі Системи | Роберт Мартін',
      link: 'https://www.youtube.com/watch?v=o_TH-Y78tt4',
      thumbnail: 'https://img.youtube.com/vi/o_TH-Y78tt4/maxresdefault.jpg',
      type: 'link',
    },
    {
      description: 'Чому композиція може бути ліпшою за наслідування | Fun Fun Function',
      link: 'https://www.youtube.com/watch?v=wfMtDGfHWpA',
      thumbnail: 'https://img.youtube.com/vi/wfMtDGfHWpA/sddefault.jpg',
      type: 'link',
    },
  ],
  codeRepoUrl: labsRepoUrl,
  driveLinks: [
    {
      drive: 'https://drive.google.com/drive/folders/1pB1ys1fhLbb10GfRmVQLmY63QjIAZZs6?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1HTmWfhTRI9naHgO_3Yq5vwiFMn7VlNQU/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-401',
    },
    {
      drive: 'https://drive.google.com/drive/folders/1jYnKu2Yxz3EA2Rhu2aqwK-gk7EIB9APp?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1q4hZN2PpWGIwLxjaaDlL3gMmgB5UJ1UR/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-402',
    },
    {
      drive: 'https://drive.google.com/drive/folders/1LLKMmJe73RLjy8nYsfi8iQAC7mLwaUrZ?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/16x6KwuZc1laj-ToQpBZ2fn5kwFZGMdCA/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-403',
    },
    {
      drive: 'https://drive.google.com/drive/folders/1LLKMmJe73RLjy8nYsfi8iQAC7mLwaUrZ?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1kQ8WBy_OB5IVz11pkB3kPUlG4sS3lWnZ/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-404',
    },
    {
      drive: 'https://drive.google.com/drive/folders/1ObNmRDwZAuSiFUEYK8E05TK1aTiuaLCi?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1AU5N_vRv_znI4ZZ6rwFTtzq82tKLP5r6/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-405',
    },
    {
      drive: 'https://drive.google.com/drive/folders/1Afrj99CeDfOIC7fETvhulcOsjvPFletv?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1BZ3vq7BK5nhZ72Y7JX9sIy2B9aN9Ybw6/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-406',
    },
  ],
  faviconLink: '/images/apps/wp/svg/favicon.svg',
  header: {
    banner: {
      defaultPageConfig: { name: 'home', subtitle: 'Навчальна дисципліна', title: 'Веб-програмування' },
      pageConfigs: [
        { name: 'labs', title: 'Роботи до виконання' },
        { name: 'lectures', title: 'Курс Лекцій' },
        { name: 'self-work', title: 'Самостійна робота' },
        { name: 'articles', title: 'Статті, посилання за тематикою предмету' },
        { name: 'grades', title: 'Журнали успішності' },
      ],
      url: '/images/apps/wp/bg-banner.png',
    },
    logo: {
      alt: 'Веб-програмування',
      url: '/images/apps/wp/logo.png',
    },
  },
  homePage: {
    aboutSection: {
      logo: {
        alt: 'Мета та завдання курсу',
        url: '/images/apps/wp/about.jpg',
      },
      objective: {
        conclusion: `Навчальний посібник 2027: 6 розділів теорії та 6 практичних завдань – послідовних етапів одного вебзастосунку-каталогу для вашої предметної області. Варіанти завдань і треки виконання – у Додатку А посібника, програмне забезпечення – у репозиторії ${labsRepoUrl}.`,
        link: '/self-work',
        list: [
          'Архітектура вебу, протоколи HTTP і HTTPS, робота браузера і вебсервера;',
          'Сучасний JavaScript і TypeScript, автоматизоване тестування;',
          'Клієнтська частина: DOM, асинхронний обмін даними, React;',
          'Серверна частина: Node.js, REST API за контрактом OpenAPI, бази даних;',
          'Безпека, контейнеризація Docker, безперервна інтеграція, інструменти AI.',
        ],
        primary: 'Мета курсу – систематизовані знання про архітектуру, протоколи і технології вебзастосунків та практичні навички розроблення, тестування, захисту і доставки клієнт-серверного вебзастосунку.',
        secondary: 'У дисципліні вивчаються:',
      },
    },
    faqSection: [
      {
        content: [
          `Заняття з дисципліни ${courseName} у ${new Date().getFullYear()} році відбуваються офлайн у визначених аудиторіях. За потреби проведення онлайн консультацій, буде доступно онлайн посилання.`,
          `Лекції веде та проводить захисти: ${staff.lecturerName}`,
          `Лабараторні ведуть: ${staff.lecturerAssistants}`,
        ],
        showOnlineLink: true,
        title: 'Як і де відбуваються заняття?',
      },
      {
        content: [
          'Захист роботи відбувається на наступних поточних заняттях, після пояснення матеріалу. Викладач задає дотичні питання і оцінює роботу студента. Звіти по виконаних роботах викладаються на диск у відповідну папку студента.',
          `Після контрольних дат (${semester.periods.map((period) => `${period.end} - №${period.labs}`).join(', ')}) бали за відповідні лабораторні роботи та доповіді не виставляються.`,
          `Самостійна робота – модуль-розширення вашого застосунку (сторінка «Самостійна»): модуль обирають до захисту ПЗ 4, захищають до ${semester.end}. Після зазначеної дати бали будуть зменшені.`,
          'До заліку допускаються студенти, які захистили ВСІ лабораторні та самостійну роботи.',
          'Проєктний трек: власний вебзастосунок (наприклад, вебчастина кваліфікаційної роботи або IoT-проєкт з дисципліни «Мікропроцесорні системи») замість варіанту; самостійна робота зараховується тим самим проєктом. Стек обирають вільно: ПЗ 1–3 – JavaScript або TypeScript, сервер – будь-якою мовою і фреймворком, клієнт – на будь-якому компонентному фреймворку; обов’язкові опис API OpenAPI, контрактні тести і CI. Трек обирають до захисту ПЗ 1 (Додаток А.2 посібника).',
        ],
        includeDriveLinks: true,
        title: 'Як відбуваються захисти робіт?',
      },
      {
        content: [
          `Залік складається з тестів у ВНС (${scores.exam} балів) та усної компоненти за бажанням студента (до ${scores.interview} балів).`,
          'Усна компонента – коротка технічна співбесіда: питання щодо власного застосунку, теорії курсу або розв’язку алгоритмічної задачі (наприклад, з LeetCode).',
          'Студенти, що не обрали усну компоненту, складають лише тести у ВНС.',
        ],
        title: 'Як відбувається залік?',
      },
      {
        content: [
          `Навчальний посібник (PDF): ${posibnykPdfPublic}`,
          `Репозиторій коду: ${labsRepoUrl} – каталог app/ для вашого застосунку, demo/ – зразок «Бібліотека», tools/ – інструменти курсу.`,
          'Варіант: предметна область – за номером у журналі (табл. А.1 посібника), індивідуальне правило – від прізвища латиницею: node tools/variant.mjs ПРІЗВИЩЕ --number N --write.',
          'Потрібні Node.js 24 LTS, Git і акаунт GitHub; Docker – з практичного завдання № 6 (Додаток А.4 посібника).',
        ],
        title: 'Які матеріали використовувати?',
      },
      {
        content: [],
        includeLecturerContact: true,
        title: 'Як зв’язатися з викладачем?',
      },
    ],
    fullInfoSection: {
      roadmap: [
        {
          description: '9 лекцій: архітектура і протоколи вебу, JavaScript і TypeScript, клієнтська і серверна частини, REST і GraphQL, автентифікація і безпека, SOLID і патерни, React, Docker і CI/CD. Залік – тести у ВНС.',
          title: 'Лекції, залік',
          type: 'exam',
        },
        {
          description: `Технічна співбесіда на заліку за бажанням студента (до ${scores.interview} балів): питання щодо власного застосунку, теорії курсу або розв’язку алгоритмічної задачі.`,
          title: 'Усна компонента (опціонально)',
          type: 'interview',
        },
        {
          description: '6 практичних завдань – етапи одного вебзастосунку: модуль JavaScript з тестами, інтерфейс DOM, HTTP-клієнт, REST API з базою даних, автентифікація і захист, клієнт React з Docker і CI. Три рівні виконання: достатній, добрий, високий.',
          title: 'Лабораторні роботи',
          type: 'labs',
        },
        {
          description: 'Модуль-розширення власного застосунку на вибір: сервер іншою мовою, клієнт на іншому фреймворку, реальний час, PWA, функція з AI, масштабування або IoT; у проєктному треку її зараховують власним проєктом практичних завдань.',
          title: 'Самостійна робота',
          type: 'selfStudy',
        },
      ],
      tasks: [
        'Знати складові клієнт-серверної архітектури вебу, протоколи HTTP і HTTPS, принципи роботи браузера і вебсервера;',
        'Програмувати мовою JavaScript відповідно до сучасного стандарту ECMAScript, застосовувати TypeScript і автоматизоване тестування;',
        'Створювати клієнтську частину засобами DOM і React, виконувати асинхронний обмін даними з сервером;',
        'Розробляти серверну частину на Node.js: REST API за контрактом OpenAPI, роботу з реляційною базою даних;',
        'Реалізовувати автентифікацію й авторизацію та захищати вебзастосунок від загроз OWASP Top 10;',
        'Застосовувати Git, контейнеризацію Docker і безперервну інтеграцію для доставки вебзастосунку.',
      ],
    },
    leetCodeSection: {
      introduction: `Вміння пояснити власне рішення – важлива складова успішного працевлаштування в IT.
    Задачі на онлайн-ресурсі LeetCode допомагають підготуватися до технічної співбесіди. Окремих балів за них немає: розв’язок задачі можна використати в ПЗ 1 (рівень «Високий») або обговорити на усній компоненті заліку.`,
      items: [
        {
          content: [
            'Задачі на LeetCode практично демонструють вимоги до технічного кандидата під час співбесіди в IT.',
            'Структурно, типи задач можна поділити на:',
          ],
          header: 'Що таке онлайн задачі LeetCode?',
          listItems: [
            'алгоритмічні задачі;',
            'задачі на структури даних;',
            'математичні задачі;',
            'дизайн систем (ООП, API-інтерфейси тощо);',
            'задачі, пов’язані з конкретною мовою програмування (наприклад, JavaScript).',
          ],
        },
        {
          content: [
            'Список відсортований від легших задач до важчих, але можна обирати довільну складність і ті задачі, які найбільше подобаються.',
            'Розв’язок варто писати мовою JavaScript або TypeScript і перевіряти власними автоматизованими тестами (node --test), як у ПЗ 1.',
          ],
          header: 'Посилання на задачі та порядок роботи.',
          link: {
            title: 'Перейти до задач',
            url: 'https://leetcode.com/studyplan/top-interview-150/',
          },
        },
        {
          content: [
            'ПЗ 1, рівень «Високий»: розв’язати задачу LeetCode мовою JavaScript і покрити розв’язок тестами – входить у бали лабораторних.',
            `Усна компонента заліку (до ${scores.interview} балів): одне з питань співбесіди може стосуватися розв’язку задачі – чому обрано саме такий алгоритм і яка його складність.`,
          ],
          header: 'Як задачі пов’язані з курсом.',
        },
      ],
      title: 'Підготовка до технічних співбесід',
    },
    pointsDistributionSection: {
      additionalNotes: [
        'Зазначено максимальну кількість балів за умови вчасного і належного захисту.',
        `Залік у ВНС складається лише з тестів (${scores.exam} балів).`,
        `Усна компонента (до ${scores.interview} балів) – за бажанням студента.`,
      ],
      periods: [
        ...semester.periods.map((period) => ({
          items: [
            { label: `Лабораторні ${period.labs}`, points: period.score },
          ],
          title: `${period.start} - ${period.end}`,
        })),
        {
          items: [
            { label: 'Самостійна робота', points: scores.selfStudy },
            { label: 'Тести у ВНС', points: scores.exam, specialClass: 'test' },
            { label: 'Усна компонента (опціонально)', points: scores.interview, specialClass: 'optional' },
          ],
          title: 'Залік',
        },
      ],
    },
    shortInfoSection: {
      practicalPart: '6 практичних завдань (навчальний посібник) і самостійна робота.',
      theoryPart: '9 лекцій',
    },
  },
  labList: [
    {
      description: 'Розроблення модуля предметної області мовою JavaScript з автоматизованими тестами',
      id: 'lab1',
      name: 'Практичне завдання №1',
      objective: 'Визначити варіант, реалізувати клас сутності, перевірку даних з індивідуальним правилом, фільтрацію і сортування; модульні тести node:test і зелений CI.',
      page: posibnykPages.lab1,
      reference: `${labsRepoUrl}/tree/main/demo/src/domain`,
      theory: posibnykPages.theoryJs,
    },
    {
      description: 'Розроблення інтерфейсу каталогу з використанням DOM, подій і форм',
      id: 'lab2',
      name: 'Практичне завдання №2',
      objective: 'Сторінка каталогу засобами DOM: картки через template і textContent, пошук і фільтри, форма з помилками біля полів, делегування подій, localStorage.',
      page: posibnykPages.lab2,
      reference: `${labsRepoUrl}/tree/main/demo/src/ui`,
      theory: posibnykPages.theoryDom,
    },
    {
      description: 'Розроблення асинхронного HTTP-клієнта вебзастосунку',
      id: 'lab3',
      name: 'Практичне завдання №3',
      objective: 'Обмін з mock-сервером API засобами Fetch API: тайм-аути, скасування, обробка помилок, стани завантаження; дані публічного API НБУ; аналіз у DevTools.',
      page: posibnykPages.lab3,
      reference: `${labsRepoUrl}/tree/main/demo/src/api`,
      theory: posibnykPages.theoryAsync,
    },
    {
      description: 'Розроблення REST API з базою даних за контрактом OpenAPI',
      id: 'lab4',
      name: 'Практичне завдання №4',
      objective: 'Сервер Node.js + Express + TypeScript з базою SQLite, перевіркою даних і Swagger UI; контрактні тести Postman/Newman; сторінка ПЗ 3 працює з власним сервером.',
      page: posibnykPages.lab4,
      reference: `${labsRepoUrl}/tree/main/demo/server`,
      theory: posibnykPages.theoryServer,
    },
    {
      description: 'Реалізація автентифікації, авторизації та захисту API',
      id: 'lab5',
      name: 'Практичне завдання №5',
      objective: 'Реєстрація і вхід (scrypt, JWT), ролі, ключі пристроїв IoT; дослідження XSS і CSP, CORS, заголовки безпеки; контрактні тести з перевірками доступу.',
      page: posibnykPages.lab5,
      reference: `${labsRepoUrl}/tree/main/demo/server/src`,
      theory: posibnykPages.theorySecurity,
    },
    {
      description: 'Розроблення клієнта на React, контейнеризація та безперервна інтеграція',
      id: 'lab6',
      name: 'Практичне завдання №6',
      objective: 'Клієнт React з маршрутами і станом сесії (Context + useReducer), збирання Vite, docker compose з Nginx, конвеєр GitHub Actions.',
      page: posibnykPages.lab6,
      reference: `${labsRepoUrl}/tree/main/demo/client`,
      theory: posibnykPages.theoryDelivery,
    },
  ].map((lab, index) => ({
    description: lab.description,
    filePath: `${posibnykPdf}#page=${lab.page}`,
    iconSrc: labIcons[index],
    id: lab.id,
    imgSrc: `/images/apps/wp/labs/lab${index + 1}.jpg`,
    link: `/labs/${lab.id}`,
    name: lab.name,
    objective: lab.objective,
    reference: lab.reference,
    theoryPath: `${posibnykPdf}#page=${lab.theory}`,
  })),
  lecturesList: [
    {
      description: 'Мета та задачі дисципліни, вебтехнології, їх різновиди та функції: URI/URL, шлях запиту, типи серверів, розвиток HTTP і Web 1.0–3.0.',
      id: 'lecture1',
      name: 'Вступ. Вебтехнології, їх різновиди та функції',
      pages: [
        { id: 'lecture1.1', name: 'Клієнт-серверна архітектура вебу', section: '1.1' },
        { id: 'lecture1.2', name: 'Ідентифікація ресурсів: URI, URL, DNS', section: '1.2' },
        { id: 'lecture1.3', name: 'Шлях запиту від введення URL до відображення сторінки', section: '1.3' },
        { id: 'lecture1.4', name: 'Протокол HTTP: методи, коди стану, заголовки, версії HTTP/1.1, HTTP/2, HTTP/3', section: '1.4' },
        { id: 'lecture1.5', name: 'HTTPS і TLS', section: '1.5' },
        { id: 'lecture1.6', name: 'Інші прикладні протоколи вебу: електронна пошта (SMTP, IMAP)', section: '1.8' },
      ],
      start: '1',
    },
    {
      description: 'UI/UX-проблематика сайтів, знайомство з JavaScript, синхронний і асинхронний код, системи масштабування. Практика: ПЗ 1–2.',
      id: 'lecture2',
      name: 'UI/UX, JavaScript та системи масштабування',
      pages: [
        { id: 'lecture2.1', name: 'Середовища виконання JavaScript: браузер, Node.js, Bun', section: '2.1' },
        { id: 'lecture2.2', name: 'Цикл подій і модель виконання JavaScript', section: '2.6' },
        { id: 'lecture2.3', name: 'Основи TypeScript', section: '2.7' },
        { id: 'lecture2.4', name: 'Автоматизоване тестування коду', section: '2.8' },
        { id: 'lecture2.5', name: 'UI/UX і доступність вебінтерфейсів', section: '3.5' },
      ],
      start: '2',
    },
    {
      description: 'Статичні та динамічні вебзастосунки, еволюція API, REST, Ajax, GraphQL vs REST, системи керування вмістом. Практика: ПЗ 3–4.',
      id: 'lecture3',
      name: 'Веб як платформа. Статичні та динамічні вебзастосунки. GraphQL vs REST',
      pages: [
        { id: 'lecture3.1', name: 'Статичні та динамічні вебзастосунки. Еволюція вебу від Web 1.0 до Web 3.0', section: '1.6' },
        { id: 'lecture3.2', name: 'Системи керування вмістом: монолітні, decoupled та headless CMS', section: '1.7' },
        { id: 'lecture3.3', name: 'Асинхронне програмування: проміси, async/await, Fetch API', section: '3.6' },
        { id: 'lecture3.4', name: 'GraphQL і gRPC: порівняння з REST', section: '4.4' },
      ],
      start: '1.6',
    },
    {
      description: 'Автентифікація та авторизація: сесії, токени, JWT, SSO, OAuth2; зберігання даних у браузері; Nginx, Postman, Swagger. Практика: ПЗ 4–5.',
      id: 'lecture4',
      name: 'Автентифікація та авторизація, знайомство з бекендом',
      pages: [
        { id: 'lecture4.1', name: 'Серверна платформа Node.js і фреймворк Express', section: '4.1' },
        { id: 'lecture4.2', name: 'Зберігання даних у браузері', section: '3.4' },
        { id: 'lecture4.3', name: 'Автентифікація та авторизація: сесії, cookie, токени', section: '5.1' },
        { id: 'lecture4.4', name: 'JSON Web Token, OAuth 2.0 і єдиний вхід (SSO)', section: '5.2' },
        { id: 'lecture4.5', name: 'Опис і тестування API: OpenAPI, Swagger, Postman', section: '4.3' },
        { id: 'lecture4.6', name: 'Зворотний проксі-сервер Nginx і захищене розгортання', section: '5.6' },
      ],
      start: '5.1',
    },
    {
      description: 'Мікросервісна архітектура та комунікація між сервісами: принципи RESTful API, модель зрілості Річардсона, gRPC; моноліт, мікросервіси, serverless. Практика: ПЗ 4.',
      id: 'lecture5',
      name: 'Мікросервісна архітектура та комунікація між сервісами: REST, gRPC',
      pages: [
        { id: 'lecture5.1', name: 'Архітектурний стиль REST. Модель зрілості Річардсона', section: '4.2' },
        { id: 'lecture5.2', name: 'Мікросервісна архітектура та комунікація між сервісами', section: '4.6' },
        { id: 'lecture5.3', name: 'Архітектури вебзастосунків: моноліт, мікросервіси, serverless', section: '6.2' },
        { id: 'lecture5.4', name: 'Зберігання даних: реляційні та документні бази даних', section: '4.5' },
      ],
      start: '4.6',
    },
    {
      description: 'Основи об’єктно-орієнтованого проєктування, патерни й антипатерни, принципи SOLID у веброзробці. Практика: ПЗ 6.',
      id: 'lecture6',
      name: 'Принципи SOLID і патерни проєктування',
      pages: [
        { id: 'lecture6.1', name: 'Принципи SOLID, патерни та антипатерни проєктування', section: '6.1' },
      ],
      start: '6.1',
    },
    {
      description: 'React, Vue, Angular; взаємодія з мікросервісною архітектурою; керування станом: Context, useReducer, Redux. Практика: ПЗ 6.',
      id: 'lecture7',
      name: 'Сучасні фронтенд-фреймворки та керування станом',
      pages: [
        { id: 'lecture7.1', name: 'Сучасні фронтенд-фреймворки: React, Vue, Angular', section: '6.3' },
        { id: 'lecture7.2', name: 'Керування станом застосунку', section: '6.4' },
      ],
      start: '6.3',
    },
    {
      description: 'Docker, Kubernetes, CI/CD, автоматизоване тестування й релізи; автоматизація та AI-агенти в розробці. Практика: ПЗ 6.',
      id: 'lecture8',
      name: 'Контейнеризація та безперервна інтеграція. AI в розробці',
      pages: [
        { id: 'lecture8.1', name: 'Контейнеризація: Docker, огляд Kubernetes', section: '6.5' },
        { id: 'lecture8.2', name: 'Безперервна інтеграція та доставка (CI/CD)', section: '6.6' },
        { id: 'lecture8.3', name: 'Інструменти штучного інтелекту в розробленні вебзастосунків', section: '6.7' },
      ],
      start: '6.5',
    },
    {
      description: 'Безпека вебзастосунків: OWASP Top 10, XSS, CSRF, SQL-ін’єкції, HTTPS і TLS, сучасні інструменти захисту. Практика: ПЗ 5.',
      id: 'lecture9',
      name: 'Безпека вебзастосунків',
      pages: [
        { id: 'lecture9.1', name: 'Зберігання паролів: хеш-функції, сіль, стійкість до атак', section: '5.3' },
        { id: 'lecture9.2', name: 'Типові вразливості вебзастосунків: OWASP Top 10', section: '5.4' },
        { id: 'lecture9.3', name: 'XSS, CSRF, SQL-ін’єкції та політика CORS', section: '5.5' },
        { id: 'lecture9.4', name: 'HTTPS і TLS', section: '1.5' },
      ],
      start: '5',
    },
  ].map((lecture, index) => ({
    description: lecture.description,
    filePath: `${posibnykPdf}#page=${posibnykSections[lecture.start]}`,
    id: lecture.id,
    imageUrl: lectureImages[index],
    name: lecture.name,
    subLectures: lecture.pages.length
      ? lecture.pages.map((sub) => ({
        filePath: `${posibnykPdf}#page=${posibnykSections[sub.section]}`,
        id: sub.id,
        name: `${sub.name} (п. ${sub.section} посібника)`,
      }))
      : undefined,
  })),
  links,
  name: 'wp',
  onlineLink: '',
  scores,
  semester,
  sidebar: {
    sections: [
      ...semester.periods.map((period, index) => ({
        content: [
          `Лабораторні №${period.labs}: ${period.score} балів`,
        ],
        title: `${index % 2 === 0 ? 'І половина семестру' : 'IІ половина семестру'} ${period.start}-${period.end}`,
      })),
      {
        content: [
          `Самостійна робота - ${scores.selfStudy} балів`,
        ],
        title: 'Протягом семестру',
      },
      {
        content: [
          `Поточні бали: ${scores.current} балів`,
          `Залік: тести у ВНС – ${scores.exam} балів`,
          `Усна компонента (опціонально): ${scores.interview} балів`,
        ],
        title: 'Заліковий контроль',
      },
    ],
    showDriveLinks: true,
    showScores: true,
  },
  staff,
  title: 'Веб-програмування',
};

export default wpConfig;

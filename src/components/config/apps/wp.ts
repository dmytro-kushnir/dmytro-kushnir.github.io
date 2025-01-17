import { CommonAppMapping } from '../configMapping.ts';

const courseName = 'Веб Програмування';

const links = {
  courses: [
    {
      name: 'Архітектура Комп’ютерів',
      path: '/computer-architecture',
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
  exam: 50,
  interview: 10,
  labs: 20,
  presentationMax: 5,
  presentationMin: 1,
  selfStudy: 20,
};

const semester = {
  end: '08.04.2024',
  middle: '11.03.2024',
  periods: [
    {
      end: '11.03.2024',
      extraScore: 5,
      labs: '1-4',
      score: 10,
      start: '12.02.2024',
    },
    {
      end: '08.04.2024',
      extraScore: 5,
      labs: '5-8',
      score: 10,
      start: '12.03.2024',
    },
  ],
  start: '12.02.2024',
};

const staff = {
  lecturerAssistants: [
    'Кушнір Дмитро Олександрович',
    'Добуш Андрій Романович',
  ],
  lecturerName: 'Кушнір Дмитро Олександрович',
  lecturerPhoto: '/images/apps/wp/lecturer.jpeg',
};

const wpConfig: CommonAppMapping = {
  appPath: '/web-programming',
  driveLinks: [
    {
      drive: 'https://drive.google.com/drive/folders/1pupvPBnde3fqO_Q-tYCs-AUl6Hy_ZNGW?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1SlqQbxBWgDs-dcSBjrA2oRMJ841-DNuP/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-41',
    },
    {
      drive: 'https://drive.google.com/drive/folders/19QVnMO9JHJT3w6pj6gIJe423yJjhT9Py?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1VAHKgqKJNP0eq6V4oC1TpBdPW5m1YvWA/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-42',
    },
    {
      drive: 'https://drive.google.com/drive/folders/1H4E7z6tESFAJOC-zob6y8Rsy0HJWyCff?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1TOIgZPf0q1XrKmE9lESLdQ7QZFJyGT5R/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-43',
    },
    {
      drive: 'https://drive.google.com/drive/folders/1549cfDSGYQvLFCWvMVC3LtdrmTsSCbBL?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1akEAAlYLvSGGUtWO4kZTiV5X95ojyMTt/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-44',
    },
    {
      drive: 'https://drive.google.com/drive/folders/1Zl5bysjqTF4APAga-omj9ZWGKvrTCCev?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1O9Jh68OaXa7WIelIPrGut4l8GsYHno7A/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-45',
    },
  ],
  faviconLink: '/images/apps/wp/svg/favicon.svg',
  header: {
    banner: {
      defaultPageConfig: { name: 'home', subtitle: 'Навчальна дисципліна', title: 'Веб-програмуання' },
      pageConfigs: [
        { name: 'labs', title: 'Роботи до виконання' },
        { name: 'lectures', title: 'Курс Лекцій' },
        { name: 'self-work', title: 'Самостійна робота' },
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
        conclusion: 'Завдання курсу полягає у тому, щоб навчити студентів використовувати підходи до реалізації динамічних веб-додатків, вибір відповідних засобів при розв’язанні конкретних задач, продемонструвати різноманітність варіантів для втілення власних ідей.',
        link: '/self-work',
        list: [
          'Концепції дії, концепції розробки Веб-додатків, концепції стилів у Веб-програмуванні.',
          'Загальним положеням та властивостям технологій Веб-програмування.',
          'Стандартам розробки програмного забезпечення.',
          'Побудови складних систем на базі технології Веб-програмування.',
        ],
        primary: 'Мета курсу - формування сучасного рівня інформаційної та компʼютерної культури, набуття практичних навичок роботи при створенні інтерактивних технологій.',
        secondary: 'В навчальній дисципліні відбувається ознайомлення студентів концептуальним основам сучасних мов Веб-програмування:',
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
          `Самостійну роботу можна захищати протягом семестру до ${semester.end}. Після зазначеної дати бали будуть зменшені.`,
          'До заліку допускаються студенти, які захистили ВСІ лабораторні та самостійну роботи.',
        ],
        includeDriveLinks: true,
        title: 'Як відбуваються захисти робіт?',
      },
      {
        content: [
          'Протягом семестру студенти мають можливість захистити 2 онлайн-задачі.',
          `І половина семестру: ${semester.start} - ${semester.middle}`,
          `II половина семестру: ${semester.middle} - ${semester.end}`,
          'Якщо студент не зробив задачі протягом першої половини семестру, то в подальшому він має можливість здати лише одну задачу.',
          'Бали, що отримані за задачі будуть враховані на екзамені як відповідь на описове питання.',
          'LeetCode задачі НЕ є обов’язковою частиною дисципліни. Студенти, що не робили задачі до екзамену допускаються і мають відповісти на тестові завдання та описові питання.',
        ],
        title: 'Що таке онлайн задачі LeetCode?',
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
          description: 'Теоретичні базові знання з клієнтських та серверних мов програмування, грунтовне ознайомлення з сучасними методами та засобами побудови динамічних та інтерактивних веб-додатків.',
          title: 'Лекції, залік',
          type: 'exam',
        },
        {
          description: 'LeetCode задачі - це завдання на онлайн ресурсі LeetCode, яке практично демонструє вимоги до технічого кандидата під час співбесіди в IT.',
          title: 'LeetCode задачі (опціонально)',
          type: 'presentationMax',
        },
        {
          description: 'Створення інтерактивних веб-додатків з  використанням  мови  JavaScript. Вміння перевіряти дані користувача на стороні клієнта. Практичні навики створення інформаційної системи на базі мови програмування JavaScript.',
          title: 'Лабораторні роботи',
          type: 'labs',
        },
        {
          description: 'Самостійною роботою є створення динамічного веб-додатку в обраний студентом спосіб.',
          title: 'Самостійна робота',
          type: 'selfStudy',
        },
      ],
      tasks: [
        'Знати базові складові клієнт-серверної архітектури;',
        'Мати уявлення про створення інтерактивних веб-додатків з використанням мови клієнтського програмування JavaScript;',
        'Мати уявлення про взаємодію з сервером за технологією Ajax, використання плагінів;',
        'Набути навички роботи з програмування на JavaScript. Збереження та отримання даних.  Використання масивів. Робота текстом. Регулярні вирази. Повторне використання  коду і створення функцій. Обʼєктно-орієнтоване програмування на JavaScript.  Взаємодія з файловою системою і сервером. Робота з датою і часом. Створення  графіки;',
        'Керування сесіями. Виконання  запитів і обробка результатів;',
        'Набути  навички використання використання баз даних при розробці ВЕБ-застосувань.  Проектування Веб-баз даних. Створення баз даних. З&apos;єднання з сервером MySQL засобами JavaScript.',
      ],
    },
    leetCodeSection: {
      introduction: `Вміння презентувати як теоретичні так і практичні знання є важливою складовою для успішного працевлаштування в IT. 
    Для того щоб набути цих навичок, студенти мають можливість виконати набір завдань на онлайн ресурсі LeetCode, та представити результати викладачеві.`,
      items: [
        {
          content: [
            'Задачі на LeetCode - це завдання, яке практично демонструє вимоги до технічного кандидата під час співбесіди в IT.',
            'Структурно, типи задач можна поділити на:',
          ],
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
          header: 'Оцінювання виконання задач.',
        },
        {
          content: [
            'Протягом семестру студенти мають можливість захистити 2 онлайн-задачі.',
            'Якщо студент не зробив задачі протягом першої половини семестру, то в подальшому він має можливість здати лише одну задачу.',
            'Бали, що отримані за задачі будуть враховані на екзамені як відповідь на описове питання. Описових питань на екзамені є 2, тому кожна захищена задача зараховується як відповідь на одне описове питання. Під час складання екзамену студент завантажує посилання на задачу у вікно описового питання.',
            'LeetCode задачі НЕ є обов’язковою частиною дисципліни. Студенти, що не робили задачі до екзамену допускаються і мають відповісти на тестові завдання та описові питання.',
          ],
          header: 'Бонуси від виконання онлайн-задач.',
          listItems: [
            `І половина семестру: ${semester.start} - ${semester.middle}`,
            `II половина семестру: ${semester.middle} - ${semester.end}`,
          ],
        },
      ],
      title: 'Онлайн задачі на LeetCode',
    },
    pointsDistributionSection: {
      additionalNotes: [
        'Зазначено максимальну кількість балів за умови вчасного і належного захисту.',
        `Опціональні бали за виконані і презентовані LeetCode задачі (максимум ${scores.presentationMax * 2} балів) буде враховано під час заліку замість описових задач.`,
        'Усна компонента є опціональною, за бажанням студента.',
      ],
      periods: [
        ...semester.periods.map((period) => ({
          items: [
            { label: `Лабораторні ${period.labs}`, points: period.score },
            { label: 'Задача на LeetCode', points: period.extraScore, specialClass: 'optional' },
          ],
          title: `${period.start} - ${period.end}`,
        })),
        {
          items: [
            { label: 'Самостійна робота', points: scores.selfStudy },
            { label: 'Тести, описові питання', points: scores.exam, specialClass: 'test' },
            { label: 'Усна компонента', points: scores.interview, specialClass: 'test' },
          ],
          title: 'Залік',
        },
      ],
    },
    shortInfoSection: {
      practicalPart: 'Лабораторні, онлайн-задачі та самостійна робота.',
      theoryPart: 'Лекції',
    },
  },
  labList: [
    {
      description: 'Знайомство з JavaScript',
      filePath: '/files/apps/wp/labs/1.pdf',
      iconSrc: '/images/apps/wp/svg/index-js.svg',
      id: 'lab1',
      imgSrc: '/images/apps/wp/labs/lab1.jpg',
      link: '/labs/lab1',
      name: 'Лабараторна №1',
      objective: 'Вивчити основні типи даних та оператори мови JavaScript.',
    },
    {
      description: 'Основни конструкції мови JavaScript',
      filePath: '/files/apps/wp/labs/2.pdf',
      iconSrc: '/images/apps/wp/svg/index-construction.svg',
      id: 'lab2',
      imgSrc: '/images/apps/wp/labs/lab2.jpg',
      link: '/labs/lab2',
      name: 'Лабараторна №2',
      objective: 'Вивчити основні типи даних та оператори мови JavaScript.',
    },
    {
      description: 'Використання функцій в JavaScript.',
      filePath: '/files/apps/wp/labs/3.pdf',
      iconSrc: '/images/apps/wp/svg/index-function.svg',
      id: 'lab3',
      imgSrc: '/images/apps/wp/labs/lab3.jpg',
      link: '/labs/lab3',
      name: 'Лабараторна №3',
      objective: 'Навчитися використовувати стандартні і створювати функції користувача в JavaScript.',
    },
    {
      description: 'Робота з масивами в JavaScript.',
      filePath: '/files/apps/wp/labs/4.pdf',
      iconSrc: '/images/apps/wp/svg/index-matrix.svg',
      id: 'lab4',
      imgSrc: '/images/apps/wp/labs/lab4.jpg',
      link: '/labs/lab4',
      name: 'Лабараторна №4',
      objective: 'Вивчити можливості JavaScript для створення та обробки масивів.',
    },
    {
      description: 'Робота з рядками в JavaScript.',
      filePath: '/files/apps/wp/labs/5.pdf',
      iconSrc: '/images/apps/wp/svg/index-string.svg',
      id: 'lab5',
      imgSrc: '/images/apps/wp/labs/lab5.jpg',
      link: '/labs/lab5',
      name: 'Лабараторна №5',
      objective: 'Отримати навички обробки символьної інформації JavaScript.',
    },
    {
      description: 'Робота з об\'єктами в JavaScript.',
      filePath: '/files/apps/wp/labs/6.pdf',
      iconSrc: '/images/apps/wp/svg/index-object.svg',
      id: 'lab6',
      imgSrc: '/images/apps/wp/labs/lab6.jpg',
      link: '/labs/lab6',
      name: 'Лабараторна №6',
      objective: 'Отримати навички створення об\'єктів, доступу до полів та методів ознайомитись із прототипним успадкуванням.',
    },
  ],
  lecturesList: [
    {
      description: 'Огляд дисципліни. Клієнт-серверна архітектура та її компоненти.',
      filePath: '/files/apps/wp/lectures/1.pdf',
      id: 'lecture1',
      imageUrl: '/images/apps/wp/lectures/lecture1.webp',
      name: 'Клієнт-серверна архітектура та її компоненти.',
    },
    {
      description: 'Клієнт-серверна архітектура. Модель OSI. Протокол прикладного рівня HTTP.',
      filePath: '/files/apps/wp/lectures/2.pdf',
      id: 'lecture2',
      imageUrl: '/images/apps/wp/lectures/lecture2.jpg',
      name: 'Протокол HTTP. Принципи функціонування.',
    },
    {
      description: 'Браузер. Склад і загальні принципи роботи.',
      filePath: '/files/apps/wp/lectures/3.pdf',
      id: 'lecture3',
      imageUrl: '/images/apps/wp/lectures/lecture3.webp',
      name: 'Браузер. Склад і загальні принципи роботи.',
    },
    {
      description: 'Базові технології Веб-програмування. Мова розмітки HTML, HTML 5. Мова стилів CSS, CSS3. Верстка (HTML + CSS). Фреймворки: Angular, React.',
      filePath: '/files/apps/wp/lectures/4.pdf',
      id: 'lecture4',
      imageUrl: '/images/apps/wp/lectures/lecture4.jpg',
      name: 'Веб сервер. Апаратне і програмне забезпечення.',
    },
    {
      description: 'Веб-додатки. Поняття, компоненти та принципи роботи.',
      filePath: '/files/apps/wp/lectures/5.pdf',
      id: 'lecture5',
      imageUrl: '/images/apps/wp/lectures/lecture5.webp',
      name: 'Веб-додатки. Поняття, компоненти та принципи роботи.',
      subLectures: [
        { filePath: '/files/apps/wp/lectures/5.1.pdf', id: 'lecture5.1', name: 'Веб-додатки для колективної роботи.' },
      ],
    },
    {
      description: 'Архітектура веб-додатків.',
      filePath: '/files/apps/wp/lectures/6.pdf',
      id: 'lecture6',
      imageUrl: '/images/apps/wp/lectures/lecture6.webp',
      name: 'Архітектура веб-додатків.',
    },
    {
      description: 'Етапи реалізації веб-проєкту.',
      filePath: '/files/apps/wp/lectures/7.pdf',
      id: 'lecture7',
      imageUrl: '/images/apps/wp/lectures/lecture7.webp',
      name: 'Етапи реалізації веб-проєкту.',
    },
    {
      description: 'Етап аналітики в проєктуванні веб додатку.',
      filePath: '/files/apps/wp/lectures/8.pdf',
      id: 'lecture8',
      imageUrl: '/images/apps/wp/lectures/lecture8.jpg',
      name: 'Етап аналітики в проєктуванні веб додатку.',
    },
    {
      description: 'Дизайн-макети, frontend, backend, тестування веб додатку.',
      filePath: '/files/apps/wp/lectures/9.pdf',
      id: 'lecture9',
      imageUrl: '/images/apps/wp/lectures/lecture9.webp',
      name: 'Дизайн-макети, frontend, backend, тестування веб додатку.',
    },
    {
      description: 'Програмування на стороні клієнта (Front-end). Javascript. AJAX. JavaScript и XML. PHP.',
      filePath: '/files/apps/wp/lectures/10.pdf',
      id: 'lecture10',
      imageUrl: '/images/apps/wp/lectures/lecture10.jpg',
      name: 'Фронтенд-розробка. Ключові технології та поняття.',
      subLectures: [
        { filePath: '/files/apps/wp/lectures/10.1.pdf', id: 'lecture10.1', name: 'Мова HTML. Поняття, стандарти, теги та атрибути.' },
        { filePath: '/files/apps/wp/lectures/10.2.pdf', id: 'lecture10.2', name: 'Структура сторінки, DOM-дерево, застосування тегів.' },
        { filePath: '/files/apps/wp/lectures/10.3.pdf', id: 'lecture10.3', name: 'Сучасний CSS. Основні поняття, селектори, блокова модель.' },
        { filePath: '/files/apps/wp/lectures/10.4.pdf', id: 'lecture10.4', name: 'CSS. Типи даних та робота з HTML-елементами.' },
        { filePath: '/files/apps/wp/lectures/10.5.pdf', id: 'lecture10.5', name: 'CSS. Стилі коду та побудова макетів.' },
        { filePath: '/files/apps/wp/lectures/10.6.pdf', id: 'lecture10.6', name: 'JavaScript у веб-розробці.' },
        { filePath: '/files/apps/wp/lectures/10.7.pdf', id: 'lecture10.7', name: 'JavaScript фреймворки.' },
      ],
    },
    {
      description: 'Програмування на стороні сервера (Back-end). Огляд мов програмування (Python, Php, Java, C#, Ruby). Javascript. Фреймворк Node.js',
      filePath: '/files/apps/wp/lectures/11.pdf',
      id: 'lecture11',
      imageUrl: '/images/apps/wp/lectures/lecture11.jpg',
      name: 'Бекенд. Програмування серверної частини.',
      subLectures: [
        { filePath: '/files/apps/wp/lectures/11.1.pdf', id: 'lecture11.1', name: 'Мови серверного програмування.' },
        { filePath: '/files/apps/wp/lectures/11.2.pdf', id: 'lecture11.2', name: 'Бекенд фреймворки.' },
      ],
    },
    {
      description: 'Інструменти веб-розробника.',
      filePath: '/files/apps/wp/lectures/12.pdf',
      id: 'lecture12',
      imageUrl: '/images/apps/wp/lectures/lecture12.webp',
      name: 'Інструменти веб-розробника.',
      subLectures: [
        { filePath: '/files/apps/wp/lectures/12.1.pdf', id: 'lecture12.1', name: 'Консоль розробника в браузері.' },
        { filePath: '/files/apps/wp/lectures/12.2.pdf', id: 'lecture12.2', name: 'Системи контролю версій.' },
        { filePath: '/files/apps/wp/lectures/12.3.pdf', id: 'lecture12.3', name: 'Тестування веб-додатків.' },
      ],
    },
  ],
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
          `Онлайн задача LeetCode: ${scores.presentationMin} - ${scores.presentationMax} балів (замніяє задачу на заліку)`,
        ],
        title: `${index % 2 === 0 ? 'І половина семестру' : 'IІ половина семестру'} ${period.start}-${period.end}`,
      })),
      {
        content: [`Самостійна робота - ${scores.selfStudy} балів`],
        title: 'Протягом семестру',
      },
      {
        content: [
          `Поточні бали: ${scores.current} балів`,
          `Залік: ${scores.exam} балів (з них до ${
            scores.presentationMax ? scores.presentationMax * 2 : ''
          } балів можна отримати за онлайн задачі. Не потрібно буде робити завдання з кодом.)`,
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

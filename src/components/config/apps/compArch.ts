import { CommonAppMapping } from '../configMapping.ts';

const courseName = 'Архітектура Комп’ютерів';

const links = {
  courses: [
    {
      name: courseName,
      path: '/computer-architecture',
    },
    {
      name: 'Веб Програмування',
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
  courseWork: 100,
  current: 30,
  exam: 70,
  labs: 30,
};

const semesters = {
  duration: {
    partOneEnd: '01.11.2024',
    partOneStart: '02.09.2024',
    partTwoEnd: '20.12.2024',
    partTwoStart: '04.11.2024',
  },
};

const staff = {
  lecturerAssistants: [
    'Кушнір Дмитро Олександрович',
  ],
  lecturerName: 'TBD',
  lecturerPhoto: '/images/apps/wp/lecturer.jpeg',
};

const compArchConfig: CommonAppMapping = {
  appPath: '/computer-architecture',
  articles: [
    {
      description: 'Ця стаття пояснює різницю між двома типами комп’ютерних архітектур — RISC (Reduced Instruction Set Computer) та CISC (Complex Instruction Set Computer), їх особливості, принципи роботи та історичний контекст виникнення. Порінюються такі архітектури як x86 (CISC) та ARM (RISC).',
      type: 'medium',
      username: 'dmytro.kushnir',
    },
  ],
  courseWork: {
    description: 'Проєктування CISC комп’ютера',
    filePath: '/files/apps/comp-arch/course-work/work-microprocessor.pdf',
    name: 'Курсова робота',
    objective: 'Мета курсового проєктування полягає в тому, щоб студент засвоїв знання про принципи роботи та архітектуру прототипів CISC-комп’ютера. Крім того, курсовий проект допоможе розібратися в інструкціях простої асемблерної мови та навчитись транслювати програми в машинний код.',
    sample: 'sample.zip',
    samplePath: '/files/apps/comp-arch/course-work/',
  },
  driveLinks: [
    {
      doc: 'https://docs.google.com/spreadsheets/d/1mryFxzyOy7czdyvab6F1MAZa3e_Vc-Yk/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
      drive: 'https://drive.google.com/drive/folders/1zOvW9TOw4hEO23iV0v768GcsEoz1y8RM?usp=drive_link',
      name: 'KI-41',
    },
    {
      doc: 'https://docs.google.com/spreadsheets/d/1JTF9MVdyosBGXYQi2kTrMOtEnErC9t0M/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
      drive: 'https://drive.google.com/drive/folders/1bxZ4fea1BeIDPNOfTgPXIyKPj35BEmV_?usp=drive_link',
      name: 'KI-42',
    },
    {
      doc: 'https://docs.google.com/spreadsheets/d/1pIV1ZBFADBnjB25DYr7wLjhrZp8l1bFi/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
      drive: 'https://drive.google.com/drive/folders/1Hnrov1ovJxGaoT1UBuMIggQu7N0UbJ5T?usp=drive_link',
      name: 'KI-43',
    },
    {
      doc: 'https://docs.google.com/spreadsheets/d/1vhnoKNyL29fohGtEGEnfsQLbjo8KrbnY/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
      drive: 'https://drive.google.com/drive/folders/1U9bJ4XKsD3vMmwhvYx3uYQ23zSVBq_eI?usp=drive_link',
      name: 'KI-44',
    },
    {
      doc: 'https://docs.google.com/spreadsheets/d/13WulPB-aOZutVQqAGISA4zv83_kCqfw5/edit?usp=drive_link&ouid=103403982621563213254&rtpof=true&sd=true',
      drive: 'https://drive.google.com/drive/folders/1L9u9YfOpOwQ77iFrV_AmnvGmRZpdB3YO?usp=drive_link',
      name: 'KI-45',
    },
  ],
  faviconLink: '/images/apps/comp-arch/svg/favicon.svg',
  header: {
    banner: {
      defaultPageConfig: { name: 'home', subtitle: 'Навчальна дисципліна', title: 'Архітектура комп\'ютерів' },
      pageConfigs: [
        { name: 'labs', title: 'Роботи до виконання' },
        { name: 'lectures', title: 'Курс Лекцій' },
        { name: 'course-work', title: 'Курсова робота' },
        { name: 'articles', title: 'Статті' },
        { name: 'grades', title: 'Журнали успішності' },
      ],
      url: '/images/apps/comp-arch/bg-banner.png',
    },
    logo: {
      alt: 'Архітектура комп\'ютерів',
      url: '/images/apps/comp-arch/logo.svg',
    },
  },
  homePage: {
    aboutSection: {
      logo: {
        alt: 'Мета та завдання курсу',
        url: '/images/apps/comp-arch/about.png',
      },
      objective: {
        conclusion: 'Завдання курсу - навчити студентів аналізувати і проєктувати архітектуру комп’ютерних систем, враховуючи взаємозв’язок архітектури і технологій, та їх вплив на продуктивність. Студенти опанують навички вимірювання продуктивності і розробки архітектури пам’яті та систем команд.',
        link: '/course-work',
        list: [
          'Типи архітектури комп’ютерів, їхня ієрархічна організація;',
          'Взаємозв’язок архітектури та технологій. Продуктивність системи;',
          'Методи вимірювання продуктивності комп’ютерів;',
          'Проєктування архітектури комп’ютера, системи команд, структури даних, способів адресації операндів;',
          'Розробка архітектури комп’ютерів типу RISC та CISC.',
        ],
        primary: 'Мета курсу - вивчення будови і організації функціонування комп’ютерних систем та їхніх компонентів на різних рівнях.',
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
          'Захист роботи відбувається на наступних поточних заняттях, після пояснення матеріалу. Викладач задає дотичні питання і оцінює роботу студента. Звіти по виконаних лаьбараторних роботах викладаються на диск у відповідну папку студента.',
          'Звіти та файли курсової потрібно надіслати на пошту викладачу з лабараторних робіт. На диск завантажувати курсову не треба.',
          `Після контрольних дат (${semesters.duration.partOneEnd} - №1-4, ${semesters.duration.partTwoEnd} - №4-8) бали за відповідні лабораторні роботи та доповіді не виставляються.`,
          `Курсову роботу можна захищати протягом семестру до ${semesters.duration.partTwoEnd}. Після зазначеної дати бали будуть зменшені.`,
          'До екзамену допускаються студенти, які захистили ВСІ лабораторні та самостійну роботи.',
          'Диски для завантаження робіт:',
        ],
        includeDriveLinks: true,
        title: 'Як відбуваються захисти робіт?',
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
          description: 'Лекції присвячені вивченню теоретичних основ архітектури комп’ютерів, включаючи багаторівневу ієрархічну організацію, основи мікроархітектури, і загальні принципи вдосконалення архітектури. Наприкінці курсу студенти здають екзамен, що включає в себе як теоретичні, так і практичні аспекти.',
          title: 'Лекції, екзамен',
          type: 'exam',
        },
        {
          description: 'Лабораторні роботи сфокусовані на практичному закріпленні знань з розробки архітектури RISC і CISC процесорів.',
          title: 'Лабораторні роботи',
          type: 'labs',
        },
        {
          description: ' Курсова робота надає студентам можливість самостійно досліджувати і проєктувати CISC комп’ютер, включаючи такі аспекти, як вид адресації, процесор, пам’ять та інші елементи системи.',
          title: 'Курсова робота',
          type: 'courseWork',
        },
      ],
      tasks: [
        'Знати основні типи архітектури комп’ютерів, їхню багаторівневу ієрархічну організацію;',
        'Розуміти співвідношення поміж архітектурою і технологіями та їх вплив на продуктивність комп’ютера;',
        'Знати способи та засоби вимірювання продуктивності комп’ютерів, а також основи мікроархітектури апаратних засобів;',
        'Вміти розробляти архітектуру комп’ютера, визначати систему його команд, структуру даних, способи адресації операндів та алгоритми функціонування комп’ютера при виконанні різних команд та режимів;',
        'Розробляти архітектуру пам’яті комп’ютера з урахуванням ієрархічного принципу її побудови і розподілу адресного простору між компонентами системи;',
        'Розробляти алгоритми обміну інформацією процесора з зовнішніми пристроями в режимах програмного опитування готовності, переривань і прямого доступу до пам’яті.',
      ],
    },
    pointsDistributionSection: {
      additionalNotes: [
        'Зазначено максимальну кількість балів за умови вчасного і належного захисту.',
        'Курсову роботу потрібно надсилати викладачу який приймає лабараторні на пошту.',
        'Щодо усної компоненти під час екзамену, усі питання щодо цього можна уточнити у лектора.',
      ],
      periods: [
        {
          items: [
            { label: 'Лабораторні 1-4', points: scores.labs / 2 },
          ],
          title: `${semesters.duration.partOneStart} - ${semesters.duration.partOneEnd}`,
        },
        {
          items: [
            { label: 'Лабораторні 4-8', points: scores.labs / 2 },
          ],
          title: `${semesters.duration.partTwoStart} - ${semesters.duration.partTwoEnd}`,
        },
        {
          items: [
            { label: 'Курсова Робота', points: scores.courseWork },
            { label: 'Тести, описові питання', points: scores.exam, specialClass: 'test' },
          ],
          title: 'Екзамен',
        },
      ],
    },
    shortInfoSection: {
      practicalPart: 'Лабораторні та Курсова Робота',
      theoryPart: 'Лекції',
    },
  },
  labList: [
    {
      description: 'Робота з симулятором машини Ноймана. Дослідження виконання машинного коду в автоматичному режимі.',
      filePath: '/files/apps/comp-arch/labs/1.pdf',
      iconSrc: '/images/apps/comp-arch/svg/index-string.svg',
      id: 'lab1',
      imgSrc: '/images/apps/comp-arch/labs/lab1.png',
      link: '/labs/lab1',
      name: 'Лабараторна №1',
      objective: 'Ознайомитися з симулятором машини Ноймана та дослідити виконання коду в симуляторі.',
      sample: 'lab1-2.zip',
      samplePath: '/files/apps/comp-arch/labs/',
    },
    {
      description: 'Дослідження макроалгоритмів та мікроалгоритмів виконання машинних інструкцій.',
      filePath: '/files/apps/comp-arch/labs/2.pdf',
      iconSrc: '/images/apps/comp-arch/svg/index-construction.svg',
      id: 'lab2',
      imgSrc: '/images/apps/comp-arch/labs/lab2.png',
      link: '/labs/lab2',
      name: 'Лабараторна №2',
      objective: 'Вивчити макро та мікроалгоритми виконання інструкцій.',
      sample: 'lab1-2.zip',
      samplePath: '/files/apps/comp-arch/labs/',
    },
    {
      description: 'Робота з симулятором машини Ноймана. Дослідження виконання асемблерної програми симулятора.',
      filePath: '/files/apps/comp-arch/labs/3.pdf',
      iconSrc: '/images/apps/comp-arch/svg/index-function.svg',
      id: 'lab3',
      imgSrc: '/images/apps/comp-arch/labs/lab3.png',
      link: '/labs/lab3',
      name: 'Лабараторна №3',
      objective: 'Вивчити виконання асемблерної програми в симуляторі CISC.',
      sample: 'lab3.zip',
      samplePath: '/files/apps/comp-arch/labs/',
    },
    {
      description: 'Робота з симулятором машини Ноймана. Дослідження архітектури системи команд.',
      filePath: '/files/apps/comp-arch/labs/4.pdf',
      iconSrc: '/images/apps/comp-arch/svg/index-matrix.svg',
      id: 'lab4',
      imgSrc: '/images/apps/comp-arch/labs/lab4.png',
      link: '/labs/lab4',
      name: 'Лабараторна №4',
      objective: 'Вивчити архітектуру системи команд у симуляторі CISC.',
      sample: 'lab4.zip',
      samplePath: '/files/apps/comp-arch/labs/',
    },
    {
      description: 'Робота з симулятором MARIE.',
      filePath: '/files/apps/comp-arch/labs/5.pdf',
      iconSrc: '/images/apps/comp-arch/svg/index-js.svg',
      id: 'lab5',
      imgSrc: '/images/apps/comp-arch/labs/lab5.png',
      link: '/labs/lab5',
      name: 'Лабараторна №5',
      objective: 'Ознайомитися з симулятором MARIE.',
      reference: 'https://marie.js.org/',
    },
    {
      description: 'Дослідження виконання інструкцій симулятора MARIE за допомогою DataPath.',
      filePath: '/files/apps/comp-arch/labs/6.pdf',
      iconSrc: '/images/apps/comp-arch/svg/index-object.svg',
      id: 'lab6',
      imgSrc: '/images/apps/comp-arch/labs/lab6.png',
      link: '/labs/lab6',
      name: 'Лабараторна №6',
      objective: 'Дослідити виконання інструкцій MARIE через DataPath.',
      reference: 'https://marie.js.org/#datapath',
    },
    {
      description: 'Дослідження виконання циклів на конвеєрі інструкцій.',
      filePath: '/files/apps/comp-arch/labs/7.pdf',
      iconSrc: '/images/apps/comp-arch/svg/index-object.svg',
      id: 'lab7',
      imgSrc: '/images/apps/comp-arch/labs/lab7.png',
      link: '/labs/lab7',
      name: 'Лабараторна №7',
      objective: 'Вивчити виконання циклів на RISC конвеєрі інструкцій.',
      sample: 'lab7-8.zip',
      samplePath: '/files/apps/comp-arch/labs/',
    },
    {
      description: 'Конкурентне виконання машинних інструкцій.',
      filePath: '/files/apps/comp-arch/labs/8.pdf',
      iconSrc: '/images/apps/comp-arch/svg/index-object.svg',
      id: 'lab8',
      imgSrc: '/images/apps/comp-arch/labs/lab8.png',
      link: '/labs/lab8',
      name: 'Лабараторна №8',
      objective: 'Ознайомитися конкурентне виконання RISC інструкцій.',
      sample: 'lab7-8.zip',
      samplePath: '/files/apps/comp-arch/labs/',
    },
  ],
  lecturesList: [
    {
      description: 'Огляд основних понять сучасної комп\'ютерної архітектури.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_1.pdf',
      id: 'lecture1',
      imageUrl: '/images/apps/comp-arch/lectures/lecture1.png',
      name: 'Сучасний комп\'ютер. Основні поняття.',
    },
    {
      description: 'Основи представлення даних у комп\'ютерних системах.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_2.pdf',
      id: 'lecture2',
      imageUrl: '/images/apps/comp-arch/lectures/lecture2.png',
      name: 'Представвлення данних у комп\'ютері.',
    },
    {
      description: 'Процеси виконання команд і програм у комп\'ютері.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_3.pdf',
      id: 'lecture3',
      imageUrl: '/images/apps/comp-arch/lectures/lecture3.png',
      name: 'Порядок виконання команд і програм в комп\'ютері',
    },
    {
      description: 'Вивчення структури та функцій процесора.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_4.pdf',
      id: 'lecture4',
      imageUrl: '/images/apps/comp-arch/lectures/lecture4.png',
      name: 'Процесор універсального комп\'ютера.',
    },
    {
      description: 'Техніки запобігання конфліктам у конвеєрі команд.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_5.pdf',
      id: 'lecture5',
      imageUrl: '/images/apps/comp-arch/lectures/lecture5.png',
      name: 'Запобігання конфліктам в конвеєрі команд.',
    },
    {
      description: 'Огляд алгоритмів обробки даних у комп\'ютері.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_6.pdf',
      id: 'lecture6',
      imageUrl: '/images/apps/comp-arch/lectures/lecture6.png',
      name: 'Алгоритми виконання операцій обробки даних.',
    },
    {
      description: 'Детальний розгляд арифметико-логічного пристрою.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_7.pdf',
      id: 'lecture7',
      imageUrl: '/images/apps/comp-arch/lectures/lecture7.png',
      name: 'Арифметико-логічний пристрій.',
    },
    {
      description: 'Принципи роботи пристрою керування комп\'ютером.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_8.pdf',
      id: 'lecture8',
      imageUrl: '/images/apps/comp-arch/lectures/lecture8.png',
      name: 'Пристрій керування.',
    },
    {
      description: 'Архітектура та функції багаторівневої пам\'яті.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_9.pdf',
      id: 'lecture9',
      imageUrl: '/images/apps/comp-arch/lectures/lecture9.png',
      name: 'Багаторівневе пам\'ять комп\'ютера.',
    },
    {
      description: 'Принципи організації пам\'яті у комп\'ютерних системах.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_10.pdf',
      id: 'lecture10',
      imageUrl: '/images/apps/comp-arch/lectures/lecture10.png',
      name: 'Організація пам\'яті.',
    },
    {
      description: 'Основи організації процесів введення-виведення.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_11.pdf',
      id: 'lecture11',
      imageUrl: '/images/apps/comp-arch/lectures/lecture11.png',
      name: 'Організація введення-виведення.',
    },
    {
      description: 'Концепції та архітектура паралельних комп\'ютерних систем.',
      filePath: '/files/apps/comp-arch/lectures/AK_lectures_12.pdf',
      id: 'lecture12',
      imageUrl: '/images/apps/comp-arch/lectures/lecture12.png',
      name: 'Паралельні комп\'ютерні системи.',
    },
  ],
  links,
  name: 'compArch',
  onlineLink: '',
  scores,
  semesters,
  staff,
  title: 'Архітектура комп\'ютерів',

};

export default compArchConfig;
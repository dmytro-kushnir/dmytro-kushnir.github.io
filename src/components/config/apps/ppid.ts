import { CommonAppMapping } from '../configMapping.ts';

const courseName = 'Периферійні пристрої';

const labsRepoUrl = 'https://github.com/dmytro-kushnir/ppid-labs';
const variantsJsonRaw = 'https://raw.githubusercontent.com/dmytro-kushnir/ppid-labs/main/fixtures/variants.json';
const labIcons = [
  '/images/apps/ppid/svg/index-uart.svg',
  '/images/apps/ppid/svg/index-wave.svg',
  '/images/apps/ppid/svg/index-usb.svg',
  '/images/apps/ppid/svg/index-i2c.svg',
  '/images/apps/ppid/svg/index-capstone.svg',
];

const labImages = [
  '/images/apps/ppid/labs/lab1.png',
  '/images/apps/ppid/labs/lab2.png',
  '/images/apps/ppid/labs/lab3.png',
  '/images/apps/ppid/labs/lab4.png',
  '/images/apps/ppid/labs/lab5.png',
];

const lecturesPdf = '/files/apps/ppid/lectures.pdf';
const praktikumPdf = '/files/apps/ppid/lab-praktikum.pdf';
/** Absolute URL for FAQ / notes (plain text, not site-relative). */
const praktikumPdfPublic = 'https://dmytro-kushnir.github.io/files/apps/ppid/lab-praktikum.pdf';

// Page anchors into lab-praktikum.pdf (printed numbers match physical pages).
const praktikumPages = {
  lab1: 16,
  lab2: 20,
  lab3: 32,
  lab4: 44,
  lab5: 49,
  theoryI2c: 37,
  theoryUart: 5,
  theoryUsb: 26,
};

const links = {
  courses: [
    {
      name: courseName,
      path: '/peripheral-devices',
    },
    {
      name: 'Архітектура Комп’ютерів',
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
  current: 30,
  exam: 70,
  labs: 30,
};

const semester = {
  end: '20.12.2026',
  periods: [
    {
      end: '10.10.2026',
      labs: '1',
      score: 6,
      start: '08.09.2026',
    },
    {
      end: '24.10.2026',
      labs: '2',
      score: 6,
      start: '10.10.2026',
    },
    {
      end: '14.11.2026',
      labs: '3',
      score: 6,
      start: '24.10.2026',
    },
    {
      end: '28.11.2026',
      labs: '4-5',
      score: 12,
      start: '14.11.2026',
    },
  ],
  start: '08.09.2026',
};

const staff = {
  lecturerAssistants: [
    'Кушнір Дмитро Олександрович',
  ],
  lecturerName: 'Кушнір Дмитро Олександрович',
  lecturerPhoto: '/images/apps/wp/lecturer.jpeg',
};

const ppidConfig: CommonAppMapping = {
  appPath: '/peripheral-devices',
  articles: [
    {
      description: 'Репозиторій коду курсу',
      link: labsRepoUrl,
      thumbnail: '/images/apps/ppid/docs/thumb-github.png',
      type: 'link',
    },
    {
      description: 'Modbus — повний посібник (A2M, блог)',
      link: 'https://www.a2m.com.ua/ua/post/what-is-modbus-a-complete-guide',
      thumbnail: '/images/apps/ppid/docs/thumb-modbus.png',
      type: 'link',
    },
    {
      description: 'ESP EyeBond Collector — UART/RS-485 міст інвертор → Home Assistant (ESPHome)',
      link: 'https://github.com/groove-max/esp-eybond-collector/blob/main/README.uk.md',
      thumbnail: '/images/apps/ppid/docs/thumb-eybond.png',
      type: 'link',
    },
    {
      description: 'Wokwi — симулятор ESP32 MicroPython (лаб. 4–5)',
      link: 'https://wokwi.com',
      thumbnail: '/images/apps/ppid/docs/thumb-wokwi.png',
      type: 'link',
    },
    {
      description: 'Wokwi Logic Analyzer — експорт VCD / SDA·SCL',
      link: 'https://docs.wokwi.com/guides/logic-analyzer',
      thumbnail: '/images/apps/ppid/docs/thumb-logic.png',
      type: 'link',
    },
    {
      description: 'MicroPython machine.UART',
      link: 'https://docs.micropython.org/en/latest/library/machine.UART.html',
      thumbnail: '/images/apps/ppid/labs/lab1.png',
      type: 'link',
    },
    {
      description: 'MicroPython machine.I2C',
      link: 'https://docs.micropython.org/en/latest/library/machine.I2C.html',
      thumbnail: '/images/apps/ppid/labs/lab4.png',
      type: 'link',
    },
    {
      description: 'USB — огляд (Wikipedia)',
      link: 'https://uk.wikipedia.org/wiki/USB',
      thumbnail: '/images/apps/ppid/docs/thumb-usb.png',
      type: 'link',
    },
    {
      description: 'I²C — шина SDA/SCL (Wikipedia)',
      link: 'https://uk.wikipedia.org/wiki/I%C2%B2C',
      thumbnail: '/images/apps/ppid/docs/thumb-i2c.png',
      type: 'link',
    },
  ],
  codeRepoUrl: labsRepoUrl,
  driveLinks: [
    {
      drive: 'https://drive.google.com/drive/folders/1D6_hjQ8F5IqQfYjvHGTbcj794HnHMWj7?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/18_DFydT0AILiKKHDLanVkixdXWXd2J7O/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-303',
    },
    {
      drive: 'https://drive.google.com/drive/folders/1pNU_PhwOEjnZ0I3XRXhxTAljlMsIZ-fM?usp=sharing',
      journal: 'https://docs.google.com/spreadsheets/d/1s7YiJI7r1-Y3ej9qIb6Cpk5k4a9tZjIg/edit?usp=sharing&ouid=112734872675001245593&rtpof=true&sd=true',
      name: 'KI-304',
    },
  ],
  faviconLink: '/images/apps/ppid/favicon.svg',
  header: {
    banner: {
      defaultPageConfig: {
        name: 'home',
        subtitle: 'Навчальна дисципліна',
        title: 'Периферійні пристрої',
      },
      pageConfigs: [
        { name: 'labs', title: 'Лабораторні роботи' },
        { name: 'lectures', title: 'Курс лекцій' },
        { name: 'articles', title: 'Блог і корисні посилання' },
        { name: 'drives', title: 'Диски для звітності' },
        { name: 'grades', title: 'Журнали успішності' },
        { name: 'variants', title: 'Варіанти завдань' },
      ],
      url: '/images/apps/ppid/bg-banner.png',
    },
    logo: {
      alt: 'PPID',
      url: '/images/apps/ppid/logo.svg',
    },
  },
  homePage: {
    aboutSection: {
      logo: {
        alt: 'Мета та завдання курсу',
        url: '/images/apps/ppid/about.png',
      },
      objective: {
        conclusion: 'Практикум 2026: 5 лабораторних (Python + Wokwi для I²C/capstone, без обов’язкового фізичного заліза). Конспект лекцій — 15 тем. Доповнення 2026: класифікація інтерфейсів, embedded-платформи, USB-C, DP/HDMI. Усі шаблони — у репозиторії ppid-labs.',
        link: '/lectures',
        list: [
          'Класифікація периферійних інтерфейсів та принципи побудови драйверів;',
          'Послідовні інтерфейси: RS-232C / UART, USB, CAN, SPI, I²C;',
          'Паралельні інтерфейси: PCI/PCIe, ATA/SATA, SCSI;',
          'Драйвери пристроїв введення, виведення та зовнішніх накопичувачів;',
          'Практика: host↔device UART, візуалізація сигналів, модель USB, I²C у Wokwi, capstone-моніторинг.',
        ],
        primary: 'Мета курсу — вивчення особливостей поширених периферійних інтерфейсів та отримання навичок розроблення програмних драйверів і моделей обміну даними.',
      },
    },
    faqSection: [
      {
        content: [
          `Заняття з дисципліни «${courseName}» проходять офлайн у визначених аудиторіях кафедри ЕОМ. Розклад — у ВНС та на порталі університету.`,
          `Лекції веде та приймає екзамен: ${staff.lecturerName}`,
          `Лабораторні веде і приймає захисти: ${staff.lecturerAssistants.join(', ')}`,
        ],
        showOnlineLink: false,
        title: 'Як і де відбуваються заняття?',
      },
      {
        content: [
          `Практикум (PDF): ${praktikumPdfPublic}`,
          `Репозиторій коду: ${labsRepoUrl} — host/, encoding/, wokwi/ (Додаток А).`,
          `Встановлення: ${labsRepoUrl}/blob/main/docs/SETUP.md`,
        ],
        title: 'Які матеріали використовувати?',
      },
      {
        content: [
          'Захист на поточних заняттях; викладач оцінює live-демо та звіт.',
          `Контрольні дати: ${semester.periods.map((period) => `${period.end} — лаб. ${period.labs}`).join('; ')}. Після дати бали зменшуються, ще через тиждень — не виставляються.`,
          'Звіти завантажуйте на Google Диск групи (папка студента).',
          'До екзамену допускаються студенти з захищеними всіма лабораторними.',
          'Диски для завантаження звітів:',
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
          description: '15 лекцій охоплюють послідовні та паралельні периферійні інтерфейси й драйвери. Підсумковий екзаменаційний контроль.',
          title: 'Лекції, екзамен',
          type: 'exam',
        },
        {
          description: '5 лабораторних (2026): UART host↔device, візуалізація сигналів, модель USB, I²C (Wokwi), capstone-моніторинг. Без обов’язкового фізичного заліза — Python і симулятор Wokwi.',
          title: 'Лабораторні роботи',
          type: 'labs',
        },
      ],
      tasks: [
        'Знати класифікацію периферійних інтерфейсів та принципи стандартизації;',
        'Розуміти RS-232C / UART: формат слова, управління потоком;',
        'Знати архітектуру USB: транзакції, endpoints, NRZI;',
        'Описувати CAN, SPI, I²C та паралельні інтерфейси PCI/PCIe, ATA/SATA;',
        'Реалізовувати програми обміну з послідовними портами та моделі периферії (практикум 2026).',
      ],
    },
    pointsDistributionSection: {
      additionalNotes: [
        'Зазначено максимальну кількість балів за умови вчасного захисту.',
        `Практикум (PDF): ${praktikumPdfPublic}`,
        `Код (host / encoding / wokwi): ${labsRepoUrl}`,
        `SETUP: ${labsRepoUrl}/blob/main/docs/SETUP.md`,
      ],
      periods: [
        ...semester.periods.map((period) => ({
          items: [
            {
              label: period.labs.includes('-')
                ? `Лабораторні ${period.labs}`
                : `Лабораторна ${period.labs}`,
              points: period.score,
            },
          ],
          title: `${period.start} - ${period.end}`,
        })),
        {
          items: [
            { label: 'Тести, описові питання', points: scores.exam, specialClass: 'test' },
          ],
          title: 'Екзамен',
        },
      ],
    },
    shortInfoSection: {
      practicalPart: '5 лабораторних (Python + Wokwi)',
      theoryPart: '15 лекцій',
    },
  },
  labList: [
    {
      description:
        'Дослідження програм передавача, приймача та моделі обміну даними інтерфейса RS-232C',
      id: 'lab1',
      name: 'Лабораторна №1',
      objective: 'Налаштувати UART і реалізувати обмін повідомленням між Python host і емулятором пристрою (віртуальна пара COM).',
      page: praktikumPages.lab1,
      theory: praktikumPages.theoryUart,
    },
    {
      description:
        'Дослідження графічного представлення сигналів лінії зв’язку та кодування NRZI інтерфейса УПШ (USB)',
      id: 'lab2',
      name: 'Лабораторна №2',
      objective: 'Побудувати амплітудно-часові діаграми UART та NRZI; розрахувати час передачі повідомлення.',
      page: praktikumPages.lab2,
      theory: praktikumPages.theoryUart,
    },
    {
      description:
        'Розроблення та дослідження елементів програмного драйвера інтерфейса УПШ (USB)',
      id: 'lab3',
      name: 'Лабораторна №3',
      objective: 'Опанувати Token → Data → Handshake, mock enumeration і запис на рівні моделі ФС (без фізичної флешки).',
      page: praktikumPages.lab3,
      theory: praktikumPages.theoryUsb,
    },
    {
      description:
        'Дослідження шини I2C та розроблення програмного драйвера периферійного давача',
      id: 'lab4',
      name: 'Лабораторна №4',
      objective: 'Опанувати master–slave I²C: scan (0x77), читання TEMP/PRESS, аналіз SDA/SCL у Logic Analyzer.',
      page: praktikumPages.lab4,
      theory: praktikumPages.theoryI2c,
    },
    {
      description:
        'Розроблення та дослідження інтегрованого вузла моніторингу комп’ютерної системи',
      id: 'lab5',
      name: 'Лабораторна №5',
      objective: 'Інтегрувати датчик, телеметрію TEMP=… і host-обробку (CSV + графік) у міні-систему моніторингу.',
      page: praktikumPages.lab5,
      theory: praktikumPages.theoryI2c,
    },
  ].map((lab, index) => ({
    description: lab.description,
    filePath: `${praktikumPdf}#page=${lab.page}`,
    iconSrc: labIcons[index],
    id: lab.id,
    imgSrc: labImages[index],
    link: `/labs/${lab.id}`,
    name: lab.name,
    objective: lab.objective,
    theoryPath: `${praktikumPdf}#page=${lab.theory}`,
  })),
  lecturesList: [
    {
      description: 'Формат кадру UART, baud, 8N1, flow control, COM; USB-UART і pyserial. Практика: лаб. 1–2.',
      filePath: `${lecturesPdf}#page=6`,
      id: 'lecture1',
      name: 'Інтерфейс RS-232C та драйвери комунікаційних портів',
    },
    {
      description: 'Топологія USB, транзакції Token–Data–Handshake, endpoints, NRZI. Практика: лаб. 2–3.',
      filePath: `${lecturesPdf}#page=22`,
      id: 'lecture2',
      name: 'Інтерфейс USB: характеристики, транзакції та драйвери',
    },
    {
      description: 'Польові шини CL і CAN: арбітраж, мультимайстер, промисловий контекст.',
      filePath: `${lecturesPdf}#page=29`,
      id: 'lecture3',
      name: 'Інтерфейси CL та CAN',
    },
    {
      description: 'Керована авіаційна шина MIL-STD-1553B: Bus Controller / Remote Terminal.',
      filePath: `${lecturesPdf}#page=41`,
      id: 'lecture4',
      name: 'Інтерфейс MIL-STD-1553B',
    },
    {
      description: 'SPI: MOSI/MISO/SCK/CS, режими CPOL/CPHA; порівняння з I²C.',
      filePath: `${lecturesPdf}#page=46`,
      id: 'lecture5',
      name: 'Інтерфейс SPI',
    },
    {
      description: 'I²C: SDA/SCL, open-drain, 7-біт адреса, ACK. Практика: лаб. 4–5.',
      filePath: `${lecturesPdf}#page=52`,
      id: 'lecture6',
      name: 'Інтерфейс I²C',
    },
    {
      description: 'Історичні магістралі мінікомп’ютерів і PC: Q-BUS, ISA, EISA.',
      filePath: `${lecturesPdf}#page=59`,
      id: 'lecture7',
      name: 'Інтерфейси Q-BUS, ISA, EISA',
    },
    {
      description: 'Сучасні шини розширення: PCI, PCI Express, AGP.',
      filePath: `${lecturesPdf}#page=72`,
      id: 'lecture8',
      name: 'Інтерфейси PCI, PCI-E, AGP',
    },
    {
      description: 'Паралельні інтерфейси: BS-4421, Centronics, IEEE-488 (GPIB).',
      filePath: `${lecturesPdf}#page=85`,
      id: 'lecture9',
      name: 'Інтерфейси BS-4421, Centronics, IEEE-488',
    },
    {
      description: 'Інтерфейси накопичувачів: ATA, SATA, SCSI.',
      filePath: `${lecturesPdf}#page=99`,
      id: 'lecture10',
      name: 'Інтерфейси ATA, SATA, SCSI',
    },
    {
      description: 'АЦП/ЦАП і периферія з аналоговими сигналами.',
      filePath: `${lecturesPdf}#page=119`,
      id: 'lecture11',
      name: 'Периферійні пристрої з аналоговими сигналами',
    },
    {
      description: 'Драйвери зовнішніх ЗП: блокові пристрої, ФС, рівні ПЗ.',
      filePath: `${lecturesPdf}#page=123`,
      id: 'lecture12',
      name: 'Драйвери зовнішніх запам’ятовуючих пристроїв',
    },
    {
      description: 'Драйвери введення: клавіатура, миша, сканер; USB HID.',
      filePath: `${lecturesPdf}#page=145`,
      id: 'lecture13',
      name: 'Драйвери пристроїв уведення (текст і графіка)',
    },
    {
      description: 'Драйвери виведення: дисплеї, принтери.',
      filePath: `${lecturesPdf}#page=155`,
      id: 'lecture14',
      name: 'Драйвери пристроїв виведення (текст і графіка)',
    },
    {
      description: 'Аудіо та мовлення: звукові карти, USB Audio (огляд).',
      filePath: `${lecturesPdf}#page=166`,
      id: 'lecture15',
      name: 'Драйвери пристроїв уведення та виведення мови',
    },
  ].map((lecture, index) => ({
    ...lecture,
    imageUrl: `/images/apps/ppid/lectures/lecture${index + 1}.png`,
  })),
  links,
  name: 'ppid',
  onlineLink: '',
  scores,
  semester,
  sidebar: {
    sections: [
      ...semester.periods.map((period) => ({
        content: [`Лабораторні №${period.labs}: ${period.score} балів`],
        title: `${period.start}-${period.end}`,
      })),
      {
        content: [
          `Поточні бали: ${scores.current} балів`,
          `Екзамен: ${scores.exam} балів`,
        ],
        title: 'Екзаменаційний контроль',
      },
    ],
    showDriveLinks: true,
    showScores: true,
  },
  staff,
  title: 'Периферійні пристрої',
  variantsDataUrl: variantsJsonRaw,
};

export default ppidConfig;

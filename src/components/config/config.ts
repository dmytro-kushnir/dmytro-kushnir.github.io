import { ConfigMapping } from './configMapping.ts';

const links = {
  department: 'https://eom.lpnu.ua',
  institute: 'https://lpnu.ua/ikta',
  mail: 'Dmytro.O.Kushnir@lpnu.ua',
  scheduleExam: 'https://student2023.lpnu.ua/students_exam',
  scheduleLesson: 'https://student2023.lpnu.ua/students_schedule',
  telegram: 'https://t.me/dmytro_kushnir',
  university: 'https://lpnu.ua',
  vle: 'https://vns.lpnu.ua',
};

const config: ConfigMapping = {
  apps: {
    otherApp: {
      appPath: '/other-app',
      driveLinks: [],
      header: {
        banner: {
          defaultPageConfig: { name: 'home', subtitle: 'example', title: 'Example title' },
          pageConfigs: [],
          url: '/images/apps/otherApp/bg-banner.png',
        },
        logo: {
          alt: 'Other logo',
          url: '/images/apps/otherApp/logo.png',
        },
      },
      labList: [],
      lecturesList: [],
      links,
      name: 'otherApp',
      sidebar: {
        scores: {
          current: 0,
          exam: 0,
          labs: 0,
          presentationMax: 0,
          presentationMin: 0,
          selfStudy: 0,
        },
        semesters: {
          duration: {
            part1: '',
            part2: '',
          },
        },
      },
    },
    wp: {
      appPath: '/web-programming',
      driveLinks: [
        {
          doc: 'https://docs.google.com/spreadsheets/d/1Cq50xhcB1aXG2i06z2TTFGQKO9Ov-PLl',
          drive: 'https://drive.google.com/drive/u/0/folders/168tWDv7CTfGKh5DOTG4rNujxaJS9ZDGW',
          name: 'KI-41',
        },
        {
          doc: 'https://drive.google.com/drive/u/0/folders/1hbeZmpsK9EByz67o0zViKmu0s_Mlwn0g',
          drive: 'https://docs.google.com/spreadsheets/d/1cTeO678uh9C8Thpl-To5jLvBJcQVdFTo',
          name: 'KI-42',
        },
        {
          doc: 'https://drive.google.com/drive/u/0/folders/1363d0DT4xQNE7BHSXkrSvAlbHkTh7mXj',
          drive: 'https://docs.google.com/spreadsheets/d/1X93VYlvLjmsCqxXYEohF4K1g7kL-vhf6',
          name: 'KI-43',
        },
        {
          doc: 'https://drive.google.com/drive/u/0/folders/1FAwfJHtS93V2_vp-TETMjtPgjv0s29Qi',
          drive: 'https://docs.google.com/spreadsheets/d/1GGrgoJ_CEHz893MOUYXc-QX3ksCqB6s2',
          name: 'KI-44',
        },
        {
          doc: 'https://drive.google.com/drive/u/0/folders/1puhqbpG7DYhoeKgB33J3rkt-mP-_Wbq4',
          drive: 'https://docs.google.com/spreadsheets/d/1YoIDnu8TSv50v1OWHgwsRRoW3xQpkwDv',
          name: 'KI-45',
        },
      ],
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
      labList: [
        {
          id: 'lab1',
          name: 'Лабараторна №1',
        },
        {
          id: 'lab2',
          name: 'Лабараторна №2',
        },
        {
          id: 'lab3',
          name: 'Лабараторна №3',
        },
        {
          id: 'lab4',
          name: 'Лабараторна №4',
        },
        {
          id: 'lab5',
          name: 'Лабараторна №5',
        },
        {
          id: 'lab6',
          name: 'Лабараторна №6',
        },
      ],
      lecturesList: [
        {
          id: 'lecture1',
          name: 'Клієнт-серверна архітектура та її компоненти.',
        },
        {
          id: 'lecture2',
          name: 'Протокол HTTP. Принципи функціонування.',
        },
        {
          id: 'lecture3',
          name: 'Браузер. Склад і загальні принципи роботи.',
        },
        {
          id: 'lecture4',
          name: 'Веб сервер. Апаратне і програмне забезпечення.',
        },
        {
          id: 'lecture5',
          name: 'Веб-додатки. Поняття, компоненти та принципи роботи.',
          subLectures: [
            { id: 'lecture5.1', name: 'Веб-додатки для колективної роботи.' },
          ],
        },
        {
          id: 'lecture6',
          name: 'Архітектура веб-додатків.',
        },
        {
          id: 'lecture7',
          name: 'Етапи реалізації веб-проекту.',
        },
        {
          id: 'lecture8',
          name: 'Етап аналітики і проектування.',
        },
        {
          id: 'lecture9',
          name: 'Етап реалізації. Дизайн-макети, frontend, backend, тестування.',
        },
        {
          id: 'lecture10',
          name: 'Фронтенд-розробка. Ключові технології та поняття.',
          subLectures: [
            { id: 'lecture10.1', name: 'Мова HTML. Поняття, стандарти, теги та атрибути.' },
            { id: 'lecture10.2', name: 'Структура сторінки, DOM-дерево, застосування тегів.' },
            { id: 'lecture10.3', name: 'Сучасний CSS. Основні поняття, селектори, блокова модель.' },
            { id: 'lecture10.4', name: 'CSS. Типи даних та робота з HTML-елементами.' },
            { id: 'lecture10.5', name: 'CSS. Стилі коду та побудова макетів.' },
            { id: 'lecture10.6', name: 'JavaScript у веб-розробці.' },
            { id: 'lecture10.7', name: 'JavaScript фреймворки.' },
          ],
        },
        {
          id: 'lecture11',
          name: 'Бекенд. Програмування серверної частини.',
          subLectures: [
            { id: 'lecture11.1', name: 'Мови серверного програмування.' },
            { id: 'lecture11.2', name: 'Бекенд фреймворки.' },
          ],
        },
        {
          id: 'lecture12',
          name: 'Інструменти веб-розробника.',
          subLectures: [
            { id: 'lecture12.1', name: 'Консоль розробника в браузері.' },
            { id: 'lecture12.2', name: 'Системи контролю версій.' },
            { id: 'lecture12.3', name: 'Тестування веб-додатків.' },
          ],
        },
      ],
      links,
      name: 'wp',
      sidebar: {
        scores: {
          current: 40,
          exam: 60,
          labs: 24, // please divide by 2 for each semester
          presentationMax: 5,
          presentationMin: 1,
          selfStudy: 16,
        },
        semesters: {
          duration: {
            part1: '27.02.2023 - 26.03.2023',
            part2: '27.03.2023 - 23.04.2023',
          },
        },
      },
    },
  },
};

export default config;

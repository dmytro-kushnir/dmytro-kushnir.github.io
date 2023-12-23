import { ConfigMapping } from './configMapping.ts';

const topBar = {
  links: {
    eom: 'https://lpnu.ua/',
    mail: 'Dmytro.O.Kushnir@lpnu.ua',
    scheduleExam: 'https://student2023.lpnu.ua/students_exam',
    scheduleLesson: 'https://student2023.lpnu.ua/students_schedule',
    telegram: 'https://t.me/dmytro_kushnir',
    vle: 'https://vns.lpnu.ua',
  },
};

const config: ConfigMapping = {
  apps: {
    otherApp: {
      appPath: '/other-app',
      driveLinks: [],
      header: {
        labList: [],
        logo: {
          alt: 'Other logo',
          url: '/images/apps/otherApp/logo.png',
        },
      },
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
      topBar,
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
        logo: {
          alt: 'Веб-програмування',
          url: '/images/apps/wp/logo.png',
        },
      },
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
      topBar,
    },
  },
};

export default config;

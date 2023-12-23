export interface DriveLink {
    name: string;
    doc: string;
    drive: string;
}

type SideBarMapping = {
    driveLinks: DriveLink[];
    scores: {
        current: number;
        exam: number;
        labs: number;
        presentationMax: number;
        presentationMin: number;
        selfStudy: number;
    };
    semesters: {
        duration: {
            part1: string;
            part2: string;
        }
    }
};

type TopBarMapping = {
    links: {
        eom: string;
        mail: string;
        scheduleExam: string;
        scheduleLesson: string;
        telegram: string;
        vle: string; // virtual learning environment
    }
};

export type ConfigMapping = {
    apps: {
        otherApp: { // an example app
            name: string;
            sidebar: SideBarMapping;
            topBar: TopBarMapping;
        }
        wp: {
            name: string;
            sidebar: SideBarMapping;
            topBar: TopBarMapping;
        }
    };
};

const AppNames = {
  otherApp: 'otherApp' as const,
  wp: 'wp' as const,
} as const;

export type AppNames = keyof typeof AppNames;

const topBar : TopBarMapping = {
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
      name: 'otherApp',
      sidebar: {
        driveLinks: [],
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
      name: 'wp',
      sidebar: {
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

export type ConfigMapping = {
    apps: {
        wp: {
            name: string;
            sidebar: {
                driveLinks: {
                    'КІ-41': {
                        doc: string;
                        drive: string;
                    },
                    'КІ-42': {
                        doc: string;
                        drive: string;
                    }
                    'КІ-43': {
                        doc: string;
                        drive: string;
                    }
                    'КІ-44': {
                        doc: string;
                        drive: string;
                    }
                    'КІ-45': {
                        doc: string;
                        drive: string;
                    }
                }
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
            }
        };
    };
};

const config: ConfigMapping = {
  apps: {
    wp: {
      name: 'web-programming',
      sidebar: {
        driveLinks: {
          'КІ-41': {
            doc: 'https://docs.google.com/spreadsheets/d/1Cq50xhcB1aXG2i06z2TTFGQKO9Ov-PLl',
            drive: 'https://drive.google.com/drive/u/0/folders/168tWDv7CTfGKh5DOTG4rNujxaJS9ZDGW',
          },
          'КІ-42': {
            doc: 'https://drive.google.com/drive/u/0/folders/1hbeZmpsK9EByz67o0zViKmu0s_Mlwn0g',
            drive: 'https://docs.google.com/spreadsheets/d/1cTeO678uh9C8Thpl-To5jLvBJcQVdFTo',
          },
          'КІ-43': {
            doc: 'https://drive.google.com/drive/u/0/folders/1363d0DT4xQNE7BHSXkrSvAlbHkTh7mXj',
            drive: 'https://docs.google.com/spreadsheets/d/1X93VYlvLjmsCqxXYEohF4K1g7kL-vhf6',
          },
          'КІ-44': {
            doc: 'https://drive.google.com/drive/u/0/folders/1FAwfJHtS93V2_vp-TETMjtPgjv0s29Qi',
            drive: 'https://docs.google.com/spreadsheets/d/1GGrgoJ_CEHz893MOUYXc-QX3ksCqB6s2',
          },
          'КІ-45': {
            doc: 'https://drive.google.com/drive/u/0/folders/1puhqbpG7DYhoeKgB33J3rkt-mP-_Wbq4',
            drive: 'https://docs.google.com/spreadsheets/d/1YoIDnu8TSv50v1OWHgwsRRoW3xQpkwDv',
          },
        },
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

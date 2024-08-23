import { CommonAppMapping } from '../configMapping.ts';

const otherAppConfig: CommonAppMapping = {
  appPath: '/other-app',
  driveLinks: [],
  faviconLink: '/images/apps/otherApp/favicon.png',
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
  homePage: {},
  labList: [],
  lecturesList: [],
  links: {
    courses: [],
    department: '',
    institute: '',
    mail: '',
    scheduleExam: '',
    scheduleLesson: '',
    telegram: '',
    university: '',
    vle: '',
  },
  name: 'otherApp',
  onlineLink: '',
  scores: {
    current: 0,
    exam: 0,
    interview: 0,
    labs: 0,
  },
  semesters: {
    duration: {
      partOneEnd: '',
      partOneStart: '',
      partTwoEnd: '',
      partTwoStart: '',
    },
  },
  staff: {
    lecturerAssistants: [],
    lecturerName: '',
    lecturerPhoto: '',
  },
  title: 'Other app',
};

export default otherAppConfig;

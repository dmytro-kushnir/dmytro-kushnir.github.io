interface DriveLink {
    name: string;
    doc: string;
    drive: string;
}

type ScoresMappping = {
    current: number;
    interview: number;
    exam: number;
    labs: number;
    presentationMax: number;
    presentationMin: number;
    selfStudy: number;
}

type SemestersMapping = {
    duration: {
        partOneEnd: string;
        partOneStart: string;
        partTwoEnd: string;
        partTwoStart: string;
    }
}

type LinksMapping = {
    courses: { name: string; path: string }[];
    institute: string;
    mail: string;
    university: string;
    department: string;
    scheduleExam: string;
    scheduleLesson: string;
    telegram: string;
    vle: string; // virtual learning environment
}

export interface LabLink {
    description: string;
    filePath: string;
    iconSrc: string;
    id: string;
    imgSrc: string
    link: string
    name: string;
    objective: string;
    reference?: string;
    sample?: string;
    samplePath?: string;
}

export interface LectureLink {
    description?: string;
    filePath: string;
    id: string;
    imageUrl?: string;
    name: string;
    subLectures?: LectureLink[];
}

interface PageConfig {
    name: string;
    title: string;
    subtitle?: string;
}

type HeaderMapping = {
    banner: {
        url: string;
        defaultPageConfig: PageConfig;
        pageConfigs: PageConfig[];
    }
    logo: {
        url: string;
        alt: string;
    }
};

interface CourseWork {
    description: string;
    filePath: string;
    name: string;
    objective: string;
    sample?: string;
    samplePath?: string;
}

interface Article {
    description: string;
    link?: string;
    name?: string;
    type: string;
    username: string;
}

type CommonAppMapping = {
    appPath: string;
    articles?: Article[];
    courseWork?: CourseWork;
    driveLinks: DriveLink[];
    faviconLink: string;
    header: HeaderMapping;
    labList: LabLink[];
    lecturesList: LectureLink[];
    lecturerName: string;
    lecturerPhoto: string,
    lecturerAssistants: string[]
    links: LinksMapping;
    name: string;
    onlineLink: string;
    scores: ScoresMappping;
    semesters: SemestersMapping
    title: string;
}

export type ConfigMapping = {
    apps: {
        compArch: CommonAppMapping
        otherApp: CommonAppMapping
        wp: CommonAppMapping
    };
};

const AppNames = {
  compArch: 'compAch' as const,
  otherApp: 'otherApp' as const,
  wp: 'wp' as const,
} as const;

export const defaultApp: AppNames = 'wp';

export type AppNames = keyof typeof AppNames;

interface DriveLink {
    name: string;
    doc: string;
    drive: string;
}

type ScoresMappping = {
    current: number;
    courseWork?: number;
    interview?: number;
    exam: number;
    labs: number;
    presentationMax?: number;
    presentationMin?: number;
    selfStudy?: number;
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
    department: string;
    institute: string;
    mail: string;
    scheduleExam: string;
    scheduleLesson: string;
    telegram: string;
    vle: string; // virtual learning environment
    university: string;
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

interface ImageMapping {
    url: string;
    alt: string;
}

type HeaderMapping = {
    banner: {
        url: string;
        defaultPageConfig: PageConfig;
        pageConfigs: PageConfig[];
    }
    logo: ImageMapping
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

interface HomePageMapping {
    aboutSection?: {
        logo?: ImageMapping
        objective?: {
            conclusion?: string;
            link?: string;
            list?: string[];
            primary?: string;
            secondary?: string;
        };
    };
    faqSection?: {
        content: string[];
        includeDriveLinks?: boolean;
        includeLecturerContact?: boolean;
        showOnlineLink?: boolean;
        title: string;
    }[];
    fullInfoSection?: {
        roadmap?: {
            description: string;
            title: string;
            type: keyof ScoresMappping;
        }[];
        tasks?: string[];
    }
    pointsDistributionSection?: {
        additionalNotes: string[];
        periods: {
            title: string;
            items: {
                label: string;
                points: number;
                specialClass?: string;
            }[];
        }[];
    };
    shortInfoSection?: {
        practicalPart?: string;
        theoryPart?: string;
    };
}

interface SidebarConfig {
    sections: {
        title: string;
        content: string[];
    }[];
    showDriveLinks: boolean;
    showScores: boolean;
}

interface StaffMapping {
    lecturerName: string;
    lecturerPhoto: string,
    lecturerAssistants: string[]
}

export type CommonAppMapping = {
    appPath: string;
    articles?: Article[];
    courseWork?: CourseWork;
    driveLinks: DriveLink[];
    faviconLink: string;
    header: HeaderMapping;
    homePage: HomePageMapping;
    labList: LabLink[];
    lecturesList: LectureLink[];
    staff: StaffMapping;
    links: LinksMapping;
    name: string;
    onlineLink: string;
    semesters: SemestersMapping
    sidebar?: SidebarConfig;
    scores: ScoresMappping;
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

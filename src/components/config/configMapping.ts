interface DriveLink {
    name: string;
    doc: string;
    drive: string;
}

type SideBarMapping = {
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

export interface LabLink {
    id: string;
    name: string;
}

type HeaderMapping = {
    logo: {
        url: string;
        alt: string;
    }
};

type CommonAppMapping = {
    appPath: string;
    driveLinks: DriveLink[];
    header: HeaderMapping;
    labList: LabLink[];
    name: string;
    sidebar: SideBarMapping;
    topBar: TopBarMapping;
}

export type ConfigMapping = {
    apps: {
        otherApp: CommonAppMapping
        wp: CommonAppMapping
    };
};

const AppNames = {
  otherApp: 'otherApp' as const,
  wp: 'wp' as const,
} as const;

export type AppNames = keyof typeof AppNames;

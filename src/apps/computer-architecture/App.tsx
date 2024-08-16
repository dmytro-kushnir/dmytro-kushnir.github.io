import {
  Routes, Route, Outlet,
} from 'react-router-dom';

import * as React from 'react';
import styles from './App.module.scss';

import TopBar from '../../components/topbar/topbar.tsx';
import Header from '../../components/header/header.tsx';
import HomePage from '../../components/home-page/homePage.tsx';
import Footer from '../../components/footer/footer.tsx';
import Lab from '../../components/lab/lab.tsx';
import Lectures from '../../components/lecture/lectures.tsx';
import Lecture from '../../components/lecture/lecture.tsx';
import Journals from '../../components/journals/journals.tsx';
import CourseWork from '../../components/course-work/courseWork.tsx';
import MediumArticle from '../../components/articles/mediumArticle.tsx';

import NoMatch from '../../components/no-match/index.tsx';
import useConfig from '../../components/config/useConfig.ts';
import AppNameProvider from '../../components/context/appName.tsx';
import { AppNames } from '../../components/config/configMapping.ts';
import Banner from '../../components/banner/banner.tsx';

import ScrollToTop from '../../components/scroll-to-top/scrollToTop.ts';
import { useAppHead } from '../../utils/utils.ts';

interface Props {
    appName: AppNames;
}

function Layout() {
  return (
    <div>
      <TopBar />
      <Header config={{
        showArticles: true,
        showCourseWork: true,
        showDriveLinks: true,
        showGrades: true,
        showLabList: true,
        showLectures: true,
      }}
      />
      <Banner />

      <Outlet />

      <Footer />
    </div>
  );
}

export default function WebProgrammingApp({ appName }: Props) {
  const {
    faviconLink, labList, lecturesList, title,
  } = useConfig(appName);

  useAppHead(faviconLink, title);

  return (
    <div className={styles.app}>
      <AppNameProvider appName={appName}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<HomePage />}
            />
            {lecturesList.map((lecture) => (
              <React.Fragment key={lecture.id}>
                <Route path={`/lectures/${lecture.id}`} element={<Lecture lecture={lecture} />} />
                {lecture.subLectures && lecture.subLectures.map((subLecture) => (
                  <Route
                    key={subLecture.id}
                    path={`/lectures/${subLecture.id}`}
                    element={<Lecture lecture={subLecture} />}
                  />
                ))}
              </React.Fragment>
            ))}
            <Route path="/lectures" element={<Lectures />} />
            {labList.map((lab) => (
              <Route key={lab.id} path={`labs/${lab.id}`} element={<Lab lab={lab} />} />
            ))}
            <Route path="course-work" element={<CourseWork />} />
            <Route path="articles" element={<MediumArticle />} />
            <Route path="grades" element={<Journals />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </AppNameProvider>
    </div>
  );
}

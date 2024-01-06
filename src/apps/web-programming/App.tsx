import './App.css';

import {
  Routes, Route, Outlet,
} from 'react-router-dom';

import * as React from 'react';

import TopBar from '../../components/topbar/topbar.tsx';
import Header from '../../components/header/header.tsx';
import HomePage from '../../components/home-page/homePage.tsx';
import Footer from '../../components/footer/footer.tsx';
import Lab from '../../components/lab/lab.tsx';

import NoMatch from '../../components/no-match/index.tsx';
import useConfig from '../../components/config/useConfig.ts';
import AppNameProvider from '../../components/context/appName.tsx';
import { AppNames } from '../../components/config/configMapping.ts';
import Banner from '../../components/banner/banner.tsx';

const About = React.lazy(() => import('../../components/about/index.tsx'));

interface Props {
    appName: AppNames;
}

function Layout() {
  return (
    <div>
      <TopBar />
      <Header />
      <Banner />

      <Outlet />

      <Footer />
    </div>
  );
}

export default function WebProgrammingApp({ appName }: Props) {
  const { labList } = useConfig(appName);

  return (
    <AppNameProvider appName={appName}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<HomePage />}
          />
          <Route
            path="lectures"
            element={(
              <React.Suspense fallback={<>...</>}>
                <About name="lectures" />
              </React.Suspense>
          )}
          />
          {labList.map((lab) => (
            <Route key={lab.id} path={`labs/${lab.id}`} element={<Lab lab={lab} />} />
          ))}
          <Route
            path="self-work"
            element={(
              <React.Suspense fallback={<>...</>}>
                <About name="self-work" />
              </React.Suspense>
              )}
          />
          <Route
            path="grades"
            element={(
              <React.Suspense fallback={<>...</>}>
                <About name="grades" />
              </React.Suspense>
              )}
          />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </AppNameProvider>
  );
}

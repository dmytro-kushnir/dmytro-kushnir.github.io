import './App.css';

import {
  Routes, Route, Outlet,
} from 'react-router-dom';

import * as React from 'react';

import TopBar from '../../components/topbar/topbar.tsx';
import Header from '../../components/header/header.tsx';
import Banner from '../../components/banner/banner.tsx';
import Footer from '../../components/footer/footer.tsx';
import Lab from '../../components/lab/lab.tsx';

import NoMatch from '../../components/no-match/index.tsx';
import useConfig from '../../components/config/useConfig.ts';
import AppNameProvider from '../../components/context/appName.tsx';
import { AppNames } from '../../components/config/configMapping.ts';

const About = React.lazy(() => import('../../components/about/index.tsx'));

interface Props {
    appName: AppNames;
}

function Layout() {
  return (
    <div>
      <TopBar />
      <Header />
      <Banner title="Веб Програмування" subtitle="Навчальна дисципліна" />
      <Footer />
      <Outlet />
    </div>
  );
}

export default function WebProgrammingApp({ appName }: Props) {
  const config = useConfig(appName);
  const { labList } = config;

  return (
    <AppNameProvider appName={appName}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="about"
            element={(
              <React.Suspense fallback={<>...</>}>
                <About name="about" />
              </React.Suspense>
          )}
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

import './App.css';

import {
  Routes, Route, Outlet,
} from 'react-router-dom';

import * as React from 'react';

import TopBar from '../../components/topbar/topbar.tsx';
import Header from '../../components/header/header.tsx';
import Lab from '../../components/lab/lab.tsx';

import NoMatch from '../../components/no-match/index.tsx';
import { AppNames } from '../../components/config/configMapping.ts';
import useConfig from '../../components/config/useConfig.ts';

const About = React.lazy(() => import('../../components/about/index.tsx'));

interface Props {
  appName: AppNames;
}

function Layout({ appName }: Props) {
  return (
    <div>
      <TopBar appName={appName} />
      <Header appName={appName} />

      <Outlet />
    </div>
  );
}

export default function WebProgrammingApp({ appName }: Props) {
  const config = useConfig(appName);
  const { labList } = config;

  return (
    <Routes>
      <Route path="/" element={<Layout appName={appName} />}>
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
  );
}

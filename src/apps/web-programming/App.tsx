import './App.css';

import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom';

import * as React from 'react';

import TopBar from '../../components/topbar/topbar.tsx';
import Header from '../../components/header/header.tsx';

import NoMatch from '../../components/no-match/index.tsx';

const About = React.lazy(() => import('../../components/about/index.tsx'));

function Layout() {
  return (
    <div>
      <TopBar />
      <Header />
      <h2>Web programming</h2>
      <nav>
        <ul>
          <li>
            <Link to="/web-programming/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default function WebProgrammingApp() {
  // These routes are defined when this component is loaded on demand via
  // dynamic import() on the home page!
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="about"
          element={(
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          )}
        />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

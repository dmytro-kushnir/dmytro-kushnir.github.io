import './App.css';

import {
  Routes, Route, Outlet, Link,
} from 'react-router-dom';
import * as React from 'react';

import Sidebar from '../../components/sidebar/index.tsx';

const About = React.lazy(() => import('../../components/about/index.tsx'));
const NoMatch = React.lazy(() => import('../../components/no-match/index.tsx'));
function Layout() {
  return (
    <div>
      <h2>Web programming</h2>
      <nav>
        <ul>
          <li>
            <Link to="/web-programming/about">About</Link>
          </li>
        </ul>
      </nav>
      <Sidebar />

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
        <Route path="about" element={(<About />)} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

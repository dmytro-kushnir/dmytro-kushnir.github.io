import * as React from 'react';
import {
  Routes, Route, Outlet, Link, useLocation, HashRouter,
} from 'react-router-dom';

import WebProgrammingApp from '../web-programming/App.tsx';
import AppConfig from '../../components/config/index.tsx';
import useConfig from '../../components/config/useConfig.ts';
import { ConfigMapping } from '../../components/config/config.ts';
import AppContext from '../../components/context/index.tsx';

import './App.css';

const About = React.lazy(() => import('../../components/about/index.tsx'));
const NoMatch = React.lazy(() => import('../../components/no-match/index.tsx'));
const Dashboard = React.lazy(() => import('../web-programming/App.tsx'));

interface AppProps {
    config: ConfigMapping;
}

const contextProviders = [
  [AppConfig, { useConfig }],
];

function Layout() {
  const location = useLocation();
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {location.pathname.startsWith('/web-programming') ? (
              <Link to="/">Back to Home</Link>
            ) : (
              <Link to="/web-programming">Web Programming</Link>
            )}
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default function App({ config }: AppProps) {
  return (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
    <AppContext contextProviders={contextProviders} config={config}>
      <h1>Lazy Loading Example</h1>
      <p>
        This example demonstrates how to lazily load both route elements and
      </p>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="about"
              element={(
                <React.Suspense fallback={<>...</>}>
                  <About />
                </React.Suspense>
                )}
            />
            <Route
              path="dashboard/*"
              element={(
                <React.Suspense fallback={<>...</>}>
                  <Dashboard />
                </React.Suspense>
                )}
            />
            <Route path="/web-programming/*" element={<WebProgrammingApp />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppContext>
  );
}

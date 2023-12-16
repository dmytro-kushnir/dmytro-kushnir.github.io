import * as React from 'react';

import {
  Routes, Route, Outlet, Link, useLocation, HashRouter,
} from 'react-router-dom';

import WebProgrammingApp from '../web-programming/App.tsx';
import ConfigProvider from '../../components/config/index.tsx';
import { ConfigMapping } from '../../components/config/config.ts';

import './App.scss';
import NoMatch from '../../components/no-match/index.tsx';

const About = React.lazy(() => import('../../components/about/index.tsx'));

interface AppProps {
    config: ConfigMapping;
}

function Layout() {
  const location = useLocation();
  return (
    <div>
      <h1>Home page</h1>
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
      <p>
        This example demonstrates how to lazily load both route elements and
      </p>
    </div>
  );
}

export default function App({ config }: AppProps) { //   HashRouter could be reimplemented with standard BrowserRouter https://github.com/rafgraph/spa-github-pages to properly reload each sub-page
  return (
    <ConfigProvider config={config}>
      <HashRouter>
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
          </Route>
          <Route path="/web-programming/*" element={<WebProgrammingApp />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  );
}

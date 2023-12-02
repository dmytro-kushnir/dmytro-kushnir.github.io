import * as React from 'react';

import {
  Routes, Route, Outlet, Link, useLocation, HashRouter,
} from 'react-router-dom';

import WebProgrammingApp from '../web-programming/App.tsx';
import ConfigProvider from '../../components/config/index.tsx';
import { ConfigMapping } from '../../components/config/config.ts';

import './App.css';

const About = React.lazy(() => import('../../components/about/index.tsx'));
const NoMatch = React.lazy(() => import('../../components/no-match/index.tsx'));

interface AppProps {
    config: ConfigMapping;
}

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

export default function App({ config }: AppProps) { //   HashRouter could be reimplemented with standard BrowserRouter https://github.com/rafgraph/spa-github-pages to properly reload each sub-page
  return (
    <ConfigProvider config={config}>
      <h1>Home page</h1>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="/web-programming/*" element={<WebProgrammingApp />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </HashRouter>

      <p>
        This example demonstrates how to lazily load both route elements and
      </p>
    </ConfigProvider>
  );
}

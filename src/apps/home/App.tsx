import * as React from 'react';
import {
  Routes, Route, Outlet, Link, useLocation,
} from 'react-router-dom';

import WebProgrammingApp from '../web-programming/App.tsx';
import './App.css';

const About = React.lazy(() => import('../../components/about/index.tsx'));
const NoMatch = React.lazy(() => import('../../components/no-match/index.tsx'));
const Dashboard = React.lazy(() => import('../web-programming/App.tsx'));

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

export default function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      <p>
        This example demonstrates how to lazily load both route elements and
        even entire portions of your route hierarchy on demand. To get the full
        effect of this demo, be sure to open your Network tab and watch the new
        bundles load dynamically as you navigate around.
      </p>

      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        The "About" page is not loaded until you click on the link. When you do,
        a
        {' '}
        <code>&lt;React.Suspense fallback&gt;</code>
        {' '}
        renders while the code is
        loaded via a dynamic
        <code>import()</code>
        {' '}
        statement. Once the code
        loads, the fallback is replaced by the actual code for that page.
      </p>

      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        The "Dashboard" page does the same thing, but takes it even one step
        further by
        {' '}
        <em>dynamically defining additional routes</em>
        {' '}
        once the page
        loads! Since React Router lets you declare your routes as
        <code>&lt;Route&gt;</code>
        {' '}
        elements, you can easily define more routes
        by placing an additional
        <code>&lt;Routes&gt;</code>
        {' '}
        element anywhere
        further down the element tree. Just be sure the parent route ends with a
        {' '}
        <code>*</code>
        {' '}
        like
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <code>&lt;Route path="dashboard/*"&gt;</code>
        {' '}
        in
        this case.
      </p>

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
    </div>
  );
}

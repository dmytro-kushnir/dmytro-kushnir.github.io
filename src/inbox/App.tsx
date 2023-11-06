import {
  Routes, Route, Link, Outlet,
} from 'react-router-dom';
import './index.css';

export default function InboxApp() {
  return (
    <Routes>
      {/* Routes in this app don't need to worry about which URL prefix they are
          mounted at. They can just assume they are mounted at /. Then, if they
          are moved under a different basename later on, all routes and links will
          continue to work. */}
      {/* eslint-disable-next-line no-use-before-define */}
      <Route path="/" element={<Layout />}>
        {/* eslint-disable-next-line no-use-before-define */}
        <Route index element={<Inbox />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div>
      <h1>Welcome to the Inbox app!</h1>
      <nav>
        <ul>
          <li>
            {/* Using a normal link here will cause the browser to reload the
                document when following this link, which is exactly what we want
                when navigating to the "Home" app so we execute its entry
                point (see home/main.jsx). */}
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/">Inbox</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Inbox() {
  return (
    <div>
      <div style={{ margin: '0 auto', maxWidth: 800 }} />
    </div>
  );
}

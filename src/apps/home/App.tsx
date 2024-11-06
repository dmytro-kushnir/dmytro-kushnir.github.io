import {
  Routes, Route, HashRouter, Navigate,
} from 'react-router-dom';

import WebProgrammingApp from '../web-programming/App.tsx';
import ComputerArchitectureApp from '../computer-architecture/App.tsx';
import ConfigProvider from '../../components/config/index.tsx';
import { ConfigMapping, AppNames } from '../../components/config/configMapping.ts';

import './App.scss';
import NoMatch from '../../components/no-match/index.tsx';
import Error from '../../components/error/index.tsx';

interface AppProps {
    config: ConfigMapping;
}

// function Layout() {
//   const location = useLocation();
//   return (
//     <div>
//       <h1>Home page</h1>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             {location.pathname.startsWith('/web-programming') ? (
//               <Link to="/">Back to Home</Link>
//             ) : (
//               <Link to="/web-programming/">Web Programming</Link>
//             )}
//           </li>
//         </ul>
//       </nav>
//
//       <hr />
//
//       <Outlet />
//       <p>
//         This example demonstrates how to lazily load both route elements and
//       </p>
//     </div>
//   );
// }

export default function App({ config }: AppProps) { //   HashRouter could be reimplemented with standard BrowserRouter https://github.com/rafgraph/spa-github-pages to properly reload each sub-page
  return (
    <ConfigProvider config={config}>
      <HashRouter>
        <Routes>
          {/*  todo to implement home page, for now just to redirect ot the first app */}
          <Route path="/" element={<Navigate to={`${config.apps.wp.appPath as AppNames}/`} />} />
          <Route path={`${config.apps.wp.appPath as AppNames}/*`} element={<WebProgrammingApp appName={config.apps.wp.name as AppNames} />} />
          <Route path={`${config.apps.compArch.appPath as AppNames}/*`} element={<ComputerArchitectureApp appName={config.apps.compArch.name as AppNames} />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </HashRouter>
    </ConfigProvider>
  );
}

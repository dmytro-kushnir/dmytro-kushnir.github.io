import {
  Routes, Route, BrowserRouter, Navigate,
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

export default function App({ config }: AppProps) {
  return (
    <ConfigProvider config={config}>
      <BrowserRouter>
        <Routes>
          {/*  todo to implement home page, for now just to redirect ot the first app */}
          <Route path="/" element={<Navigate to={`${config.apps.compArch.appPath as AppNames}/`} />} />
          <Route path={`${config.apps.wp.appPath as AppNames}/*`} element={<WebProgrammingApp appName={config.apps.wp.name as AppNames} />} />
          <Route path={`${config.apps.compArch.appPath as AppNames}/*`} element={<ComputerArchitectureApp appName={config.apps.compArch.name as AppNames} />} />
          <Route path="error" element={<Error />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

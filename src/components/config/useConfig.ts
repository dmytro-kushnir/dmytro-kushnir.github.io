import { useContext } from 'react';
import { AppConfig } from './index.tsx';
import { ConfigMapping } from './configMapping.ts';

function useConfig(appName: keyof ConfigMapping['apps']): ConfigMapping['apps'][keyof ConfigMapping['apps']] {
  const appConfig = useContext(AppConfig);

  if (!appConfig) {
    throw new Error('AppConfig context is not provided');
  }

  if (!appConfig.apps[appName]) {
    throw new Error(`Configuration for app '${appName}' not found`);
  }

  return appConfig.apps[appName];
}

export default useConfig;

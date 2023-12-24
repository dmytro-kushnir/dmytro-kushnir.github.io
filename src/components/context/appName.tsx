import { createContext, ReactNode } from 'react';
import { AppNames, defaultApp } from '../config/configMapping.ts';

type AppNameContextProps = {
  appName: AppNames;
  children: ReactNode;
};

export const AppNameContext = createContext<AppNames>(defaultApp);

function AppNameProvider({ children, appName }: AppNameContextProps) {
  return <AppNameContext.Provider value={appName}>{children}</AppNameContext.Provider>;
}

export default AppNameProvider;

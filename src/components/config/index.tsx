import {
  createContext, useEffect, useState, ReactNode,
} from 'react';

import { ConfigMapping } from './configMapping.ts';

interface ConfigProps {
  config: ConfigMapping;
  children: ReactNode;
}

function deepFreeze<T>(object: T): Readonly<T> {
  const propNames = Object.getOwnPropertyNames(object);

  // eslint-disable-next-line no-restricted-syntax
  for (const name of propNames) {
    const value = (object as never)[name];

    if (value && typeof value === 'object' && !Array.isArray(value)) {
      deepFreeze(value);
    }
  }

  return Object.freeze(object);
}

export const AppConfig = createContext<ConfigMapping | null>(null);

function ConfigProvider({ config, children }: ConfigProps) {
  const [appConfig, setConfig] = useState(deepFreeze({ ...config }));

  useEffect(() => {
    (async () => {
      setConfig(deepFreeze({ ...config }));
    })();
  }, [config]);
  return (
    <AppConfig.Provider value={appConfig}>{children}</AppConfig.Provider>
  );
}

ConfigProvider.displayName = 'AppConfig';
export default ConfigProvider;

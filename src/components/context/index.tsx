import React, {
  useContext, createContext, useMemo, FC, ReactNode,
} from 'react';

import { ConfigMapping } from '../config/config.ts';

interface CombinedContext {}

const combinedContext: CombinedContext = {};

/**
 * @desc [createContext] method for creating context.
 */
const context = createContext<CombinedContext>({ ...combinedContext });

function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

interface AppProps {
  children: ReactNode;
  config: ConfigMapping;
  contextProviders?: [React.ComponentType<unknown>, CombinedContext][];
}

const AppWrapper: FC<AppProps> = (
  { children, config, contextProviders = [] },
) => contextProviders
  .reverse()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  .reduce((child, [Component]) => <Component config={config}>{child}</Component>, children);

/**
 * @desc The AppContext component returns a component that shares all app contexts.
 * @param children {JSX.Element} - contain any children
 * @param config {Object}
 * @param contextProviders {Array} - Array that contains app contexts.
 * @returns {JSX.Element}
 */
const AppContext: FC<AppProps> = function AppContext(
  { children = null, config, contextProviders = [] },
) {
  const contextWrappers = useMemo(() => contextProviders.reverse().reduce((contxt, [hook]) => {
    Object.entries(hook).forEach(([hookName, hookFunction]) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line no-param-reassign
      contxt[hookName] = hookFunction;
    });
    return contxt;
  }, {} as CombinedContext), [contextProviders]);

  return (
    <context.Provider value={contextWrappers}>
      <AppWrapper contextProviders={contextProviders} config={config}>
        {children}
      </AppWrapper>
    </context.Provider>
  );
};

AppContext.defaultProps = {
  contextProviders: [] as [React.ComponentType<unknown>, CombinedContext][],
};

/**
 * @desc [useAppContext] custom hook for using appWrapper component.
 */
export const useAppContext = <T extends keyof CombinedContext>(contextKey: T = '' as T) => {
  const c = useContext(context);
  if (contextKey) {
    const hookName = `use${capitalize(contextKey as string)}`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const hook = c[hookName];
    return (typeof hook === 'function' && hook()) || {};
  }

  return c;
};

export default AppContext;

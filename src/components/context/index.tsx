import React, { useMemo, FC, ReactNode } from 'react';

import { ConfigMapping } from '../config/config.ts';
import context, { CombinedContext } from './context.ts';

interface AppProps {
  children: ReactNode;
  config: ConfigMapping;
  contextProviders?: [React.ComponentType<unknown>, CombinedContext][];
}

const AppWrapper: FC<AppProps> = (
  { children, config, contextProviders = [] },
) => contextProviders
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  .reduceRight((child, [Component]) => <Component config={config}>{child}</Component>, children);

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

export default AppContext;

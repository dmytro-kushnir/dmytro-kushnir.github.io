import { useContext } from 'react';
import context, { CombinedContext } from './context.ts';

function capitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function useAppContext <T extends keyof CombinedContext>(contextKey: T = '' as T) {
  const c = useContext(context);
  if (contextKey) {
    const hookName = `use${capitalize(contextKey as string)}`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const hook = c[hookName];
    return (typeof hook === 'function' && hook()) || {};
  }

  return c;
}

export default useAppContext;

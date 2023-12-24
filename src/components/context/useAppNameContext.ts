import { useContext } from 'react';
import { AppNameContext } from './appName.tsx';

function useAppName() {
  return useContext(AppNameContext);
}

export default useAppName;

import { useContext } from 'react';
import { AppConfig } from './index.tsx';

function useConfig() {
  return useContext(AppConfig);
}

export default useConfig;

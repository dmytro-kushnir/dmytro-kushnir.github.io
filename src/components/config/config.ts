import { ConfigMapping } from './configMapping.ts';
import compArchConfig from './apps/compArch.ts';
import wpConfig from './apps/wp.ts';
import otherAppConfig from './apps/otherApp.ts';

const config: ConfigMapping = {
  apps: {
    compArch: compArchConfig,
    otherApp: otherAppConfig,
    wp: wpConfig,
  },
};

export default config;

import { ConfigMapping } from './configMapping.ts';
import compArchConfig from './apps/compArch.ts';
import wpConfig from './apps/wp.ts';
import otherAppConfig from './apps/otherApp.ts';
import ppidConfig from './apps/ppid.ts';

const config: ConfigMapping = {
  apps: {
    compArch: compArchConfig,
    otherApp: otherAppConfig,
    ppid: ppidConfig,
    wp: wpConfig,
  },
};

export default config;

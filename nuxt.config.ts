import { Configuration } from '@nuxt/types';

import vuetify from './configs/vuetify';
import axios from './configs/axios';
import build from './configs/build';
import css from './configs/css';
import buildModules from './configs/buildModules';
import env from './configs/env';
import head from './configs/head';
import loading from './configs/loading';
import mode from './configs/mode';
import modules from './configs/modules';
import plugins from './configs/plugins';
import typescript from './configs/typescript';

const config: Configuration = {
    vuetify,
    axios,
    build,
    css,
    buildModules,
    env,
    head,
    loading,
    mode,
    modules,
    plugins,
    typescript,
};

export default config;

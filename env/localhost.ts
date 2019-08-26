import { Configuration } from '@nuxt/types';

// APP
export const APP_VERSION: string = process.env.npm_package_version || 'undefined version';
export const APP_ENV = 'localhost';

// WILDBOAR
export const WILDBOAR_BACKEND_URL = 'localhost';

const env: Configuration['env'] = {
    APP_VERSION,
    APP_ENV,
    WILDBOAR_BACKEND_URL,
};

export default env;

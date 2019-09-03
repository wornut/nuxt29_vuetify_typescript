import { Configuration } from '@nuxt/types';

// APP
export const APP_VERSION: string = process.env.npm_package_version || 'undefined version';
export const APP_ENV = 'localhost';

// WILDBOAR
export const APP_API_URL = 'localhost';

const env: Configuration['env'] = {
    APP_VERSION,
    APP_ENV,
    APP_API_URL,
};

export default env;

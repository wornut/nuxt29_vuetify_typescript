import { Configuration } from '@nuxt/types';

export const APP_DESCRIPTION: string = process.env.npm_package_description || 'undefined description';

export const APP_VERSION: string = process.env.npm_package_version || 'undefined version';

const head: Configuration['head'] = {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: APP_DESCRIPTION,
        },
        {
            hid: 'version',
            name: 'version',
            content: APP_VERSION,
        },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
};

export default head;

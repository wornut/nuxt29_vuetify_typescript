import { Configuration } from '@nuxt/types';

const ScssSass = (style: 'scss' | 'sass') => ({
    implementation: require('sass'),
    fiber: require('fibers'),
    indentedSyntax: style === 'sass',
});

const build: Configuration['build'] = {
    loaders: {
        scss: ScssSass('scss'),
        sass: ScssSass('sass'),
    },
    extractCSS: true,
};

export default build;

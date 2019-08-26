// https://typescript.nuxtjs.org/migration.html

type typescriptOptions = {
    typeCheck?: boolean;
    ignoreNotFoundWarnings?: boolean;
};

const typescript: typescriptOptions = {
    typeCheck: true,
    ignoreNotFoundWarnings: true,
};

export default typescript;

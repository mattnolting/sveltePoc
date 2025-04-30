import path from "path";

export const GLOBAL_ALIASES = {
  alias: {

    // Modules
    '$modules': path.resolve('./src/lib/modules'),
    '$components': path.resolve('./src/lib/modules/components'),
    '$hbs': path.resolve('./src/lib/modules/hbs'),
    '$layouts': path.resolve('./src/lib/modules/layouts'),
    '$utils': path.resolve('./src/lib/utils'),
    '$config': path.resolve('./src/config'),
    '$page': path.resolve('./src/lib/modules/page'),

    '$patternfly': path.resolve('./src/patternfly'),
    '$helpers': path.resolve('./src/lib/helpers'),

    // Styles
    '$styles': path.resolve('./src/lib/styles'),

    // Library
    '$types': path.resolve('./src/lib/types'),
    '$stores': path.resolve('./src/lib/stores'),
    '$routes': path.resolve('./src/routes'),
  }
};
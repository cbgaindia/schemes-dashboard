module.exports = {
  poweredByHeader: false,
};

module.exports = {
  async headers() {
    return [
      {
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
        source: '/(.*)',
      },
    ];
  },
};

module.exports = {
  async headers() {
    return [
      {
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
        locale: false,
        source: '/:all*(svg|jpg|png)',
      },
    ];
  },
};

const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};


const withTM = require("next-transpile-modules")(["echarts", "zrender"]);
// const withTM = require('next-transpile-modules')(['d3-fetch']);

module.exports = withTM({
  i18n: {
    locales: ["en", "fr", "nl-NL", "te"],
    defaultLocale: "en",
  },
  publicRuntimeConfig: {
    DMS: "https://openbudgetsindia.org",
    CMS: "https://oddk.home.blog",
  },
});

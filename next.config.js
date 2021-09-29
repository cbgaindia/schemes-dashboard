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

// module.exports = {
//   async redirects() {
//     return [
//       {
//         destination: '/scheme/bbbp?indicator=funds-utilised',
//         permanent: false,
//         source: '/scheme/bbbp/funds-utilised',
//       },
//     ];
//   },
// };

import fs from 'fs';
import path from 'path';

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const staticPages = fs
    .readdirSync('.next/server/pages/scheme')
    .filter((file) => path.extname(file).toLowerCase() === '.json');

  const schemeFiles = ['https://schemes.openbudgetsindia.org'];
  staticPages.forEach((staticPagePath) => {
    const schemeName = staticPagePath.split('.')[0];
    schemeFiles.push(
      `https://schemes.openbudgetsindia.org/scheme/${schemeName}`
    );
    const schemeObj = JSON.parse(
      fs.readFileSync(`.next/server/pages/scheme/${staticPagePath}`, 'utf8')
    );
    const { indicators } = schemeObj.pageProps.scheme.metadata;
    indicators.forEach((indicator) =>
      schemeFiles.push(
        `https://schemes.openbudgetsindia.org/scheme/${schemeName}?indicator=${indicator}`
      )
    );
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${schemeFiles
        .map(
          (url) => `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `
        )
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

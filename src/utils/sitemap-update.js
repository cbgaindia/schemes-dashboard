export const generateSitemap = (schemesData) => {
  const schemesArray = Object.keys(schemesData);
  const xmlString = '<root></root>';
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  const URLSET = xmlDoc.createElement('urlset');
  // var xmlDoc = document.implementation.createDocument(null, 'urlset', null);
  URLSET.setAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  schemesArray.forEach((scheme) => {
    const indicatorArray = Object.keys(schemesData[scheme].data);
    indicatorArray.forEach((indicator) => {
      const schemeSlug = schemesData[scheme].metadata.slug;
      const indicatorSlug = schemesData[scheme].data[indicator].slug;

      const URL = xmlDoc.createElement('url');
      const LOC = xmlDoc.createElement('loc');
      const LMOD = xmlDoc.createElement('lastmod');
      const CFREQ = xmlDoc.createElement('changefreq');
      const PRI = xmlDoc.createElement('priority');

      LOC.textContent = `http://schemes.openbudgetsindia.org/scheme/${schemeSlug}/${indicatorSlug}`;
      LMOD.textContent = '2021-03-09';
      CFREQ.textContent = 'monthly';
      PRI.textContent = '1';

      URL.appendChild(LOC);
      URL.appendChild(LMOD);
      URL.appendChild(CFREQ);
      URL.appendChild(PRI);

      URLSET.appendChild(URL);
    });
  });
  console.log('teting xml doc', URLSET);

  function download(filename, XML) {
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(XML)}`
    );
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  // Start file download.
  const xmlText = new XMLSerializer().serializeToString(URLSET);
  download('sitemap.xml', xmlText);
};

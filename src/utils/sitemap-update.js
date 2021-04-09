export const generateSitemap = (schemesData) => {
    const schemesArray = Object.keys(schemesData)
    var xmlString = '<root></root>';
    var parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const URLSET = xmlDoc.createElement('urlset');
    // var xmlDoc = document.implementation.createDocument(null, 'urlset', null);
    URLSET.setAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')

    schemesArray.forEach(scheme => {
        let indicatorArray = Object.keys(schemesData[scheme].data)
        indicatorArray.forEach(indicator => {
            let schemeSlug = schemesData[scheme].metadata.slug
            let indicatorSlug = schemesData[scheme].data[indicator].slug

            let URL = xmlDoc.createElement('url');
            let LOC = xmlDoc.createElement('loc');
            let LMOD = xmlDoc.createElement('lastmod');
            let CFREQ = xmlDoc.createElement('changefreq');
            let PRI = xmlDoc.createElement('priority');
    
            LOC.textContent = `http://schemes.openbudgetsindia.org/scheme/${schemeSlug}/${indicatorSlug}`
            LMOD.textContent = '2021-03-09'
            CFREQ.textContent = 'monthly'
            PRI.textContent = '1'

            URL.appendChild(LOC)
            URL.appendChild(LMOD)
            URL.appendChild(CFREQ)
            URL.appendChild(PRI)

            URLSET.appendChild(URL)
        })
    })
    console.log('teting xml doc', URLSET)

  // Start file download.
  var xmlText = new XMLSerializer().serializeToString(URLSET);
  download("sitemap.xml", xmlText);
}

function download(filename, XML) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(XML));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
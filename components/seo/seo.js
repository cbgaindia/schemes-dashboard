import Head from 'next/head';
// import { useContext } from 'react';
// import { GlobalContext } from 'pages/_app';
// import { getStrapiMedia } from 'lib/media';
// import { useRouter } from 'next/router';

const Seo = ({ seo }) => {
  const title =
    `${seo.title} - Scheme Dashboard | Open Budgets India` ||
    'Scheme Dashboard | Open Budgets India';
  const metaDescription =
    'Find downloadable data, visualisations and other useful information related to a number of schemes run by the Union and State Governments.';

  return (
    <Head>
      {title && (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} />
          <meta name="twitter:title" content={title} />
        </>
      )}
      {metaDescription && (
        <>
          <meta name="description" content={metaDescription} />
          <meta property="og:description" content={metaDescription} />
          <meta name="twitter:description" content={metaDescription} />
        </>
      )}
      {/* {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )} */}
      {/* {fullSeo.article && <meta property="og:type" content="article" />} */}
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;

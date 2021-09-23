import Head from 'next/head';

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
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default Seo;

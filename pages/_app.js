import 'styles/app.css';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import Layout from 'components/layout/layout';
import NextNprogress from 'nextjs-progressbar';
import Router from 'next/router';
import * as ga from 'utils/ga';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const handleRouteChange = (url) => {
      if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) ga.pageview(url);
      if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_NEW) ga.pageviewNew(url);
      // change focus to top
      if (!url.includes('indicator'))
        document.querySelector('#top-of-site-pixel-anchor').focus();
    };

    Router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="alternate icon" href="/assets/favicon/favicon.ico" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/favicon/favicon.svg"
        />
        <link
          rel="mask-icon"
          href="/assets/favicon/safari-pinned-tab.svg"
          color="#ff8a01"
        />
      </Head>

      <Layout>
        <NextNprogress
          color="#4b4697"
          startPosition={0.3}
          stopDelayMs={100}
          height={3}
          options={{ easing: 'ease', speed: 300, showSpinner: false }}
        />
        <Component {...pageProps} />
      </Layout>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WNX72G1ZCS"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-WNX72G1ZCS');
        `}
      </Script>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  return { ...appProps };
};

export default MyApp;

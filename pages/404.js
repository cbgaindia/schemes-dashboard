import Seo from 'components/seo/seo';

export default function Custom404() {
  const seo = {
    title: 'Page not found',
  };
  return (
    <>
      <Seo seo={seo} />
      <main id="maincontent" className="page-404">
        <h2>404 - Page Not Found</h2>
      </main>
    </>
  );
}

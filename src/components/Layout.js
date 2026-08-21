import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Production domain — used to build absolute canonical / OG URLs.
const SITE_URL = "https://www.purplestudiohub.com";

/**
 * Standard page shell: <Head> metadata (title, description, canonical,
 * Open Graph + Twitter cards, favicons), shared Navbar, page content, Footer.
 *
 * @param {string} path   Route path for canonical/og:url, e.g. "/about".
 * @param {string} image  Absolute-or-root path to a social share image.
 */
export default function Layout({
  title,
  description,
  path = "/",
  image = "/psh-logo.png",
  children,
}) {
  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={url} />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/psh-logo.png" />
        <link rel="apple-touch-icon" href="/psh-logo.png" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Purple Studio Hub" />
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        {description && (
          <meta name="twitter:description" content={description} />
        )}
        <meta name="twitter:image" content={ogImage} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

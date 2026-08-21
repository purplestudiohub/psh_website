import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Standard page shell: <Head> metadata, shared Navbar, page content, Footer.
 */
export default function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

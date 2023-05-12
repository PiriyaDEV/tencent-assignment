import "@/styles/globals.css";
import "@/styles/hamburger.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tencent Assignment | Piriya Chaigul</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

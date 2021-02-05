import '../styles/globals.css';
import 'normalize.css/normalize.css';
import Head from 'next/head';
import Header from '../components/Header';
import Backdrop from '../components/Backdrop';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Backdrop />
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;

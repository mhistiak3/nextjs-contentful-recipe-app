import Head from 'next/head';
import Footer from '../components/Footer';
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>iA Recipe</title>
      </Head>
      <Component {...pageProps} />
      <Footer/>
    </Layout>
  );
}

export default MyApp

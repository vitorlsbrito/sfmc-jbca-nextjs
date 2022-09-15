import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>SalesForce - Journey Builder Custom Activity - Next.JS</title>
      </Head>

      <h1>Teste Next.js</h1>

      <Script src='postmonger.js' />
      <Script src='customActivity.js' />
    </>
  )
}

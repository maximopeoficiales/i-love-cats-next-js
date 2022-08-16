import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return <>
    <Head>
      <title>I Love Cats</title>
      <meta name="description" content="The best cat app in the world" />
      <link rel="icon" href="/cat.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp

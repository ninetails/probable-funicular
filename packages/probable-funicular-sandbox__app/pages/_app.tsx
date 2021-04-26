import Head from 'next/head'
import type { AppProps } from 'next/app'
import 'minireset.css/minireset.min.css'

export default function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

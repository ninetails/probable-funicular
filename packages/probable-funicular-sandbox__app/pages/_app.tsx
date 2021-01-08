import Head from 'next/head'
import 'minireset.css/minireset.min.css'

interface MyAppProps {
  Component: React.ComponentType
  pageProps: any
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
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

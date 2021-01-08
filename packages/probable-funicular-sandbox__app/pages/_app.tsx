import '../styles/globals.css'

interface MyAppProps {
  Component: React.ComponentType
  pageProps: any
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />
}

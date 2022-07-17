import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script src="https://kit.fontawesome.com/f826063498.js" crossOrigin="anonymous"></Script>
      <Layout>
        <Component {...pageProps} />  
      </Layout>
    </div>
  )
}

export default MyApp

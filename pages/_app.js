import '../styles/globals.css'
import {Analytics} from "@vercel/analytics/react";
import Head from "next/head";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";

function MyApp({Component, pageProps}) {
  return (
    <div>
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YRYEFWNE43" strategy="beforeInteractive"/>
      </Head>
      <Component {...pageProps} />
      <Analytics/>
      <GoogleAnalytics gaId="G-YRYEFWNE43"/>
    </div>
  )
}

export default MyApp

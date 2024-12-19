import '../styles/globals.css'
import {Analytics} from "@vercel/analytics/react";
import Head from "next/head";

function MyApp({Component, pageProps}) {
  return (
    <div>
      <Head>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YRYEFWNE43"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YRYEFWNE43');
        </script>
      </Head>
      <Component {...pageProps} />
      <Analytics/>
    </div>
  )
}

export default MyApp

import '../styles/globals.css'
import {Analytics} from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google'

function MyApp({Component, pageProps}) {
  return (
    <div>
      <Component {...pageProps} />
      <Analytics/>
      <GoogleAnalytics gaId="G-YRYEFWNE43"/>
    </div>
  )
}

export default MyApp

import { AppProps } from 'next/app'
import '../styles/index.css'
import { RatingsProvider } from '../lib/providers/rating.context'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RatingsProvider>
      <Component {...pageProps} />
    </RatingsProvider>
  )
}

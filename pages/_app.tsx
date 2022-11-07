import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
     <Component {...pageProps} />
    </ScrollObserver>
  )
}

// @ts-nocheck
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ScrollObserver from '../utils/scroll-observer'
import SizeObserver from '../utils/size-observer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SizeObserver>
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  )
}

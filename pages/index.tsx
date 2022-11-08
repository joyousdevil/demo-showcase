import Head from 'next/head'
import Masthead from '../components/Masthead'
import About from '../components/About'
import Skills from '../components/Skills'
import Works from '../components/Works'
import TrustedBy from '../components/TrustedBy'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Landing Page</title>
        <meta name="Landing Page" content="Website introduction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Masthead />
      <About />
      <Skills />
      <Works />
      <TrustedBy />
    </div>
  )
}

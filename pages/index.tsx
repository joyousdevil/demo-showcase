import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Masthead from '../components/Masthead'
import About from '../components/About'
import Staff from '../components/Staff'
import Projects from '../components/Projects'


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
      <Staff />
      <Projects />
    </div>
  )
}

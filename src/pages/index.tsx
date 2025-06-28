import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Demo from '../components/Demo'
import Installation from '../components/Installation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Claude-Collab - AI Collaboration Framework with Anti-Echo-Chamber Protection</title>
        <meta name="description" content="Next-generation AI collaboration framework that prevents groupthink and ensures diverse perspectives in multi-agent systems" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Hero />
        <Features />
        <Demo />
        <Installation />
      </main>
    </>
  )
}
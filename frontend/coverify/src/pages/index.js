import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import React from "react";
import dynamic from 'next/dynamic'
import sketch1 from 'components/sketches'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="bg-red-400">
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
          {/* <Sketch setup={setup} draw={draw} />; */}
        </div>
      </main>
    </>
  )
}

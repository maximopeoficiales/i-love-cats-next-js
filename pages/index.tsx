import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/cat.ico" />
      </Head>
      <h1>Aprendiendo Next js desde cero</h1>

    </div>
  )
}

export default Home

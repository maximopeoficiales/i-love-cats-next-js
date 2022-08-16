import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const route = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/cat.ico" />
      </Head>
      <h1>Aprendiendo Next js desde cero</h1>
      <Link href="/tinder">ir tinder</Link>

      <button
        onClick={() => {
          route.push("/tinder")
        }}
      >Navegar de forma programatica</button>
    </div>
  )
}

export default Home

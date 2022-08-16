import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import { Cat } from '@/domain/Cat'
import { catApiServiceInstance } from '@/services/catApi.service'

interface MyProps {
  cats: Cat[];
}
const Home = ({ cats }: MyProps) => {
  // catApiRepository.getCats().then(console.log).catch(console.error);

  const route = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>My Cats</title>
        <link rel="icon" href="/cat.ico" />
      </Head>

      <h1>List Cute Cats</h1>
      <Link href="/tinder">ir tinder</Link>
      <button
        onClick={() => {
          route.push("/tinder")
        }}
      >Navegar de forma programatica</button>

      {cats.length === 0 && <p>No hay gatos que mostrar</p>}
      {cats.length > 0 && cats.map((c, index) => (
        <div key={index}>
          <p>ID: {c.id}</p>
          <Image src={c.url} width={600} height={400} alt="image cat" />
        </div>
      ))}

    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cats = await catApiServiceInstance.getCats();
  return {
    props: { cats }
  }
}
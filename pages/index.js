import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Building pages with next.js with api query
        </h1>

        <a className={styles.description} href="/featured">
          Featured films (themoviedb)
        </a>

      </main>
    </div>
  )
}

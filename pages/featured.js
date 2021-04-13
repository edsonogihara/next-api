import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function destaque({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Featured</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className={styles.main}>
        <h1 className={styles.title}>
          Featured films (themoviedb)
        </h1>

        <a className={styles.description} href="/">
          Home Page
        </a>

        <ul>

          {list.map(item => (

            <li>
              <a href={`/movie/${item.id}`}>
                <>
                  <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br />
                  {item.title}
                </>
              </a>
            </li>

          ))}

        </ul>

      </main>
    </div>
  )
}


export async function getServerSideProps() {
  const res = await fetch('https://next-api-nine.vercel.app/api/featutmdb');
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  };
}
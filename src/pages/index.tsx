import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CardBoxOldDesign from './Component/CardBoxOldDesign'
import Creator from './Component/Creator'

const inter = Inter({ subsets: ['latin'] })

type Pokemon = {
  name: string,
  url: string
}


export default function Home({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <>

      <main className={styles.main}>
        
        <Creator name='Johanna Montaño' />

        <div className={`${styles.center} ${inter.className}`}>
          <h2 className={`${styles.textWhite} ${styles.leading6} ${styles.fontExtrabold}`} >List of Pokemons</h2>

        </div>

        <div className={styles.grid}>


          {pokemons.length === 0 && <p>No hay articulos ...</p>}
          {pokemons.length > 0 && pokemons.map((pokemon, index) => (
            <div key={index}>
              <CardBoxOldDesign name={pokemon.name} url={pokemon.url} />
            </div>
          ))}


        </div>



      </main>
    </>
  )
}


export async function getServerSideProps() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await response.json()
  var pokemons = data.results;
  return {
    props: {
      pokemons
    }
  }
}
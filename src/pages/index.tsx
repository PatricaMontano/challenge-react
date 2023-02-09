import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CardBoxOldDesign from './Component/CardBoxEpisodes'
import CardBox from './Component/CardBox'
import Creator from './Component/Creator'

const inter = Inter({ subsets: ['latin'] })

type DataRick = {
  id:number,
  name: string,
  status:string,
  species: string,
  gender:string,
  origin:Origin
  location:Location,
  image: string,
  episode:string[],
  url: string,
}
type Origin = {
  name: string,
  url: string
}

type Location = {
  name: string
  url: string
}


export default function Home({ dataRick }: { dataRick: DataRick[] }) {
  return (
    <>
        
        <Creator/>

        <div className={`${styles.title} ${inter.className}`}>
          <h2 className={`${styles.text}`}>Characters {process.env.NEXT_PUBLIC_TITLE_PAGE}</h2>
        </div>


        <div className={styles.container}>
          {dataRick.length === 0 && <p>No hay personajes ...</p>}
          {dataRick.length > 0 && dataRick.map((character, index) => (
            <div key={index}>
              <CardBox dataRick={character}/>
            </div>
          ))}
        </div>
    </>
  )
}


export async function getServerSideProps() {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  const data = await response.json()
  var dataRick = data.results;
  return {
    props: {
      dataRick
    }
  }
}
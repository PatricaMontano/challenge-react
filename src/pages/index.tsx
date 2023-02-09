import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import CardBoxOldDesign from './Component/CardBoxEpisodes'
import CardBox from './Component/CardBox'
import Creator from './Component/Creator'
import Router from 'next/router';
import Loader from './Component/Loader'
import React, { useState } from 'react'



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

  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    console.log("Router is changing....");
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    console.log("Router is complete....");
    setLoading(false);
  });
  return (
    <>
        
        <Creator/>

        <div className={`${styles.title} ${inter.className}`}>
          <h2 >Characters {process.env.NEXT_PUBLIC_TITLE_PAGE}</h2>
        </div>

        {loading && 
        <div className={styles.container}>
          <div >
            <Loader/>
          </div>
          
        </div>
        }

        {!loading && 
        <div className={styles.container}>
          {dataRick.length === 0 && <p>No hay personajes ...</p>}
          {dataRick.length > 0 && dataRick.map((character, index) => (
            <div key={index}>
              <CardBox dataRick={character}/>
            </div>
          ))}
        </div>
        }
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
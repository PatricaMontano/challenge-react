import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Creator from "../Component/Creator"
import CardBoxEpisodes from "../Component/CardBoxEpisodes"
import { useRouter } from 'next/router'
import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ['latin'] })

type DataRick = {
    id: number,
    name: string,
    status: string,
    species: string,
    gender: string,
    origin: Origin
    location: Location,
    image: string,
    episode: string[],
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




export default function Detail({ episodes }: { episodes: Episode[] }) {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>

            <Creator />

            <div className={`${styles.title} ${inter.className}`}>
                <h2 className={`${styles.text}`}>List Episodes</h2>
            </div>


            <div className={styles.container}>
                {episodes.length === 0 && <p>No hay personajes ...</p>}
                {episodes.length > 0 && episodes.map((episode, index) => (
                    <div key={index}>
                        <CardBoxEpisodes episodes={episode} />
                    </div>
                ))}
            </div>


        </>
    )
}

type Context = {
    query: {
        id: number
    }
}

type Episode = {
    id: number,
    name: string,
    air_mode: string,
    episode: string
}

export async function getServerSideProps(context: Context) {
    const id = context.query.id;
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()

    var dataCharacter =  data.results;
    var aux =  dataCharacter[id-1].episode;

    var episodes: Array<Episode> = [];

    for (let episode of aux) {
        let auxResponse = await fetch(episode);
        let auxData = await auxResponse.json()
        episodes.push(auxData);
    }

    return {
        props: {
            episodes
        }
    }
}

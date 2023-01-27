import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Creator from "../Component/Creator"
import DetailComponent from "../Component/DetailComponent"
import { useRouter } from 'next/router'
import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ['latin'] })

type PokemonDetail = {
    abilities: Ability[],
    base_experience: number,
    game_indices: Game_indices[]
}

type Ability = {
    ability: {
        name: string
    }
    is_hidden:boolean
}
type Game_indices = {
    game_index: number,
    version: Version
}
type Version = {
    name: string
}

export default function Detail({ pokemonDetail }: { pokemonDetail: PokemonDetail }) {
    const router = useRouter();
    const { name } = router.query;
    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>
            <main className={styles.main}>
                <Creator name='Johanna Montaño' />
                <div className={`${styles.center} ${inter.className}`}>
                    <h2 className={`${styles.textWhite} ${styles.leading6} ${styles.fontExtrabold}`} >{name}</h2>
                </div>
                <DetailComponent abilityData={pokemonDetail.abilities} base_experience={pokemonDetail.base_experience} game_indices={pokemonDetail.game_indices} />
            </main>
        </>
    )
}

type Context = {
    query: {
        name: string
    }
}

export async function getServerSideProps(context: Context) {
    const name = context.query.name;
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
    const pokemonDetail = await response.json()
    console.log(pokemonDetail.abilities);
    return {
        props: {
            pokemonDetail
        }
    }
}
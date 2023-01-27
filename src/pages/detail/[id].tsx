import Head from "next/head"
import styles from '@/styles/Home.module.css'
import Creator from "../Component/Creator"
import DetailComponent from "../Component/DetailComponent"

type PokemonDetail = {
    abilities: Ability,
    base_experience: number,
    game_indices: Game_indices
}

type Ability =  {
    name: string
}
type Game_indices = {
    game_index: number,
    version: Version
}
type Version = {
    name: string
}

export default function Detail({ pokemonDetail, name }: { pokemonDetail: PokemonDetail; name: string }) {
    return (
        <>
            <Head>
                <title>{name}</title>
            </Head>

            <main className={styles.main}>
            <Creator name='Johanna Montaño' />
            <DetailComponent ability={pokemonDetail.abilities} base_experience={pokemonDetail.base_experience} game_indices={pokemonDetail.game_indices}/>
            </main>


        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const pokemonDetail = await response.json()
    return {
      props: {
        pokemonDetail
      }
    }
  }
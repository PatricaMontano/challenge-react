import styles from '@/styles/Detail.module.css'
import Image from 'next/image'

type AbilityArray = {
    ability: Ability,
    is_hidden: boolean
}

type Ability = {
    name: string
}

type Game_indices = {
    game_index: number,
    version: Version
}
type Version = {
    name: string
}
export default function DetailComponent({ abilityData, base_experience, game_indices }: { abilityData: AbilityArray[], base_experience: number, game_indices: Game_indices[] }) {


    return (
        <>

            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                    </div>
                    <div className={styles.contentBx}>
                        <h2>Abilities</h2>
                        {abilityData.length === 0 && <p>No hay articulos ...</p>}
                        {abilityData.length > 0 && abilityData.map((a, index) => (
                            <div className={styles.size}>
                                <h3>{a.ability.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                    </div>
                    <div className={styles.contentBx}>

                        <h2>Estadisticas</h2>
                        {game_indices.length === 0 && <p>No hay articulos ...</p>}
                        {game_indices.length > 0 && game_indices.map((g, index) => (

                            <>
                                <div className={styles.size}>
                                    <h3>{g.version.name}</h3>
                                    <span>{g.game_index}</span>
                                </div>
                            </>

                        ))}
                    </div>

                </div>
            </div>


        </>
    )
}
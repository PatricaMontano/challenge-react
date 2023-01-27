
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
export default function DetailComponent({ability,base_experience,game_indices}:{ ability: Ability,base_experience:number,game_indices:Game_indices}) {
    return (
        <>
        </>
    )
}
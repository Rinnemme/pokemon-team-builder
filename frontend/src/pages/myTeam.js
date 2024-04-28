import { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import PokemonCard from '../components/pokemoncard'

const MyTeam = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 

    return (
    <>
        {<div className="content">
            <h1>My Team</h1>
            <div>team will go here</div>
        </div>}
    </>
    )
}

export default MyTeam
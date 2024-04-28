import { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import PokemonCard from '../components/pokemoncard'

const Teams = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 

    return (
    <>
        {<div className="Teams">
            <h1>Team List</h1>
            <div>team list will go here</div>
        </div>}
    </>
    )
}

export default Teams
import { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import PokemonCard from '../components/pokemoncard'

const Home = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 

    return (
    <>
        {<div className="content">
            <h2>Home</h2>
            <h3>Pokemon</h3>
            <div className="pokemon-list">
                {pokemon.map((p) => {
                    return <PokemonCard key = {p._id} p = {p}/>
                })}
            </div>
        </div>}
    </>
    )
}

export default Home
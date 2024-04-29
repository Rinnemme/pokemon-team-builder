import { useContext, useEffect } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import PokemonCard from '../components/pokemoncard'

const PokemonList = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
    <>
        <div className="content">
            <h1>Pokemon</h1>
            <div className="pokemon-list">
                {pokemon.map((p) => {
                    return <PokemonCard key = {p._id} p = {p}/>
                })}
            </div>
        </div>
    </>
    )
}

export default PokemonList
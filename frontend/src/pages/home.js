import { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'

const Home = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 

    return (
    <>
        {<div className="home">
            <h2>Home</h2>
            <div className="pokemon">
                <h3>Pokemon</h3>
                {pokemon.map((p) => {
                    return <p key = {p._id}>
                        {p.name}
                    </p>
                })}
            </div>
        </div>}
    </>
    )
}

export default Home
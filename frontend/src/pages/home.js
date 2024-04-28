import { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import PokemonCard from '../components/pokemoncard'

const Home = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 

    return (
    <>
        {<div className="content">
            <h1>Home page</h1>
            <div>info will go here</div>
        </div>}
    </>
    )
}

export default Home
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'

const Home = () => {
    const [fetchDone, setFetchDone] = useState(false)
    const {pokemon, dispatch} = useContext(PokemonContext) 
    
    async function fetchPokemon() {
        const response = await fetch('/pokemon')
        const json = await response.json()
        if (response.ok) {
            dispatch({type: 'SET_POKEMON',  payload: json})
            setFetchDone(true)
        } else throw Error('Fetch failed')
    }

    useEffect(() => {
        fetchPokemon()
        console.log(pokemon)
    }, [])

    return (
    <>
        {fetchDone && <div className="home">
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
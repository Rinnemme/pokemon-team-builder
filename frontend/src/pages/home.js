import {useEffect, useState} from 'react'

const Home = () => {
    const [pokemon, setPokemon] = useState(null)
    const [fetchDone, setFetchDone] = useState(false)

    async function fetchPokemon() {
        const response = await fetch('/pokemon')
        const json = await response.json()
        const parse = Array.from(json)

        if (response.ok) {
            setPokemon(parse)
            setFetchDone(true)
        }
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
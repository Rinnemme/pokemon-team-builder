import { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import PokemonCard from '../components/pokemoncard'
import TeamCard from '../components/teamcard'

const MyTeam = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext)

    return (
        <>
            <div className="content">
                <input></input>
                <h1>My Team</h1>
                <div className="pokemon-list">
                    {myTeam.members.map((p) => {
                            return <PokemonCard key={`myTeam-${p._id}`} p={p}/>
                    })}
                </div>
            </div>

        </>
    )
}

export default MyTeam
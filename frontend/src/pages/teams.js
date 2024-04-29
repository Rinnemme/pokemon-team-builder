import { useContext, useEffect } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import TeamCard from '../components/teamcard'

const Teams = (team) => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const sortedTeams = teams.sort((a,b) => a.createdAt < b.createdAt ? 1 : -1)

    return (
    <>
        {<div className="content"> 
            <h1>Team List</h1>
            <div className="pokemon-list">
                {sortedTeams.map((t)=> {
                    return <TeamCard team = {t} key = {t._id}/>
                })}
            </div>
        </div>}
    </>
    )
}

export default Teams
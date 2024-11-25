import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PokemonContext } from '../context/pokemonContext'
import PokemonCard from '../components/pokemoncard'
import TeamForm from '../components/myTeamForm'

const MyTeam = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="content">
                <div className = "page-title">My Team</div>
                {!myTeam.members.length && <Link to='/pokemon'>
                    <div className = 'card-header' style = {{height: '100%', backgroundColor: 'white', border: '1px solid lightgray'}}>
                        <div className = 'card-header-content'>
                            <div className = "team-info" >
                                <div className = "team-name">{`There are no pokemon here!`}</div>
                                <div className = "team-info">{`Head to the Pokemon tab to start adding Pokemon to your team!`}</div>
                            </div>
                        </div>
                    </div>
                </Link>}
                <div className="pokemon-list">
                    {myTeam.members.map((p) => {
                            return <PokemonCard key={`myTeam-${p._id}`} p={p}/>
                    })}
                </div>
                <h1>Submit Your Team</h1>
                <TeamForm/>
            </div>
        </>
    )
}

export default MyTeam
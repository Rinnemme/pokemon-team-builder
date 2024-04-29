import { useState, useContext } from "react"
import { PokemonContext } from "../context/pokemonContext"

const TeamForm = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const team = {myTeam}
        const response = await fetch('/teams', {
            method: 'POST',
            body: JSON.stringify(myTeam),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            dispatch({type: 'SET_ALL', payload: {pokemon: pokemon, teams: [...teams, {...myTeam, createdAt: json.createdAt}], types: types, myTeam: {name: '', creator: '', members: []}}})
            console.log(`new team added`, json)
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <label htmlFor="team-name">Team Name:</label>
            <input
                id="team-name"
                type="text"
                onChange={(e)=> dispatch({type: 'SET_TEAM_NAME', payload: e.target.value})}
                value={myTeam.name}
            />
            <label htmlFor="creator-name">Your Name:</label>
            <input
                id="creator-name"
                type="text"
                onChange={(e)=> dispatch({type: 'SET_TEAM_CREATOR', payload: e.target.value})}
                value={myTeam.creator}
            />
            <button>Submit your team</button>
        </form>
    )
}

export default TeamForm
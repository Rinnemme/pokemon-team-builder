import { useContext, useState } from "react";
import { PokemonContext } from "../context/pokemonContext";
import PokemonCard from "./pokemoncard";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const TeamCard = ({team}) => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 
    const [expanded, setExpanded] = useState(false)
    const toggleExpansion = () => expanded ? setExpanded(false) : setExpanded(true)

    const findPokemon = (id) => {
        pokemon.forEach(pokemon => {
            if (pokemon._id === id) return pokemon
        })
    }

    console.log(team.members)

    return (
        <>
            <div className = 'team'>
                <div className = 'card-header' style = {{backgroundColor: 'white'}} onClick = {toggleExpansion}>
                    <div className = 'card-header-content'>
                        <div className = "team-info">
                            <div className = "team-name">{team.name}</div>
                            <div className = "team-info">{`Submitted by ${team.creator} ${formatDistanceToNow(new Date(team.createdAt), {addSuffix:true})}`}</div>
                            <div className = "team-preview">
                                {team.members.map((p) => {
                                    return <img className = "team-preview-image" src={`${p.image.split(".png")[0]}.png`}></img>
                                })

                                }
                            </div>
                        </div>
                    </div>
                </div>
                {expanded && <div className = 'card-main'>
                    <div className = 'pokemon-list'>
                        {team.members.map((p) => {
                            const targetPokemon = findPokemon() 
                            return <PokemonCard key={`${team.name}-${p._id}`} p={p}/>
                        })}
                    </div>
                </div>}
            </div>
        </>
    )
}

export default TeamCard
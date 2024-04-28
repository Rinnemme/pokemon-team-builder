import { useContext, useState } from "react";
import { PokemonContext } from "../context/pokemonContext";

const PokemonCard = ({p}) => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 
    const [expanded, setExpanded] = useState(true)
    const toggleExpansion = () => expanded ? setExpanded(false) : setExpanded(true)

    return (
        <>
            <div className = 'card'>
                <div className = 'card-header' onClick = {function () {toggleExpansion()}}>
                    <div className = 'card-header-content'>
                        <div className = 'card-header-left'>
                            <img className = 'card-header-image' src = {`${p.image.split(".png")[0]}.png`}></img>
                            <div className = 'card-name'> {p.name} </div>
                            <div className = 'card-number'> {p.pokedexNumber}</div>
                        </div>
                        <div className = 'card-header-right'>
                            <div className = 'card-button-container'>
                                {myTeam.members.includes(p._id) && <div className = 'add-button'>Add to Team</div>}
                                {myTeam.members.includes(p._id) && <div className = 'on-team'>On Team</div>}
                                {!myTeam.members.includes(p._id) && <div className = 'remove-button'></div>}
                            </div>
                        </div>
                    </div>
                </div>
                {expanded && <div className = 'card-main'>
                    <div className = 'card-main-content'>
                        <div className = 'card-main-left'>
                            <img className = 'card-main-image' src = {`${p.image.split(".png")[0]}.png`}></img>
                            <div className = 'card-main-type-container'>
                                <div className = 'card-main-type'>{p.type[0].name}</div>
                                {p.type[1] && <div className = 'card-main-type'>{p.type[1].name}</div>}
                            </div>
                        </div>
                        <div className = 'card-main-right'>
                            <div className = 'card-main-header'>Base Stats:</div>
                            <div className = 'card-main-stat-table'>
                                <div className = 'card-main-stat'>{`HP: ${p.hp}`}</div>
                                <div className = 'card-main-stat'>{`Attack: ${p.attack}`}</div>
                                <div className = 'card-main-stat'>{`Defense: ${p.defense}`}</div>
                                <div className = 'card-main-stat'>{`Sp. Atk: ${p.spAtk}`}</div>
                                <div className = 'card-main-stat'>{`SP. Def: ${p.spDef}`}</div>
                                <div className = 'card-main-stat'>{`Speed: ${p.speed}`}</div>
                            </div>
                            <div className = 'card-main-header'>Damage From:</div>
                            <div className = 'card-main-damage-table'>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`NRM`}</div>
                                    <div className = 'card-main-damage-label'>{(p.type[1]) ? p.type[0].damageFromNormal*p.type[1].damageFromNormal : p.type[0].damageFromNormal}</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>}
    
            </div>
        </>
    )
}

export default PokemonCard
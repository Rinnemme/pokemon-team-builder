import { useContext, useState } from "react";
import { PokemonContext } from "../context/pokemonContext";

const PokemonCard = ({p}) => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 
    const [expanded, setExpanded] = useState(false)

    const toggleExpansion = (e) => {
        if (e.target.className!=='add-button' && e.target.className!=='remove-button') {
            expanded ? setExpanded(false) : setExpanded(true)
        }
    }

    const handleAdd = (e) => {
        if(myTeam.members.length<6) {
            console.log('Value of p:')
            console.log(p)
            dispatch({type: 'ADD_TO_TEAM', payload: p})
            // e.target 
        } else {
            const originalColor = e.target.style.backgroundColor
            e.target.style.backgroundColor = 'var(--red)'
            setTimeout(function() {e.target.style.backgroundColor = originalColor}, 500)
        }
    }

    const handleRemove = () => {
        dispatch({type: 'REMOVE_FROM_TEAM', payload: p})
    }

    return (
        <>
            <div className = 'card'>
                <div className = 'card-header' style={{backgroundColor: myTeam.members.includes(p) ? 'var(--light-yellow)' : 'var(--light-blue)'}} onClick = {toggleExpansion}>
                    <div className = 'card-header-content'>
                        <div className = 'card-header-left'>
                            <div className = 'card-header-image-container'>
                                <img className = 'card-header-image' src = {`${p.image.split(".png")[0]}.png`}></img>
                            </div>
                            <div className = 'card-name'> {p.name} </div>
                            {p.pokedexNumber < 10 && <div className = 'card-number'> {`#00${p.pokedexNumber}`}</div>}
                            {(10 <= p.pokedexNumber && p.pokedexNumber < 100) && <div className = 'card-number'> {`#0${p.pokedexNumber}`}</div>}
                            {p.pokedexNumber >= 100 && <div className = 'card-number'> {`#${p.pokedexNumber}`}</div>}
                        </div>
                        <div className = 'card-header-right'>
                            <div className = 'card-button-container'>
                                {!myTeam.members.includes(p) && <div className = 'add-button' onClick = {handleAdd}>ADD TO TEAM</div>}
                                {myTeam.members.includes(p) && <div className = 'on-team'>ON TEAM</div>}
                                {myTeam.members.includes(p) && <img className = 'remove-button' onClick = {handleRemove} src = 'https://static.thenounproject.com/png/2695448-200.png'></img>}
                            </div>
                        </div>
                    </div>
                </div>
                {expanded && <div className = 'card-main'>
                    <div className = 'card-main-content'>
                        <div className = 'card-main-left'>
                            <div className = 'card-main-image-container'>
                                <img className = 'card-main-image' src = {`${p.image.split(".png")[0]}.png`}></img>
                            </div>
                            <div className = 'card-main-type-container'>
                                <div className = 'card-main-type' style = {{backgroundColor: `var(--${p.type[0].name.toLowerCase()})`}}>{p.type[0].name}</div>
                                {p.type[1] && <div className = 'card-main-type' style = {{backgroundColor: `var(--${p.type[1].name.toLowerCase()})`}}>{p.type[1].name}</div>}
                            </div>
                        </div>
                        <div className = 'card-main-right'>
                            <div className = 'card-main-header'>Base Stats:</div>
                            <div className = 'card-main-stat-table'>
                                <div className = 'card-main-stat'>{`HP: ${p.hp}`}</div>
                                <div className = 'card-main-stat'>{`Sp. Atk: ${p.spAtk}`}</div>
                                <div className = 'card-main-stat'>{`Attack: ${p.attack}`}</div>
                                <div className = 'card-main-stat'>{`SP. Def: ${p.spDef}`}</div>
                                <div className = 'card-main-stat'>{`Defense: ${p.defense}`}</div>
                                <div className = 'card-main-stat'>{`Speed: ${p.speed}`}</div>
                            </div>
                            <div className = 'card-main-header'>Damage From:</div>
                            <div className = 'card-main-damage-table'>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`NRM`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromNormal*p.type[1].damageFromNormal : p.type[0].damageFromNormal}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`FIR`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromFire*p.type[1].damageFromFire : p.type[0].damageFromFire}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`WTR`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromWater*p.type[1].damageFromWater : p.type[0].damageFromWater}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`ELE`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromElectric*p.type[1].damageFromElectric : p.type[0].damageFromElectric}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`GRS`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromGrass*p.type[1].damageFromGrass : p.type[0].damageFromGrass}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`ICE`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromIce*p.type[1].damageFromIce : p.type[0].damageFromIce}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`FGT`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromFighting*p.type[1].damageFromFighting : p.type[0].damageFromFighting}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`PSN`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromPoison*p.type[1].damageFromPoison : p.type[0].damageFromPoison}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`GRN`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromGround*p.type[1].damageFromGround : p.type[0].damageFromGround}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`FLY`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromFlying*p.type[1].damageFromFlying : p.type[0].damageFromFlying}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`PSY`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromPsychic*p.type[1].damageFromPsychic : p.type[0].damageFromPsychic}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`BUG`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromBug*p.type[1].damageFromBug : p.type[0].damageFromBug}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`RCK`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromRock*p.type[1].damageFromRock : p.type[0].damageFromRock}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`GHO`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromGhost*p.type[1].damageFromGhost : p.type[0].damageFromGhost}</div>
                                </div>
                                <div className = 'card-main-damage'>
                                    <div className = 'card-main-damage-label'>{`DRA`}</div>
                                    <div className = 'card-main-damage-value'>{(p.type[1]) ? p.type[0].damageFromDragon*p.type[1].damageFromDragon : p.type[0].damageFromDragon}</div>
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
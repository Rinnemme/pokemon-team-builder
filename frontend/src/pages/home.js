import { useContext } from 'react'
import { PokemonContext } from '../context/pokemonContext'
import PokemonCard from '../components/pokemoncard'

const Home = () => {
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 
    // style ={{backgroundColor: 'var(--light-blue)'}}
    return (
    <>
        {<div className="content">
            <div className="home-title">Pokémon Team Builder</div>
            <div className="home-card">
               <div className="home-description">
               {/* Welcome to the world of POKEMON! My name is OAK! People call me the POKEMON PROF! This world is inhabited by creatures called POKEMON! */}
                    Welcome to this wonderful app of Pokémon. My name is Oak! People call me the Pokémon Prof. This app is 
                    inhabited by creatures called Pokemon! 
                    <br></br><br></br>
                    Here, you can check out the <strong>Pokémon</strong> tab to learn about Pokémon and start building your team; see 
                    the teams others have put together on the <strong>Teams</strong> tab; and submit your own team from the <strong>My Team</strong> tab!
                </div>
               <img className="home-image" src="https://static.wikia.nocookie.net/pokemonfireash/images/c/c2/Professor_Oak.png"></img>
            </div>
        </div>}
    </>
    )
}

export default Home
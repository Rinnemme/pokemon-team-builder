import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { PokemonContext } from './context/pokemonContext'

import Home from './pages/home'
import Navbar from './components/navbar'

function App() {
  const [fetchDone, setFetchDone] = useState(false)
    const {pokemon, teams, types, myTeam, dispatch} = useContext(PokemonContext) 
    
    async function fetchPokemon() {
        const pokeResponse = await fetch('/pokemon')
        const pokeJson = await pokeResponse.json()
        // if (pokeResponse.ok) {
        //     dispatch({type: 'SET_POKEMON',  payload: pokeJson})
        // } else throw Error('Fetching pokemon failed')

        const teamResponse = await fetch('/teams')
        const teamJson = await teamResponse.json()
        // if (teamResponse.ok) {
        //     dispatch({type: 'SET_TEAMS',  payload: teamJson})
        // } else throw Error('Fetching teams failed')

        const typeResponse = await fetch('/types')
        const typeJson = await typeResponse.json()

        if (pokeResponse.ok && teamResponse.ok && typeResponse.ok) {
            // dispatch({type: 'SET_POKEMON', payload: pokeJson})
            // dispatch({type: 'SET_TEAMS', payload: teamJson})
            // dispatch({type: 'SET_TYPES', payload: typeJson})
            dispatch({type: 'SET_ALL', payload: [pokeJson, teamJson, typeJson]})
            setFetchDone(true)
        } else throw Error('Fetching types failed')
    }

    // async function fetchTeams() {
    //     const response = await fetch('/teams')
    //     const json = await response.json()
    //     if (response.ok) {
    //         dispatch({type: 'SET_TEAMS',  payload: json})
    //         console.log(json)
    //     } else throw Error('Fetching teams failed')
    // }

    // async function fetchTypes() {
    //     const response = await fetch('/types')
    //     const json = await response.json()
    //     if (response.ok) {
    //         dispatch({type: 'SET_TYPES',  payload: json})
    //         // setFetchDone(true)
    //         console.log(json)
    //     } else throw Error('Fetching types failed')
    // }

    // async function fetchData() {
    //     await fetchPokemon()
    //     await fetchTeams()
    //     await fetchTypes()
    //     setFetchDone(true)
    // }

    useEffect(() => {
        fetchPokemon()
        console.log(pokemon)
    }, [])

  return (
    <>
    {fetchDone && <div className="App">
      <BrowserRouter>
      <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>}
    </>
  );
}

export default App;

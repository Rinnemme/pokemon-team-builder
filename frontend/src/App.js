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
        const teamResponse = await fetch('/teams')
        const teamJson = await teamResponse.json()
        const typeResponse = await fetch('/types')
        const typeJson = await typeResponse.json()
        const defaultTeam = {name: '', members: []}

        if (pokeResponse.ok && teamResponse.ok && typeResponse.ok) {
            dispatch({type: 'SET_ALL', payload: [pokeJson, teamJson, typeJson, defaultTeam]})
            setFetchDone(true)
        } else throw Error('Fetching failed')
    }

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

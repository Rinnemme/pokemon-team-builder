import { createContext, useReducer } from 'react'

export const PokemonContext = createContext()

export const pokeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ALL':
            return {
                pokemon: action.payload[0],
                teams: action.payload[1],
                types: action.payload[2],
                myTeam: action.payload[3]
            }
        case 'ADD_TO_TEAM':
            return {myTeam: [...state.myTeam, action.payload]}
        case 'REMOVE_FROM_TEAM':
            return {myTeam: state.myTeam.filter((p) => p._id !== action.payload._id)}
        case 'SUBMIT_TEAM':
            return {teams: [...state.teams, action.payload]}
        default: 
            return state
    }
}

export const PokemonContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(pokeReducer, {pokemon: null, teams: null, types: null, myTeam: {name: null, members: []}})
    return (
        <PokemonContext.Provider value = {{...state, dispatch}}>
            {children}
        </PokemonContext.Provider>
    )
}
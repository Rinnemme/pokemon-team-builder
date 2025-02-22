import { createContext, useReducer } from "react";

export const PokemonContext = createContext();

export const pokeReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL":
      return {
        pokemon: action.payload.pokemon,
        teams: action.payload.teams,
        types: action.payload.types,
        myTeam: action.payload.myTeam,
      };
    case "ADD_TO_TEAM":
      return {
        ...state,
        myTeam: {
          ...state.myTeam,
          members: [...state.myTeam.members, action.payload],
        },
      };
    case "REMOVE_FROM_TEAM":
      return {
        ...state,
        myTeam: {
          ...state.myTeam,
          members: state.myTeam.members.filter(
            (p) => p._id !== action.payload._id
          ),
        },
      };
    case "SET_TEAM_NAME":
      return { ...state, myTeam: { ...state.myTeam, name: action.payload } };
    case "SET_TEAM_CREATOR":
      return { ...state, myTeam: { ...state.myTeam, creator: action.payload } };
    case "SUBMIT_TEAM":
      return { ...state, teams: [...state.teams, action.payload] };
    default:
      return state;
  }
};

export const PokemonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokeReducer, {
    pokemon: null,
    teams: null,
    types: null,
    myTeam: { name: "", creator: "", members: [] },
  });
  return (
    <PokemonContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PokemonContext.Provider>
  );
};

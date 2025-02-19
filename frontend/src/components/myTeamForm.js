import { useContext } from "react";
import { PokemonContext } from "../context/pokemonContext";

const TeamForm = () => {
  const { pokemon, teams, types, myTeam, dispatch } =
    useContext(PokemonContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://pokemon-team-builder-sooty.vercel.app/teams",
      {
        method: "POST",
        body: JSON.stringify(myTeam),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      dispatch({
        type: "SET_ALL",
        payload: {
          pokemon: pokemon,
          teams: [...teams, { ...myTeam, createdAt: json.createdAt }],
          types: types,
          myTeam: { name: "", creator: "", members: [] },
        },
      });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <div className="form-header">Submit Your Team</div>
      <label htmlFor="team-name">Team Name:</label>
      <input
        id="team-name"
        type="text"
        onChange={(e) =>
          dispatch({ type: "SET_TEAM_NAME", payload: e.target.value })
        }
        value={myTeam.name}
      />
      <label htmlFor="creator-name">Your Name:</label>
      <input
        id="creator-name"
        type="text"
        onChange={(e) =>
          dispatch({ type: "SET_TEAM_CREATOR", payload: e.target.value })
        }
        value={myTeam.creator}
      />
      <button>SUBMIT</button>
    </form>
  );
};

export default TeamForm;

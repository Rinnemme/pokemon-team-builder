import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/pokemonContext";
import PokemonCard from "../components/pokemoncard";
import PokemonSlot from "../components/pokemonSlot";
import TeamForm from "../components/myTeamForm";

const MyTeam = () => {
  const { myTeam } = useContext(PokemonContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content">
        <div className="page-title">My Team</div>
        <div className="pokemon-list">
          {myTeam.members.map((p) => (
            <PokemonCard key={`myTeam-${p._id}`} p={p} />
          ))}
          {Array.from({ length: 6 - myTeam.members.length }, (_, i) => (
            <PokemonSlot key={`slot-${i}`} />
          ))}
        </div>
        {myTeam.members.length > 0 && (
          <div className="submit-panel">
            <TeamForm />
          </div>
        )}
      </div>
    </>
  );
};

export default MyTeam;

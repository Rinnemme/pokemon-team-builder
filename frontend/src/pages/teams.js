import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/pokemonContext";
import TeamCard from "../components/teamcard";

const Teams = (team) => {
  const { teams } = useContext(PokemonContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedTeams = teams.sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  return (
    <>
      {
        <div className="content">
          <div className="page-title">Teams</div>
          {sortedTeams.map((t) => {
            return <TeamCard team={t} key={t._id} />;
          })}
        </div>
      }
    </>
  );
};

export default Teams;

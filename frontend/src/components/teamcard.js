import { useState } from "react";
import PokemonCard from "./pokemoncard";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const TeamCard = ({ team }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () =>
    expanded ? setExpanded(false) : setExpanded(true);
  return (
    <>
      <div className="team">
        <div className="team-card-header" onClick={toggleExpansion}>
          <div className="card-header-content">
            <div className="team-info">
              <div className="team-name">{team.name}</div>
              <div className="team-info">{`Submitted by ${
                team.creator
              } ${formatDistanceToNow(new Date(team.createdAt), {
                addSuffix: true,
              })}`}</div>
              <div className="team-preview">
                {team.members.map((p) => {
                  return (
                    <div className="team-preview-image-container">
                      <img
                        className="team-preview-image"
                        alt={`${p.name}`}
                        src={require(`../img/${p.name}.png`)}
                      ></img>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {expanded && (
          <div className="team-card-main">
            {team.members.map((p) => {
              return <PokemonCard key={`${team.name}-${p._id}`} p={p} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default TeamCard;

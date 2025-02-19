import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/pokemonContext";
import PokemonCard from "../components/pokemoncard";

const PokemonList = () => {
  const { pokemon } = useContext(PokemonContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="content">
        <div className="page-title">Pokémon</div>
        <div className="pokemon-list">
          {pokemon.map((p) => {
            return <PokemonCard key={p._id} p={p} />;
          })}
        </div>
      </div>
    </>
  );
};

export default PokemonList;

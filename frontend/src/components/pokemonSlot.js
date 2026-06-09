import { Link } from "react-router-dom";

const PokemonSlot = () => {
  return (
    <Link to="/pokemon" className="empty-slot">
      <div className="card-header">
        <div className="empty-slot-image">+</div>
        <div className="empty-slot-label">Empty Slot</div>
      </div>
    </Link>
  );
};

export default PokemonSlot;

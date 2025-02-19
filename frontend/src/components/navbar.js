import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;
  return (
    <header>
      <Link to="/" className={location === "/" ? "blue-text" : ""}>
        <div className="page-link">Home</div>
      </Link>
      <Link
        to="/pokemon"
        className={location === "/pokemon" ? "blue-text" : ""}
      >
        <div className="page-link">Pokémon</div>
      </Link>
      <Link
        to="/my-team"
        className={location === "/my-team" ? "blue-text" : ""}
      >
        <div className="page-link">My Team</div>
      </Link>
      <Link to="/teams" className={location === "/teams" ? "blue-text" : ""}>
        <div className="page-link">Teams</div>
      </Link>
    </header>
  );
};

export default Navbar;

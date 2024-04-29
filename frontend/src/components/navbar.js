import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
                <Link to="/">
                    <div className = "page-link">Home</div>
                </Link>
                <div className = "navbar-divider">|</div>
                <Link to="/pokemon">
                    <div className = "page-link">Pokémon</div>
                </Link>
                <div className = "navbar-divider">|</div>
                <Link to="/my-team">
                <div className = "page-link">My Team</div>
                </Link>
                <div className = "navbar-divider">|</div>
                <Link to="/teams">
                <div className = "page-link">Teams</div>
                </Link>
        </header>
    )
}

export default Navbar
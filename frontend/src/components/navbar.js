import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
                <Link to="/">
                    <h2>Pokémon Team Builder</h2>
                </Link>
                <div className = "navbar-divider">|</div>
                <Link to="/pokemon">
                    <div className = "page-link">Pokémon List</div>
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
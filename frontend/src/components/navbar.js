import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
                <Link to="/">
                    <div className = "title">Pokémon Team Builder</div>
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
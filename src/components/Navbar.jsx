import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                GeekVault
            </div>

            <div className="navbar-links">
                <Link to="/">
                    <button>Home</button>
                </Link>

                <Link to="/movies">
                    <button>Movies</button>
                </Link>

                <Link to="/comics">
                    <button>Comics</button>
                </Link>

                <Link to="/inventory">
                    <button>Inventory</button>
                </Link>

                <Link to="/about">
                    <button>About</button>
                </Link>
            </div>

            
        </nav>
    )
}

export default Navbar
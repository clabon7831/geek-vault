import { Link } from "react-router"

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
            </div>

            <div className="login">
                    <button>Login</button>
            </div>
        </nav>
    )
}

export default Navbar
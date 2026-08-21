import {Link} from "react-router"

function Navbar() {
    return (
        <nav>
            GeekVault
            <Link to ="/">
                <button>Home</button>
            </Link>

            <Link to ="/movies">
                <button>Movies</button>
            </Link>

            <Link to ="/comics">
                <button>Comics</button>
            </Link>

            <Link to ="/inventory">
                <button>Inventory</button>
            </Link>
        </nav>
    )
}

export default Navbar
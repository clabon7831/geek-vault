import Card from "../components/Card"
import { Link } from "react-router"

function Home() {
    return (
        <div className="home">
            
            <div className="home-hero">
                <h1>Build Your Fortress of Fandom</h1>
                <p>
                    Track your movies and comics, organize your collection, and protect what you love.
                </p>
            </div>

            <div className="homelink">
                
                <Link to="/movies">
                    <Card linkStyle={true}>
                        <h2>Movies</h2>
                        <p> Discover movies and add them to your inventory.</p>
                        <p1>Explore Movies →</p1>
                    </Card>
                </Link>
                
                <Link to="/comics">
                    <Card linkStyle={true}>
                        <h2>Comics</h2>
                        <p>Find comics and track your collection.</p>
                        <p1>Explore Comics →</p1>
                    </Card>
                </Link>

                <Link to="/inventory">
                    <Card linkStyle={true}>
                        <h2>The Vault</h2>
                        <p>View and manage Everything you own.</p>
                        <p1>View Inventory →</p1>
                    </Card>
                </Link>

            </div>

        </div>
    )
}

export default Home

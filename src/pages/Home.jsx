import Card from "../components/Card"
import {Link} from "react-router"

function Home() {
    return (
        <>
            <h1>Welcome to GeekVault</h1>

            <p>
                Build and manage your personal movie and comic collection.
            </p>

            <div>
                <Link to= "/movies">
                    <Card clickable={true}>
                        <h2>Movies</h2>
                        <p>Find movies and add them to your inventory.</p>
                    </Card>
                </Link>

                <Card>
                    <h2>Comics</h2>
                    <p>Find comics and add them to your inventory.</p>
                </Card>

                <Card>
                    <h2>Inventory</h2>
                    <p>View and manage the movies and comics you own.</p>
                </Card>
            </div>
        </>
    )
}

export default Home
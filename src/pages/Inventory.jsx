import Card from "../components/Card"

function Inventory({ inventory, deleteFromInventory}) {

    const inventoryMovieJSX = inventory.map((movie) => {
    return <div>
                <img 
                    className="movieInventoryImage"
                    src={movie.image}
                    alt = {movie.title}
                />
                <h2>{movie.title}</h2>
                <button onClick={() => deleteFromInventory(movie)}>
                    Delete
                </button>
            </div>}
    )

    return (
            <Card>
                <h1>The Vault</h1>
                <Card>
                    <h2>My Movies</h2>
                    <div>
                    {inventoryMovieJSX}
                    </div>
                </Card>
            </Card>
    )
}


export default Inventory
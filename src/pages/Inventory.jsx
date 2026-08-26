import Card from "../components/Card"

function Inventory({ inventory, deleteFromInventory }) {

    const movies = inventory.filter((item) => item.director)

    const comics = inventory.filter((item) => item.publisher)

    const inventoryMovieJSX = movies.map((movie) => {
        return (
            <div>
                <img 
                    className="movieInventoryImage"
                    src={movie.image}
                    alt={movie.title}
                />

                <h2>{movie.title}</h2>

                <button onClick={() => deleteFromInventory(movie)}>
                    Delete
                </button>
            </div>
        )
    })

    const inventoryComicJSX = comics.map((comic) => {
        return (
            <div>
                <img 
                    className="comicInventoryImage"
                    src={comic.image}
                    alt={comic.title}
                />

                <h2>{comic.title}</h2>

                <button onClick={() => deleteFromInventory(comic)}>
                    Delete
                </button>
            </div>
        )
    })

    
    return (
        <>
            <h1>The Vault</h1>

            <Card>
                <h2>My Movies</h2>
                <div className="inventoryRow">{inventoryMovieJSX}</div>
            </Card>

            <Card>
                <h2>My Comics</h2>
                <div className="inventoryRow">{inventoryComicJSX}</div>
            </Card>
        </>
    )
}


export default Inventory
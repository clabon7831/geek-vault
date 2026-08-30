import Card from "../components/Card"

function Inventory({ inventory, deleteFromInventory }) {

    const movies = inventory.filter((item) => item.director)
    const comics = inventory.filter((item) => item.publisher)
    
    const inventoryMovieJSX = movies.map((movie) => {

        return (
            <div className="inventoryItem" key={movie.id}>
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
            <div className="inventoryItem" key={comic.id}>
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
        <div className="inventoryHeader">
            <h1>The Vault</h1>
            <p>YOUR PERSONAL COLLECTION</p>
        </div>

        <section className="inventorySection">
            <div className="inventorySectionTitle">
                <h2>My Movies</h2>
            </div>

            <div className="movieInventoryRow">
                {inventoryMovieJSX}
            </div>
        </section>

        <section className="inventorySection">
            <div className="inventorySectionTitle">
                <h2>My Comics</h2>
            </div>

            <div className="inventoryRow">
                {inventoryComicJSX}
            </div>
        </section>
    </>
)
}

export default Inventory
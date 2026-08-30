import { mockComics } from "../test-data/mock-comics"
import ComicCard from "../components/ComicCard"

function Comics({ addToInventory}) {
    const comicsJSX = mockComics.map((comic) => {
        return <ComicCard comic={comic} addToInventory={addToInventory}/>})

    return (
    <div className="comicspage">

        <div className="comicsheader">
            <h1>Comics</h1>
            <p>Explore new comics and build your personal collection.</p>
        </div>

        <div className="comicgrid">
            {comicsJSX}
        </div>

    </div>
)
}

export default Comics
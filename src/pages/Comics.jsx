import { mockComics } from "../test-data/mock-comics"
import ComicCard from "../components/ComicCard"

function Comics({ addToInventory}) {
    const comicsJSX = mockComics.map((comic) => {
        return <ComicCard comic={comic} addToInventory={addToInventory}/>})

    return (
            <>
                <h1>Comics</h1>
                {comicsJSX}
            </>
    )
}

export default Comics
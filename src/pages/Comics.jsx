import { mockComics } from "../test-data/mock-comics"
import ComicCard from "../components/ComicCard"

function Comics() {
    const comicsJSX = mockComics.map((comic) => {
        return <ComicCard comic={comic} />
    })

    return (
            <>
                <h1>Comics</h1>
                {comicsJSX}
            </>
    )
}

export default Comics
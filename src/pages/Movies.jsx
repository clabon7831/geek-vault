import { mockMovies } from "../test-data/mock-movies"
import MovieCard from '../components/MovieCard'

function Movies({ addToInventory}) {
    const moviesJSX = mockMovies.map((movie) => {
        return <MovieCard movie={movie} addToInventory={addToInventory}/>}
    )

    return (
            <>
                <h1>Movies</h1>
                {moviesJSX}
            </>
    )
}

export default Movies
import { mockMovies } from "../test-data/mock-movies"
import MovieCard from '../components/MovieCard'

function Movies() {
    const moviesJSX = mockMovies.map((movie) => {
        return <MovieCard movie={movie} />
    })

    return (
            <>
                <h1>Movies</h1>
                {moviesJSX}
            </>
    )
}

export default Movies
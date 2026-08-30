import { mockMovies } from "../test-data/mock-movies"
import MovieCard from '../components/MovieCard'

function Movies({ addToInventory}) {
    const moviesJSX = mockMovies.map((movie) => {
        return <MovieCard movie={movie} addToInventory={addToInventory}/>}
    )

    return (
    <div className="moviespage">

        <div className="moviesheader">
            <h1>Movies</h1>
            <p>Discover movies and build your library.</p>
        </div>

        <div className="moviegrid">
            {moviesJSX}
        </div>

    </div>
)
}

export default Movies
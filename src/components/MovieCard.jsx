import Card from './Card'

function MovieCard({ movie }) {
  return (
    <Card clickakable={true}>
      <img
          className="movieImage"
          src={movie.image}
          alt={movie.title}
      />

      <h2>{movie.title}</h2>
      <p>
          Year: {movie.year}
          <br />
           Genre: {movie.genre}
          <br />
          Director: {movie.director}
          <br />
          Description: {movie.description}
          <br />
          <button>Add to Inventory</button>
      </p>
    </Card>
  )
}

export default MovieCard
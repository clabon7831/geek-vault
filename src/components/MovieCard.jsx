import Card from './Card'

function MovieCard({ movie, addToInventory }) {
  return (
    <Card clickable={true}>
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
          <button onClick={() => addToInventory(movie)}>
             Add to Inventory
          </button>
      </p>
    </Card>
  )
}

export default MovieCard
import Card from './Card'

function MovieCard({ movie, addToInventory }) {
  return (
    <Card linkStyle={true}>
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
          <button onClick={() => addToInventory(movie)}>
             +Inventory
          </button>
      </p>
    </Card>
  )
}

export default MovieCard
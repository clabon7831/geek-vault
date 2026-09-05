import Card from './Card'
import Button from "./Button"

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
          <Button onClick={() => addToInventory(movie)}>
             +Inventory
          </Button>
      </p>
    </Card>
  )
}

export default MovieCard
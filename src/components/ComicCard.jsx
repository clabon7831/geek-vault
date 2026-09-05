import Card from './Card'
import Button from "./Button"

function ComicCard({ comic, addToInventory }) {
  return (
    <Card linkStyle={true}>
      <img
          className="comicImage"
          src={comic.image}
          alt={comic.title}
      />

      <h2>{comic.title}</h2>
       <p>
          Year: {comic.year}
          <br />
          Publisher: {comic.publisher}
          <br />
          Writer: {comic.writer}
          <br />
          <Button onClick={() => addToInventory(comic)}>
             +Inventory
          </Button>
      </p>
    </Card>
  )
}

export default ComicCard
import Card from './Card'

function ComicCard({ comic, addToInventory }) {
  return (
    <Card clickable={true}>
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
          <button onClick={() => addToInventory(comic)}>
             Add to Inventory
          </button>
      </p>
    </Card>
  )
}

export default ComicCard
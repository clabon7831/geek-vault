import Card from './Card'

function ComicCard({ comic }) {
  return (
    <Card clickable={true}>
      <h2>{comic.title}</h2>
    </Card>
  )
}

export default ComicCard
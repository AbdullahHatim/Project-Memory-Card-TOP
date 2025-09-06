export function Card({id, image}) {
  return (
    <div data-name="card" data-id={id} className="Card">
      <img src={image.url} alt="Giphy GIF"/>
      <p>{image.title.split(' ')[0]}</p>
    </div>
  )
}
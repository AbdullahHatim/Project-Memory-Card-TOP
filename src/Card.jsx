export function Card({id, image}) {
  const title = image.title.split(' ');
  return (
    <div data-name="card" data-id={id} className="card">
      {/* <img src={image.url} alt="Giphy GIF"/> */}
      <div className="img" style={
        {
          backgroundImage: `url(${image.url})`
        }
      }></div>
      <p>{title[0]} {title[1]} {title[2]}</p>
    </div>
  )
}
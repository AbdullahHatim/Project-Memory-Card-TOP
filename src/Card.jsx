export function Card({id, image}) {
  return (
    <div data-name="card" data-id={id} className="Card">
      {id}
    </div>
  )
}
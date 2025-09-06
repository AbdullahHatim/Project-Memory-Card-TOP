export function Header({score}){
  return (
    <header className="header">
      <h1>Memory Game</h1>
      <h2>Click on All cards that you haven't Clicked Before!</h2>
      <div className="score">
        <div className="current-score">Best: {score.best}</div>
        <div className="best-score">Score: {score.current}</div>
      </div>
    </header>
  )
}
import { useState } from "react";
import { Card } from "./Card";
import { Score } from "./Score";

function getCards() {
  const cards = [];
  for(let i = 0; i < 10; i++){
    cards.push(
    <Card key={i} id={i}/>
  )
  }
  return cards;
}
const cards = getCards()


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function GameTable() {
  const [score, setScore] = useState({current: 0, best : 0});

  const clickHandler = (e) => {
    const card = e.target
    if(card.dataset.name !== "card") return

    console.log(card.dataset.id)
    setScore(Score(card.dataset.id))

  }

  

  return (
    <>
      <div>
        <div>{score.current}</div><div>{score.best}</div>
      </div>
      <div onClick={clickHandler}>
      {shuffleArray(cards)}
      </div>
    </>
  )
}
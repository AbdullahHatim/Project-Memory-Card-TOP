import { useState } from "react";
import { Card } from "./Card";
import { Score } from "./Score";
import { ImageFetcher } from "./ImageFetcher";

async function getCards() {
  const cards = [];
  const images = await ImageFetcher();
  for(let i = 0; i < 10; i++){
    cards.push(
    <Card key={i} id={i} image={images[i]}/>
  )
  }
  return cards;
}
const cards = await getCards()

// Copied
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function GameTable({setScore}) {

  const clickHandler = (e) => {
    const card = e.target
    if(card.dataset.name !== "card") return

    console.log(card.dataset.id)
    setScore(Score(card.dataset.id))

  }

  

  return (
    <div onClick={clickHandler} className="game-table">
      {shuffleArray(cards)}
    </div>
  )
}
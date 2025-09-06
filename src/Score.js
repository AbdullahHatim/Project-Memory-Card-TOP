const currentScore = new Set();
let best = 0;

export function Score(n){

  if(currentScore.has(n)){
    best = currentScore.size > best? currentScore.size: best;
    currentScore.clear();
  } else {
    currentScore.add(n);
  }

  return {
    current: currentScore.size,
    best
  }
}
import { useState } from 'react'
import './App.css'
import { ImageFetcher } from './ImageFetcher'
import { GameTable } from './GameTable'
import { Header } from './Header'
// ImageFetcher()
function App() {
  const [score, setScore] = useState({current: 0, best: 0});
  return (
    <>
      <Header score={score}/>
      <GameTable
        score={score}
        setScore={setScore}
      />
    </>
  )
}

export default App

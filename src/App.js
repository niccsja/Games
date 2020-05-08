import React, { useState, useEffect } from "react"
import "./App.css"
/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 */

function App() {
  
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  
  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function countWords(text) {
      const wordsArr = text.trim().split(" ");
      return wordsArr.filter(word => word !== "").length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(5)
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(countWords(text))
  }

  useEffect(() => {
      if(isTimeRunning && timeRemaining > 0) {
        setTimeout(() => {
            setTimeRemaining(time => time - 1)
        }, 1000)
      } else if(isTimeRunning === 0) {
          endGame()
      } 
  }, [timeRemaining, isTimeRunning])
  
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                    onChange={handleChange}
                    value={text} />
            <h4>Time reminaing: {timeRemaining}</h4>
            <button onClick={startGame}>Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
    
}

export default App

import React, { useEffect, useState } from 'react'
import Header from './components/header'
import Custom from './components/custom'

const flag = false



function App() {

  const quotes = ['Some books are judged by their covers, it seems, and in my uniform I was an immediate best seller.', 'I see no more than you, but I have trained myself to notice what I see.', 'The world is full of obvious things which nobody by any chance ever observes.', 'Let me keep my mind on what matters, which is my work, which is mostly standing still and learning to be astonished.', "Names are useful and important, but there's some sort of switch that can go off in our head once we have fgured out the name for a species we are observing. That's why when teaching, instead of leading with the name, I 'trail' with it.", "Curiosity is not a trait that you have or don't have, but a skill that you can develop.", "Without questions, natural history is a stand-off. You stare at nature and nature just stares back"]

  const[quote, setQuote] = useState(quotes[0])

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    alert("counter was changed")
  }, [Click])

  function Click() {
    alert ("Clicked")
  }

  function IncreaseClick(){
    setCounter(counter + 1 )
  }

  function DecreaseClick(){
    setCounter(oldValue => oldValue - 1)
  }

  function RandomeQuote(){
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  return <div>
    <Header />
    <div>
      <h1>CONTENT HERE </h1>
      {flag ? <p>Flag is True</p> : <p>Flag is False</p>}
      <p>
        <button onClick={Click}>Submit</button> 
      </p>
      {!flag && <p>Maybe visible</p>}
    </div>
    <Custom name = "Suman" />
  <div>
    <h1>Counter: {counter}</h1>
    <button onClick={IncreaseClick}>Increase</button>
    <button onClick={DecreaseClick}>Decrease</button>
  </div>
    <h1>Click for a Quote!!</h1>
    <button onClick={RandomeQuote}>Get One</button>
    <h1>{quote}</h1>
  </div>
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [numeroAdivinha, setNumeroAdivinha] = useState()
  const [resultado, setResultado] = useState()

  function Adivinhar(){
    let aleatorio = Math.ceil(Math.random()*10)

    if(numeroAdivinha == aleatorio){
      setResultado("Parabéns, você adivinhou, o número era:   "+ aleatorio )
    }
    else{
      setResultado("Não foi dessa vez, o número era: "+ aleatorio )
    }

  }

  return (
    <>
    <h1>Jogo de Adivinhação</h1>

    <div>
    <input type="Number" 
    value={numeroAdivinha}
    onChange={(e) => setNumeroAdivinha(e.target.value)}/>
    </div>

    <div className='resultado-botao'>
    <button onClick={Adivinhar} className='botaoo'>Adivinhar</button>
    {resultado}
    </div>
    </>

  )
}

export default App

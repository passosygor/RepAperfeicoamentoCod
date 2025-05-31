import { useState } from 'react'
import './App.css'

function App() {
  const [inputMarujo, setInputMarujo] = useState('')
  const [inputCamisa, setInputCamisa] = useState()
  const [inputEventos, setInputEventos] = useState('')
  const [resultado, setResultado] = useState('')

  function verificar(){

    if(inputMarujo > '5' || inputMarujo <= '18' || inputEventos == "sim" || inputCamisa === 10){
      setResultado("Pode Jogar")
    }else{
      setResultado("Não Pode Jogar")
    }

  }

  return (
    <>
      <div className='div-marujo'>
          <h2>Confirmação para o jogo</h2>

            <label htmlFor="">Nº de Jogadores</label>
          <div>
          <input type="number" 
          value={inputMarujo}
          onChange={(e) => setInputMarujo(e.target.value)}/>
          </div>

          <label htmlFor="">Nº da Camisa</label>
          <div>
          <input type="number" 
          value={inputCamisa}
          onChange={(e) => setInputCamisa(e.target.value)}/>
          </div>

            <label htmlFor="">Vai ter o Neymar?</label>
          <div>
          <input type="text" 
          value={inputEventos}
          onChange={(e) => setInputEventos(e.target.value.toLowerCase())}/>
          </div>

            <div>
          <button onClick={verificar}>Verifcar</button>
          </div>

          {resultado}
      </div>
    </>
  )
}

export default App

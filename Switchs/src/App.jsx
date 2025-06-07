import React, { useState } from 'react'
import './App.css'

function App() {
  const[inputDia, setInputDia] = useState('')

  function ExecutarSwitchTrue(){
    let dia = Number(inputDia)
    switch(true){
      case dia < 8: alert("Dia ok")
             break;
             case dia < 1 || dia > 7: alert("Dia ruim")
            break;
            default: alert("ta bom então pdp pode cre tmj tlgd qls pique")
    
    }
  }

  function ExecutarArray(){
    const dias = ['', "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    let dia = Number(inputDia)
    alert(dias[dia])
  }

  function Executar(){
    let valor = Number(inputDia)
    switch(valor){
      case 1: alert("Domingo")
            break;
 
      case 2: alert("Segunda")
            break;
   
      case 3: alert("Terça")
            break;

      case 4: alert("Quarta")
            break;
   
      case 5: alert("Quinta")
            break;
 
      case 6: alert("Sexta")
            break;

      case 7: alert("Sábado")
            break;
            default: alert("Digita direito ai")
    }
    
  }

  return (
    <>
    
      <input type="text" 
      value={inputDia}
      onChange={(e) => setInputDia(e.target.value)}/>

      <div>
      <button onClick={Executar}>Executar</button>
      </div>

      <div>
      <button onClick={ExecutarArray}>Executar com array</button>
      </div>

      <div>
        <button onClick={ExecutarSwitchTrue}>SWITCH</button>
      </div>

    </>
  )
}

export default App

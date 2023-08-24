import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
const [ indicadorNombre , setIndicadorNombre] = useState ("");
const [ indicadorFecha, setIndicadorFecha] = useState ("");
const [ indicadorValor, setIndicadorValor] = useState ("");
useEffect (() => { 
  getCharactersQuote();
}, []);
const getCharactersQuote = async () =>{
  const res = await fetch ("https://mindicador.cl/api");
  const data= await res.json();
  setIndicadorNombre(data.uf.nombre)
  setIndicadorFecha(data.uf.fecha)
  setIndicadorValor(data.uf.valor)
  //console.log(data.character.name + " - " + data.sentence)
}
return(
<>
<h1>{indicadorNombre}</h1>
<h3>{indicadorFecha}</h3>
<h3>{indicadorValor}</h3>
<button  className='mt-3' onClick={getCharactersQuote}>Obtener otra frase celebre de GOT</button>
</>
)
}
export default App

import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
 /* const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput (e.target.value)
  }

  useEffect(() => {
    // se ejecuta al comienzo y cada vez que se cambia
    console.log(userInput)
  }, [userInput]);
  //estado de dependencias, el console log se ejecuta cada vez que se actualiza el userInput, se puede poner mas de una dependencias ej [userInpuit,userPassword]

  return (
    <div>
   <input onChange={handleChange} />
    </div>
  );
}*/

const [characterName , setCharacterName] = useState ("");
const [characterSentence , setCharacterSentence] = useState ("");
characterSentence
useEffect (() => { 
  getCharactersQuote();
}, []);

const getCharactersQuote = async () =>{
  const res = await fetch ("https://api.gameofthronesquotes.xyz/v1/random");
  const data= await res.json();
  setCharacterName(data.character.name)
  setCharacterSentence(data.sentence)
  //console.log(data.character.name + " - " + data.sentence)
}

return(
<>
<h1>{characterName}</h1>
<h3>{characterSentence}</h3>
<button  className='mt-3' onClick={getCharactersQuote}>Obtener otra frase celebre de GOT</button>
</>
)
}
export default App

import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({name:"bulbasaur", link: "https://pokeapi.co/api/v2/pokemon/1/"});

  useEffect(() => { // 서버로부터 데이터 가져오기
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1328")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setIsLoading(false);
      })
  } , []);

  return (
    <>
      <h1>Pokemons !</h1>
      {isLoading ? <span>Loading...</span> : data.name}
    </>
  )

}

export default App

import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);

  useEffect(() => { // 서버로부터 데이터 가져오기
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1328")
      .then(res => res.json())
      .then(json => {
        console.log(json.results);
        setDatas(json.results);
        setIsLoading(false);
      })
  } , []);

  return (
    <>
      <h1>Pokemons !</h1>
      {isLoading ? <p>Loading...</p> : null}
      <ul>
        {datas.map(data => 
          <li>{data.name} : 
            <a href={data.url}>{data.url}</a>
          </li>)
        }
      </ul>
    </>
  )
}

export default App

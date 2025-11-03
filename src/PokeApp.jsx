import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [selectedLink, setSelectedLink] = useState("");

  useEffect(() => { // 서버로부터 데이터 가져오기
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1328")
      .then(res => res.json())
      .then(json => {
        console.log(json.results);
        setDatas(json.results);
        setIsLoading(false);
      })
  } , []);
  const onChange = (event) => {
      setSelectedLink(event.target.value);
  }
  return (
    <>
      <h1>Pokemons !</h1>
      {isLoading ? <p>Loading...</p> : null}
      {/* <ul></ul> */}
        <select onChange = {onChange}>
        {datas.map(data =>
            <option value={data.url}>{data.name}</option>
        )
          // <li>{data.name} : 
          //   <a href={data.url}>{data.url}</a>
          // </li>)
        }
        </select>
        <a href={selectedLink}>{selectedLink}</a>
    </>
  )
}

export default App

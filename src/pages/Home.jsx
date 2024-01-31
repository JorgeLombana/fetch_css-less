import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../components/Card'
import '../app.css'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(0)

  const POKEAPI_URL = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=18`

  useEffect(() => {
    fetch(POKEAPI_URL)
      .then((res) => res.json())
      .then((data) => setData(data.results))
  }, [page])

  const handleNext = () => {
    setPage((prevPage) => prevPage + 18)
  }
  const handlePreview = () => {
    if (page === 0) return
    setPage((prevPage) => prevPage - 18)
  }

  console.log(data)

  return (
    <main>
      <h1>Pokemon </h1>
      <p>here you can watch a list of {data.count} pokemons</p>
      <p>Please click one pokemon to watch its details </p>
      <div className="grid">
        {data.map((item) => (
          <Card key={item.url} name={item.name} url={item.url} />
        ))}
      </div>
      <div className="buttons-container">
        <button onClick={handlePreview}>Preview</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </main>
  )
}
export default App

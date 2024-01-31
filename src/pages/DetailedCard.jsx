import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailedCard = () => {
  const { id } = useParams()
  const [pokemonData, setPokemonData] = useState({})
  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`

  useEffect(() => {
    fetch(pokeApiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error('error feching the data :b')
        }
        return res.json()
      })
      .then((data) =>
        setPokemonData({
          name: data.name,
          abilities: data.abilities,
          image: data.sprites.other.dream_world.front_default,
        })
      )
      .catch((error) => {
        console.log('error fetching the data ->', error)
      })
  }, [pokeApiUrl])

  return (
    <article>
      {Object.keys(pokemonData).length === 0 ? (
        <p>loading...</p>
      ) : (
        <main>
          <h2>{pokemonData.name.toUpperCase()} </h2>
          <img src={pokemonData.image} alt={pokemonData.name} />
          <h3>Hablities: </h3>
          <ul>
            {pokemonData.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
        </main>
      )}
    </article>
  )
}

export default DetailedCard

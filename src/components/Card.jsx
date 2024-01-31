import { Link } from 'react-router-dom'
import DetailedCard from '../pages/DetailedCard'

const Card = ({ name, url }) => {
  const handleClick = () => {}
  const pokemonId = url.slice(34, -1)
  return (
    <Link to={`/pokemon/${pokemonId}`}>
      <div className="card" onClick={handleClick}>
        {name}
      </div>
    </Link>
  )
}

export default Card

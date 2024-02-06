import DetailedCard from './pages/DetailedCard'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<DetailedCard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

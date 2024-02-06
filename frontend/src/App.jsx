import DetailedCard from './pages/DetailedCard'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import SignUp from './pages/SingUp.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pokemon/:id" element={<DetailedCard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

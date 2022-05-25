import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import Navbar from './components/Navbar'
import Cocktail from './pages/Cocktail'

function App() {
  return (
    <div className='font-sans'>
      <Router>
        <div className='relative'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cocktail/:cocktailID' element={<Cocktail />} />
          <Route path='/favourite' element={<Favourite />} />
        </Routes>
      </Router>
    </div>
  )
}
export default App

import { Routes, Route } from 'react-router-dom'
import Home from './comps/Home'
import About from './comps/About'   
import Services from './comps/Services' 
import Portfolio from './comps/Portfolio'
import Contact from './comps/Contact'
import Footer from './comps/Footer' 

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

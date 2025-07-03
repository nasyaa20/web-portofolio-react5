import './App.css'
import Home from './pages/Home'
import DetailPortfolio from './pages/DetailPortfolio'
import PagesNotFound from './pages/PagesNotFound'
import Experience from './pages/Experience'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio/:id' element={<DetailPortfolio />} />
        <Route path='/pages-not-found' element={<PagesNotFound />} />
        <Route path='/experince' element={<Experience/>} />
        <Route path='*' element={<PagesNotFound />} />
    </Routes>
  
  </BrowserRouter>
  )
}

export default App
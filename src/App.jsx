import { Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import Comics from './pages/Comics'
import Footer from './components/Footer'
import Home from './pages/Home'
import Inventory from './pages/Inventory'

function App() {
 
  return (
    <div id="bodyContainer">
      <Navbar />

      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App

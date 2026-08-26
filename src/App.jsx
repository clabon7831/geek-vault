import { useState } from 'react'  
import { Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import Comics from './pages/Comics'
import Footer from './components/Footer'
import Home from './pages/Home'
import Inventory from './pages/Inventory'

function App() {
 
  const [inventory, setInventory] = useState([])
  
  function addToInventory(movie) {
    let alreadyAdded = false

    for (let item of inventory) {
        if (item.id === movie.id) {
            alreadyAdded = true
        }
    }

    if (alreadyAdded === false) {
        setInventory([...inventory, movie])
    }
  }


  function deleteFromInventory(movie) {
    const updatedInventory = inventory.filter((item) => item !== movie)

    setInventory(updatedInventory)
}
  return (
    <div id="bodyContainer">
      <Navbar />

      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies addToInventory={addToInventory} />} />
          <Route path="/comics" element={<Comics addToInventory={addToInventory} />} />
          <Route path="/inventory" element={<Inventory inventory={inventory} deleteFromInventory={deleteFromInventory} />} />
        </Routes>
      </main>

      <Footer />
    </div>

  )
}

export default App

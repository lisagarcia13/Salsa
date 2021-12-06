import './App.css';
import { useState, useEffect } from 'react'
import { getSalsa } from './services'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Recipes from './components/Recipes'

function App() {

  const [salsa, setSalsa] = useState([])
  
  useEffect(() => {
    const grabSalsa = async () => {
      const res = await getSalsa()
      setSalsa(res)
    }
    grabSalsa()
  }, [])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<h2>Homepageeeee</h2>}/>
        <Route path='/create' element={<Form />}/>
        <Route path='/mild' element={<Recipes recipes={salsa} /> }/>
        <Route path='/medium' element={<h3>mediummmmm</h3>} />
        <Route path ='/hot' element={<h3>hot</h3>}/>
      </Routes>
    </div>
  );
}

export default App;

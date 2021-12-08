import './App.css';
import { useState, useEffect } from 'react'
import { getSalsa } from './services'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Recipes from './components/Recipes'
import StickyFooter from './components/StickyFooter';
import Homepage from './components/Homepage';

function App() {

  const [salsa, setSalsa] = useState([])
  const [toggle, setToggle] = useState(false)
  
  useEffect(() => {
    const grabSalsa = async () => {
      const res = await getSalsa()
      setSalsa(res)
    }
    grabSalsa()
  }, [toggle])
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/create' element={<Form setToggle={setToggle} />} />
        <Route path='/heat/:level' element={<Recipes recipes={salsa} setToggle={setToggle}  /> } />
      </Routes>
      <StickyFooter />
    </div>
  );
}

export default App;

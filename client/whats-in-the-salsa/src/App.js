import './App.css';
import { useState, useEffect } from 'react'
import { getSalsa } from './services'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Form from './components/Form'

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
      <h1>What's in the Salsa? </h1>
      <Routes>
        <Route path = '/'/>
        <Route path='/create' element={<Form />}/>
        <Route path ='/mild'/>
        <Route path='/medium' />
        <Route path ='/hot'/>
      </Routes>
    </div>
  );
}

export default App;

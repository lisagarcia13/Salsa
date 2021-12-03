import './App.css';
import { useState, useEffect } from 'react'
import { getSalsa } from './services'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Mild from './components/Mild'
import BasicMenu from './components/BasicMenu';

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
      {/* <BasicMenu /> */}
      <NavBar />
      <Routes>
        <Route path='/' element={null}/>
        <Route path='/create' element={<Form />}/>
        <Route path='/mild' element={<Mild mild={salsa} /> }/>
        <Route path='/medium' />
        <Route path ='/hot'/>
      </Routes>
    </div>
  );
}

export default App;

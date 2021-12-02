import './App.css';
import { useState, useEffect } from 'react'
import { getSalsa } from './services'

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
    </div>
  );
}

export default App;

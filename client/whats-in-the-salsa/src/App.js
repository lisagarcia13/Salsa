import './App.css';
import { useState, useEffect } from 'react'
import { getSalsa } from './services'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Form from './components/Form'
import Recipes from './components/Recipes'
import StickyFooter from './components/StickyFooter';
import Homepage from './components/Homepage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {green} from '@mui/material/colors'

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

  const theme = createTheme({
    palette: { primary: green,
      secondary: {
        main: '#c5e1a5',
      },
    
  }
})

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/create' element={<Form setToggle={setToggle} />} />
        <Route path='/heat/:level' element={<Recipes recipes={salsa} setToggle={setToggle}  /> } />
      </Routes>
      <StickyFooter />
      </ThemeProvider>
    </div>
  );
}

export default App;

import { useState} from "react"
import { postSalsa } from "../services"
import { useNavigate } from "react-router"
import { TextField } from "@mui/material"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export default function Form(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [heat, setHeat] = useState('Mild')
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()
    const newSalsa = {
      name,
      description,
      ingredients,
      steps,
      heat
      
    }
    const res = await postSalsa(newSalsa)
    props.setToggle(prevToggle => !prevToggle)
    if (res) {
      navigate('/')
    }
  }

  return (
    <div>
    <h2 className='form-title'>Add your Recipe!</h2>
    <form className= 'form' onSubmit={handleSubmit}>
      {/* <label>Name: </label>
        <input value={name} type='text' onChange={(e) => setName(e.target.value)} required></input> */}
        <TextField id="outlined-basic" label="Name" value={name} variant="outlined" size='small' onChange={(e) => setName(e.target.value)} required />
      <br />
      {/* <label> Description: </label>
      <input value={description} type='text' onChange={(e) => setDescription(e.target.value)} required></input> */}
         <TextField id="outlined-basic" label="Description" value={description} variant="outlined" onChange={(e) => setDescription(e.target.value)} required />
      <br />
      {/* <label> Ingredients: </label>
      <input value={ingredients} type='text' onChange={(e) => setIngredients(e.target.value)} required></input> */}
         <TextField id="outlined-basic" label="Ingredients" value={ingredients} variant="outlined" onChange={(e) => setIngredients(e.target.value)} multiline required />
      <br />
      {/* <label> Steps: </label>
        <input value={steps} placeholder='Insert steps in order' type='text' onChange={(e) => setSteps(e.target.value)} required></input> */}
        <TextField id="outlined-basic" label="Steps" value={steps} variant="outlined" onChange={(e) => setSteps(e.target.value)} multiline required />
        <br />

      {/* <div value={heat} >
        <label> Mild: </label>
        <input value= 'Mild' type='radio' checked={heat === 'Mild'} onChange={(e) => setHeat(e.target.value)} ></input>
        <br />
        <label> Medium: </label>
        <input value='Medium' type='radio' checked={heat === 'Medium'} onChange={(e) => setHeat(e.target.value)} ></input>
        <br />
        <label> Hot: </label>
        <input value='Hot' type='radio' checked={heat === 'Hot'} onChange={(e) => setHeat(e.target.value)} ></input>
        <br />
        </div> */}
 <FormControl component="fieldset">
  <FormLabel component="legend"></FormLabel>
  <RadioGroup
    aria-label="gender"
    name="controlled-radio-buttons-group"
    value={heat}
    onChange={(e) => setHeat(e.target.value)}
    row={true}
  >
    <FormControlLabel value='Mild' checked={heat === 'Mild'} control={<Radio />} label="Mild"  />
    <FormControlLabel value='Medium' checked={heat === 'Medium'} control={<Radio />} label="Medium" />
    <FormControlLabel value='Hot' checked={heat === 'Hot'} control={<Radio />} label="Hot" />
  </RadioGroup>
</FormControl>

      <button className='button'>Submit</button>
      </form>
      </div>
  )
}

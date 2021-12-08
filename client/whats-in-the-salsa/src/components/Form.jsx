import { useState} from "react"
import { postSalsa } from "../services"
import { useNavigate } from "react-router"
import { TextField } from "@mui/material/"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Typography from '@mui/material/Typography'
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles({
  field: {
    marginTop: 20,
  }
})

export default function Form(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [heat, setHeat] = useState('Mild')
  const navigate = useNavigate()
  const classes = useStyles()

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
      <Typography
        variant='h3'
        marginTop={10}
      >Add your Recipe!</Typography>
    <form className= 'form' onSubmit={handleSubmit}>
        <TextField className={classes.field} id="outlined-basic" label="Name" value={name} variant="outlined" size='small' onChange={(e) => setName(e.target.value)} required />
      <br />
        <TextField className={classes.field} id="outlined-basic" label="Description" value={description} variant="outlined" onChange={(e) => setDescription(e.target.value)} required />
      <br />
        <TextField className={classes.field} id="outlined-basic" label="Ingredients" value={ingredients} variant="outlined" onChange={(e) => setIngredients(e.target.value)}
          multiline rows={4} required />
      <br />
        <TextField className={classes.field} id="outlined-basic" label="Steps" value={steps} variant="outlined" onChange={(e) => setSteps(e.target.value)}
          multiline rows={5} required />
        <br />

      {/* <div value={heat} >
        <label> Mild: </label>
        <input value= 'Mild' type='radio' checked={heat === 'Mild'} onChange={(e) => setHeat(e.target.value)} ></input>
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
  <br />
        <Button type='submit' variant="contained" endIcon={<MenuBookIcon />} >Submit</Button>

  </form>
</div>
  )
}

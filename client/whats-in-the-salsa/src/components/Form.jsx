import { useState, useEffect } from "react"
import { postSalsa } from "../services"
import { useNavigate } from "react-router"


export default function Form(props) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  // const [rating, setRating] = useState('')
  const navigate = useNavigate()

  // useEffect(() => [

  // ], [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newSalsa = {
      name,
      description,
      ingredients,
      steps
      
    }
    const res = await postSalsa(newSalsa)
    props.setToggle(prevToggle => !prevToggle)
    if (res) {
      navigate('/')
    }
  }

 
  return (
    <div>
    <h2>Add your Recipe!</h2>
    <form className= 'form' onSubmit={handleSubmit}>
      <label>Name: </label>
      <input value={name} type='text' onChange={(e) => setName(e.target.value)} required></input>
      <br />
      <label> Description: </label>
      <input value={description} type='text' onChange={(e) => setDescription(e.target.value)} required></input>
      <br />
      <label> Ingredients: </label>
      <input value={ingredients} type='text' onChange={(e) => setIngredients(e.target.value)} required></input>
      <br />
      <label> Steps: </label>
        <input value={steps} placeholder='insert steps in order' type='text' onChange={(e) => setSteps(e.target.value)} required></input>
      <br />
      {/* <label> Spicy Rating: </label>
      <input value={rating} type='number' onChange={(e) => setRating(e.target.valueAsNumber)}></input> */}
        <button>Mild</button>
        <button>Medium</button>
        <button>Hot</button>
        <br />
      <button>Submit</button>
      </form>
      </div>
  )
}

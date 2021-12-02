import { useState } from "react"

export default function Form() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [rating, setRating] = useState('')


  return (
    <div>
    <h2>Add your Recipe!</h2>
    <form>
      <label>Name: </label>
      <input value={name} type='text' onChange={(e) => setName(e.target.value)}></input>
      <br />
      <label> Description: </label>
      <input value={description} type='text' onChange={(e) => setDescription(e.target.value)}></input>
      <br />
      <label> Ingredients: </label>
      <input value={ingredients} type='text' onChange={(e) => setIngredients(e.target.value)}></input>
      <br />
      <label> Steps: </label>
      <input value={steps} type='text' onChange={(e) => setSteps(e.target.value)}></input>
      <br />
      <label> Spicy Rating: </label>
      <input value={rating} type='number' onChange={(e) => setRating(e.target.valueAsNumber)}></input>
      <button>Submit</button>
      </form>
      </div>
  )
}

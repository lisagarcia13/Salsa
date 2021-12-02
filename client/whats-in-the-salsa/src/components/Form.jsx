import { useState } from "react"

export default function Form() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [rating, setRating] = useState('')


  return (
    <form>
      <input value={name} type='text' onChange={(e) => setName(e.target.value)}></input>
      <input value={description} type='text' onChange={(e) => setDescription(e.target.value)}></input>
      <input value={ingredients} type='text' onChange={(e) => setIngredients(e.target.value)}></input>
      <input value={steps} type='text' onChange={(e) => setSteps(e.target.value)}></input>
      <input value={rating} type='number' onChange={(e)=> setRating(e.target.valueAsNumber)}></input>
    </form>
  )
}

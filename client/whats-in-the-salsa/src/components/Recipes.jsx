import { deleteSalsa } from "../services"

export default function Recipes(props) {

  const handleDelete = async () => {
    const res = await deleteSalsa()
    props.setToggle(prevToggle => !prevToggle)
  }


  return (
    <div>
      {props.recipes.map(recipe => (
        <div key={recipe.id}>
        <h3>{recipe.fields.name}</h3>
          <p>{recipe.fields.description}</p>
          <p>{recipe.fields.ingredients} </p>
          <p>Steps: {recipe.fields.steps}</p>
          <h4>Spicy Rating: {recipe.fields.rating}</h4>
          <button onClick={handleDelete}>Delete</button>
        </div>
        
      ))}
      
    </div>
  )
}


// props.spicy === 3 && navigate '/mild'
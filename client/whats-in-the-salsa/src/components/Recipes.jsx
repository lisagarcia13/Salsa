import { useParams } from "react-router-dom"


export default function Recipes(props) {
  const { level } = useParams()
  
  const salsaLevel = props.recipes.filter((recipe) => {
    return recipe.fields.heat === level
  })
  return (
    <div className="card">
      {salsaLevel.map(recipe => (
        <div className="recipe" key={recipe.id}>
          <h1>{recipe.fields.name}</h1>
          <h3>Description:</h3>
          <p className="description">{recipe.fields.description}</p>
          <h3> Ingredients:</h3>
          <p className="ingredients">{recipe.fields.ingredients}</p>
          <h3> Directions:</h3>
          <p className="steps">{recipe.fields.steps}</p>
          <h3>Spicy Rating: {recipe.fields.heat}</h3>
        </div>
      ))}
        
    </div>
  )
}

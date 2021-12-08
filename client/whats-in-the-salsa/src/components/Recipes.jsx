import { useParams } from "react-router-dom"


export default function Recipes(props) {
  const { level } = useParams()
  
  const salsaLevel = props.recipes.filter((recipe) => {
    return recipe.fields.heat === level
  })

  return (
    <div>
      {salsaLevel.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.fields.name}</h3>
          <p>{recipe.fields.description}</p>
          <p>{recipe.fields.ingredients} </p>
          <p>Steps: {recipe.fields.steps}</p>
          <h4>Spicy Rating: {recipe.fields.heat}</h4>
         
        </div>
          
      ))}
        
    </div>
  )
}

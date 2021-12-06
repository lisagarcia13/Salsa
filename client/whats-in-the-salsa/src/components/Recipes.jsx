

export default function Recipes(props) {

  return (
    <div>
      <h2>Mild</h2>
      {props.recipes.map(recipe => (
        <div key={recipe.id}>
        <h3>{recipe.fields.name}</h3>
          <p>{recipe.fields.description}</p>
          <p>{recipe.fields.ingredients} </p>
          <p>Steps: {recipe.fields.steps}</p>
          <h4>Spicy Rating: {recipe.fields.rating }</h4>
        </div>
      ))}
    </div>
  )
}


// props.spicy === 3 && navigate '/mild'
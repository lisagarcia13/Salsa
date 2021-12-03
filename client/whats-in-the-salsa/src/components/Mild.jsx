import { Link } from "react-router-dom"

export default function Mild(props) {
  return (
    <div>
      {props.mild.map(milds => (
       <h4 key={milds.id}>{milds.fields.title}</h4> 
      ))}
    </div>
  )
}

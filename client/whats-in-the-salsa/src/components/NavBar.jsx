import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/create'>Create Salsa</Link>
      <Link to='/mild'>Mild</Link>
      <Link to='/medium'>Medium</Link>
      <Link to='/hot'>Hot</Link>
    </div>
  )
}

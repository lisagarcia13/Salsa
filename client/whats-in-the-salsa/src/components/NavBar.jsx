import BasicMenu from './BasicMenu'
import Typography from '@mui/material/Typography'

export default function NavBar() {
  return (
    <div className='title'>
      <Typography
        variant='h2'
      >
        What's in the Salsa?
      </Typography>
      <BasicMenu />
    </div>
  )
}

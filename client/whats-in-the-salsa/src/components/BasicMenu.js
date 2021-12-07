import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        
      >
        
        <MenuItem onClick={handleClose} >
        <Link to='/'>Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/create' textDecoration='none'>Create Salsa</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/heat/Mild'>Mild</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/heat/Medium'>Medium</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to='/heat/Hot'>Hot</Link></MenuItem>
      </Menu>
    </div>
  );
}
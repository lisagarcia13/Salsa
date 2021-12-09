import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Link } from 'react-router-dom';


export default function BasicMenu() {

  return (
    <div>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Menu
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}> <Link to='/' className='nav'>Home</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className='nav' to='/create'>Create Salsa</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className='nav' to='/heat/Mild'>Mild</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className='nav' to='/heat/Medium'>Medium</Link></MenuItem>
            <MenuItem onClick={popupState.close}><Link className='nav' to='/heat/Hot'>Hot</Link></MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </div>
  );
}
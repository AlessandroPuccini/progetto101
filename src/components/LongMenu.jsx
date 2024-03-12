import * as React from 'react';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const options = [
  'MAN',
  'WOMAN',
  'CATALOG',
  'ABOUT',
  'CONTACTS',
];
const ITEM_HEIGHT = 68;

export default function LongMenu() {
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
      <DensityMediumIcon
        fontSize='large'
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        
      </DensityMediumIcon>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '15ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option}  >
            <Link to={`/progetto101/${option}`}>{option}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
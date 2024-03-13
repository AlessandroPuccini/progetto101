import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Cart from './Cart.jsx';
import Badge from './Badge.jsx';
import { useSelector } from 'react-redux';
import '../style/temporaryDrawer.css';


export default function TemporaryDrawer(props) {
  const { window } = props;
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const drawerWidth = 240;

  const list = (anchor) => (
    <Box
    sx={{ width: drawerWidth }}
    role="presentation"
    onKeyDown={toggleDrawer(anchor, false)}
    >
     <Cart />
    </Box>
  );
 
  const cartShoes = useSelector((state) => state.cart.cartItems);
  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className='drawer-cart'>
        {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={toggleDrawer(anchor, true)}><Badge withNumber={cartShoes.length}/></button>
          <Drawer
          container={container}
            variant="temporary"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}



{/* <Box
      sx={{ width: drawerWidth }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    ></Box> */}
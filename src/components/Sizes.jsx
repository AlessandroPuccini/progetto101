import * as React from 'react';
import { Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey, grey } from '@mui/material/colors';






const theme = createTheme({
  palette: {
    primary: {
      main: grey[900], 
    }, 
    secondary: {
      main: blueGrey[900],
    },
  },
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Sizes() {

  return (
    <>
    <div>
      <h5>Choose your size</h5>
    </div>
    <hr></hr>
    <div className='sizes'>
        <ThemeProvider theme={theme}>
        <Button size='large'><Checkbox {...label}  sx={{width:20}}>
          </Checkbox> 35</Button>
        <Button size='large'><Checkbox {...label} sx={{width:20}}>
          </Checkbox> 36</Button>
        <Button size='large'><Checkbox {...label} sx={{width:20}}>
          </Checkbox> 37</Button>
        <Button size='large'><Checkbox {...label}  sx={{width:20}}>
          </Checkbox> 38</Button>
        <Button size='large'><Checkbox {...label}  sx={{width:20}}>
          </Checkbox> 39</Button>
        <Button size='large'><Checkbox {...label} sx={{width:20}}>
          </Checkbox> 40</Button>
        <Button size='large'><Checkbox {...label} sx={{width:20}}>
          </Checkbox> 41</Button>
        <Button size='large'><Checkbox {...label} sx={{width:20}}>
          </Checkbox> 42</Button>
        <Button size='large'><Checkbox {...label}  sx={{width:20}}>
          </Checkbox> 43</Button>
        <Button size='large'><Checkbox {...label} sx={{width:20}}>
          </Checkbox> 44</Button>
        <Button size='large'><Checkbox {...label} sx={{width:20}}>
          </Checkbox> 45</Button>
       
        </ThemeProvider>
    </div>
    </>
  );
}
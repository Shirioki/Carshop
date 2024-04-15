import { useState } from 'react'
import './App.css'
import Carlist from './components/Carlist';
import { AppBar, Toolbar, Typography} from '@mui/material';


function App() {

  return (
    <div className="App">
      <AppBar position="static" color=''>
        <Toolbar>
          <Typography variant="h6">
            Car Shop
          </Typography>
        </Toolbar>
      </AppBar>
      <Carlist />
    </div>
  )
}

export default App

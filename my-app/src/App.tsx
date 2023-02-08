import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { useAutocomplete } from '@mui/base';
import Button from '@mui/material/Button';


function LandingPage(props: any) {

  const [newGame, setNewGame] = useState(false);

  interface State {
    name: string;
    gamecode: string;
  }

  const [values, setValues] = useState<State>({
    name: '',
    gamecode: ''
  });

  const handleChange = 
    (prop: keyof State) => 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
        
    };

  const isNewGame = () => {
      setNewGame(newGame);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                
        <TextField 
          sx={{ m: 2 }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={handleChange('name')} 
        />
        <TextField
          sx={{ m: 2 }}
          id="outlined-basic"
          label="Game Code"
          variant="outlined"
          onChange={handleChange('gamecode')} 
        />
        <Button 
          sx={{ m: 2 }}
          onClick={isNewGame}
          variant="contained"
          size="large">
            Start New Game</Button>
        
      </header>
    </div>
  );
}

export default LandingPage;

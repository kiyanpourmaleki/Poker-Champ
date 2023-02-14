import React, {useEffect, useState} from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


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
    <div className="backgroundImage">
      <header className="App-header">
        <Typography variant="h4" color="black">WELCOME TO</Typography>
        <Typography variant="h1" color="black">POKER CHAMP</Typography>
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

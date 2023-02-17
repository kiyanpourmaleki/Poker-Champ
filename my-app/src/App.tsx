import React, {useEffect, useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LandingPage(props: any) {
  const [ name, setName] = useState("")
  const [ gamecode, setGameCode] = useState("")
  const [ newGame, setNewGame ] = useState("");
  const [ existingGame, setExistingGame ] = useState("");

  const isNewGame = () => {
      setNewGame(newGame);
  }

  const joinGame = () => {
      setExistingGame(existingGame)
      alert(`Name:${name} \nGamecode: ${gamecode}`)
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
            name="name"
            onChange={e => setGameCode(e.target.value)} 
          />
          <TextField
            sx={{ m: 2 }}
            id="outlined-basic"
            label="Game Code"
            variant="outlined"
            name="gamecode"
            onChange={e => setName(e.target.value)} 
          />
          <Button 
            sx={{ m: 2 }}
            onClick={joinGame}
            variant="contained"
            size="large">
            Join Game</Button>
          <Typography variant="subtitle1" color="black">--------or--------</Typography>
          <Link to={`NewPage`}>
          <Button
            sx={{ m: 2 }}
            onClick={isNewGame}
            variant="contained"
            size="large">
            Start New Game</Button></Link>
      </header>
    </div>    
  );
}

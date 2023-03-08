import React, {useEffect, useState } from 'react';
import './LandingPage.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { useLocation } from 'react-router-dom';

export default function LandingPage(props: any) {
  const location = useLocation()
  const [ username, setUsername ] = location.state.username
  const [ gamecode, setGameCode] = useState("")
  const [ newGame, setNewGame ] = useState("");
  const [ existingGame, setExistingGame ] = useState("");

  const isNewGame = () => {
      setNewGame(newGame);
  }

  const joinGame = () => {
      setExistingGame(existingGame)
      alert(`Name: ${username} \nGamecode: ${gamecode}`)
  }

  return (
    <body>
      <button onClick={joinGame}></button>
    <div style={{width: '100%', height: 'auto', top: '0px', bottom: '0px', left: '0' }}>
      <Navbar status='home'/>
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
              onChange={e => setUsername(e.target.value)} 
            />
            <TextField
              sx={{ m: 2 }}
              id="outlined-basic"
              label="Game Code"
              variant="outlined"
              name="gamecode"
              onChange={e => setGameCode(e.target.value)} 
            />
            <Button
              disabled={!username || !gamecode} 
              sx={{ m: 2 }}
              onClick={joinGame}
              variant="contained"
              size="large"
            >
              <Link 
                to='/JoinGame' 
                style={{textDecoration: 'none', color: 'white'}} 
                state={{playername:username, gamecode:gamecode}}
              >
                Join Game
              </Link>
            </Button>
            <Typography variant="subtitle1" color="black">--------or--------</Typography>
            <Button
              sx={{ m: 2 }}
              onClick={isNewGame}
              variant="contained"
              size="large"
            >
              <Link
                to='/NewGame'
                style={{textDecoration: 'none', color: 'white'}}
              >
                Start New Game
              </Link>
            </Button>
        </header>
      </div>
    </div>   
    </body>
  );
}

import React, { useEffect, useState } from 'react';
import './LandingPage.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";

export default function LandingPage(props: any) {

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
        setName(data.name);
      } catch (error) {
        console.error(error);
        alert("An error occurred while fetching user data");
      }
    };

    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, error, loading, navigate]);

  const [ gamecode, setGameCode] = useState("")
  const [ newGame, setNewGame ] = useState("");
  const [ existingGame, setExistingGame ] = useState("");

  const isNewGame = () => {
      setNewGame(newGame);
  }

  const joinGame = () => {
      setExistingGame(existingGame)
      alert(`Name: ${name} \nGamecode: ${gamecode}`)
  }

  return (
    <body>
      <div style={{width: '100%', height: 'auto', top: '0px', bottom: '0px', left: '0' }}>
        <Navbar page='home' status='logged in' user={name}/>
        <div className="backgroundImage">
          <header className="App-header">
            <Typography variant="h4" color="black">WELCOME TO</Typography>
            <Typography variant="h1" color="black">POKER CHAMP</Typography>
              
              {/* <TextField
                sx={{ m: 10 }}
                id="outlined-basic"
                label="Game Code"
                variant="outlined"
                name="gamecode"
                onChange={e => setGameCode(e.target.value)} 
              /> */}
              <p>Logged in as
                <div>{name}</div>
              </p>

              <Button
                disabled={!gamecode} 
                sx={{ m: 2 }}
                onClick={joinGame}
                variant="contained"
                size="large"
              >
                <Link 
                  to='/JoinGame' 
                  style={{textDecoration: 'none', color: 'white'}} 
                  state={{playername:name, gamecode:gamecode}}
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

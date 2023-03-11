import './JoinGame.css';
import { Typography, Button } from '@mui/material';
import { Link, Route, Routes, useLocation} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Navbar from '../../components/navbar';
import React from 'react';
import cardBack from './Card_Back.jpg'



export default function DisplayNewGame(props: any) {
    

    const test = () => {
        alert(`Name: ${name} \nGamecode: ${gamecode}`)
    }

    const location = useLocation()
    const name  = location.state.playername
    const gamecode = location.state.gamecode
    return(
        <div className="backgroundImage2">
            <Navbar status='in game'/>            
            <div className='tableJ'>
                <Typography variant='h2' color='white'>{gamecode}</Typography>
                <div className='comunityCards'>
                    <img src={cardBack} alt="Back of Cards" />
                    <img src={cardBack} alt="Back of Cards" />
                    <img src={cardBack} alt="Back of Cards" />
                    <img src={cardBack} alt="Back of Cards" />
                    <img src={cardBack} alt="Back of Cards" />
                </div>
                <div className='pot'>
                    <Typography variant="h1" color="black">POT</Typography>
                </div>
                <div className='you'>
                    <Typography variant='h4' color='white'>{name}</Typography>
                </div>
            </div>
        </div>

        
    );
}
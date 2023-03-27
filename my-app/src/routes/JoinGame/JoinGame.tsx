import './JoinGame.css';
import { Typography } from '@mui/material';
import { Link, Route, Routes, useLocation} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Navbar from '../../components/navbar';
import React, {Fragment, useEffect, useState} from 'react';
import cardBack from './Card_Back.jpg'
import { json } from 'stream/consumers';

export default function DisplayNewGame(props: any) {
    const location = useLocation();
    const name  = location.state.playername;
    const gamecode = location.state.gamecode;
    var deck: any;
    
    function createDeack() {
        while (true) {
            fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
                .then(res => res.json())
                .then((deckInfo) => deck = JSON.parse(deckInfo));
            break;
        }
    }

    const test = () => {
        alert(`Name: ${name} \nGamecode: ${gamecode}`)
    }
    
    console.log(deck);
    console.log(deck)
    const dealPlayer = () => {
        console.log(deck);

    }

    

    return(
        <div className="backgroundImage2" onLoad={createDeack}>
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
                    <button onClick={dealPlayer}>Ready</button>
                </div>
            </div>
        </div>

        
    );
}

function deckUpdate(deckInfo: any): any {
    throw new Error('Function not implemented.');
}

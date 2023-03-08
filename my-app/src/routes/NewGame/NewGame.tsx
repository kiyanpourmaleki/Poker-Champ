import './NewGame.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Navbar from '../../components/navbar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function DisplayNewGame() {
    return(
        <body>
            <div className="backgroundImage2">
                <Navbar status='new game'/>
                <div className='table'></div>
                
            </div>
        </body>
    );
}
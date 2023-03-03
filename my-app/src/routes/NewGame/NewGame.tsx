import './NewGame.css';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Navbar from '../../components/navbar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function GoBack(){
    return(
        <Link to="/">
        <Button
            sx={{ m: 2 }}
            variant="contained"
            size="large">
            Go Back</Button></Link>
    );
}

export default function DisplayNewGame() {
    return(
        <div className="backgroundImage2">
            <Navbar status='new game'/>
            <GoBack />
            <div className='table'></div>
            
        </div>

        
    );
}
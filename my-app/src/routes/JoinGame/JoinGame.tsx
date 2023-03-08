import './JoinGame.css';
import { Typography, Button } from '@mui/material';
import { Link, Route, Routes, useLocation} from 'react-router-dom';
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


export default function DisplayNewGame(props: any) {

    const test = () => {
        alert(`Name: ${name} \nGamecode: ${gamecode}`)
    }

    const location = useLocation()
    const name  = location.state.playername
    const gamecode = location.state.gamecode
    return(
        <body>
            <div className="backgroundImage2">
                <Navbar status='in game'/>
                <Button
                sx={{ m: 2 }}
                onClick={test}
                variant="contained"
                size="large">
                Test</Button>
                
                <div className='table'>
                </div>
            </div>
        </body>

        
    );
}
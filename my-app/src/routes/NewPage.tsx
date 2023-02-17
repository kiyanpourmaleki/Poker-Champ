import '../App.css';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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

export default function DisplayNewPage() {
    return(
        <div className="backgroundImage2">
            <header className="New-Game-Header">
                <Typography variant="h1" color="white">New Game!</Typography>
                <GoBack />
            </header>
        </div>
    );
}
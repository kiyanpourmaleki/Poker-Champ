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
        <div className="backgroundImage">
            <header className="New-Game-Header">
                <Typography variant="h1" color="black">New Game!</Typography>
                <GoBack />
            </header>
        </div>
    );
}
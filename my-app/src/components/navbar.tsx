import * as React from 'react';
import './navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { logout } from '../firebase';

export default function Navbar(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
    const open = Boolean(anchorEl);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#3D9970', borderBottom: 2, borderColor: '#2ECC40'}}>
                <Toolbar>
                    <button
                    className='menuButton'
                    onClick={handleClick}>
                        <MenuIcon />
                    </button>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}>
                    <div>
                        {props.status != 'home' ? <MenuItem><Link to="/" style={{textDecoration: 'none', color: 'black'}}>Return to Home</Link></MenuItem> : <MenuItem onClick={logout}>Logout</MenuItem>}
                    </div>
                    </Menu>
                    <p color="inherit">{props.status}</p>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

import './NewGame.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Navbar from '../../components/navbar';
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function DisplayNewGame() {
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

    return(
        <div className="backgroundImage2">
            <Navbar page='new game' status='logged in' user={name}/>
            <div className='table'></div>
            
        </div>

        
    );
}
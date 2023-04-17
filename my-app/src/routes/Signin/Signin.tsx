import './Signin.css'; 
import React, {useEffect, useState} from 'react';
import {  auth, logInWithEmailAndPassword, registerWithEmailAndPassword   } from '../../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ user, loading, error ] = useAuthState(auth);
    const navigate = useNavigate()
    
    useEffect(() => {
        const handleNavigation = () => {
          if (user) {
            navigate("/LandingPage");
          }
        };
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        handleNavigation();   
      }, [user, error, loading, navigate]);

    return (
        <body>
            <div className="main">
                <input type="checkbox" id='chk' aria-hidden='true'></input>
                <div className='signup'>
                    <form>
                        <label htmlFor="chk">
                            Sign Up
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}  
                            required                                    
                            placeholder="Email address"                                
                        ></input>
                        <input
                            type="name"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                            required                                 
                            placeholder="Username"              
                        ></input>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            required                                 
                            placeholder="Password"              
                        ></input>
                        <button
                            disabled={!email || !password} 
                            type="submit" 
                            onClick={() => registerWithEmailAndPassword(name, email, password)}                        
                        >  
                            Sign up                                
                        </button>                                             
                    </form>
                </div>
                <div className='login'>
                    <form>                                              
                        <div>
                            <label htmlFor="chk" aria-hidden="true">
                                Login
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"                                    
                                required                                                                                
                                placeholder="Email address"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"                                    
                                required                                                                                
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button onClick={() => logInWithEmailAndPassword(email, password)}
                                style={{textDecoration: 'none', color: 'white'}} 
                                >
                                Login
                            </button>
                        </div>                               
                    </form>
                </div>
            </div>
        </body>
    )
}
 
export default Signin

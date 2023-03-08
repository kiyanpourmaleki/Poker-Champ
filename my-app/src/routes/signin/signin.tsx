import './signin.css'; 
import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { ref, set } from 'firebase/database';

const Signin = () => {

    const navigate = useNavigate();
 
    const [ email, setEmail ] = useState('')
    const [password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
 
    const onSubmit = (e: any) => {
      e.preventDefault()
     
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/LandingPage")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
    }
    const onLogin = (e: any) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/LandingPage")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

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
                        onChange={(e) => setEmail(e.target.value)}  
                        required                                    
                        placeholder="Email address"                                
                    ></input>
                    <input
                        type="userid"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        required                                    
                        placeholder="Username"                                
                    ></input>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required                                 
                        placeholder="Password"              
                    ></input>
                    <button
                        disabled={!email || !password || !name} 
                        type="submit" 
                        onClick={onSubmit}                        
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
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        id="password"
                        name="password"
                        type="password"                                    
                        required                                                                                
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                                    
                <div>
                    <button    
                                                    
                        onClick={onLogin}                                        
                    >      
                        <Link to="/LandingPage" 
                            style={{textDecoration: 'none', color: 'white'}} 
                            state={{username:name}}>
                                Login
                        </Link>
                    </button>
                </div>                               
            </form>
            </div>
        </div>
    </body>
  )
}
 
export default Signin
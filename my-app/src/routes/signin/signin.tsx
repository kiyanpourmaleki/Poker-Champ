import './signin.css'; 
<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword, 
    createUserWithEmailAndPassword } 
    from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc } 
  from "firebase/firestore";
import { useNavigate } from "react-router-dom";
=======
import React, {useState} from 'react';
import {  Link, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { ref, set } from 'firebase/database';
>>>>>>> 1c18b55af719a5dc9b8ba7459413e69058c6e60a

const Signin = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('');
   // const [user, loading, error] = useAuthState(auth);
    const [ name, setName ] = useState('');

    const navigate = useNavigate();
<<<<<<< HEAD
=======
 
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
            navigate("/LandingPage", {state: {username:email}})
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
>>>>>>> 1c18b55af719a5dc9b8ba7459413e69058c6e60a

    // useEffect(() => {
    //     if (loading) return;
    //     if (user) navigate("/dashboard");
    //   }, [user, loading]);

    const logInWithEmailAndPassword = async (email: any, password: any) => {
        try {
          await signInWithEmailAndPassword(auth, email, password);
          navigate("/LandingPage");
        } catch (err) {
          console.error(err);
        }
      };
      const registerWithEmailAndPassword = async (name: any, email: any, password: any) => {
        try {
          const res = await createUserWithEmailAndPassword(auth, email, password);
          const user = res.user;
          console.log(`signed in as ${user}`);
          navigate("/LandingPage")
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
          });
        } catch (error: any) {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.log(errorCode, errorMessage);
          console.error(error);
          alert(error.message);
        }
      };

return (
    <>
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
<<<<<<< HEAD
                        type="name"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        required                                 
                        placeholder="Username"              
                    ></input>
                    <input
=======
>>>>>>> 1c18b55af719a5dc9b8ba7459413e69058c6e60a
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
<<<<<<< HEAD
                    <button onClick={() => logInWithEmailAndPassword(email, password)}
=======
                    <button onClick={onLogin}
>>>>>>> 1c18b55af719a5dc9b8ba7459413e69058c6e60a
                        style={{textDecoration: 'none', color: 'white'}} 
                        >
                        Login
                    </button>
                </div>                               
            </form>
            </div>
        </div>
    </>
  )
}
 
export default Signin

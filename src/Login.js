/*eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';


function Login() {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //console.log("EMl & PASS :",email,password);

    const signIn = e => {

        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(err => alert(err.message))
    }

    const register = e => {

        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(err => alert(err.message))
    }
    
    
    return (
        <div className='login'>

           <Link to='/'>
            <img 
                className='login__logo' 
                src={require('./images/amazon_PNG24.png').default} 
            />
           </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={ e => setPassword(e.target.value)} />
                    
                    <button className='loginContainer__signin' onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the . By signing-in you agree to the By signing-in you agree to the By signing-in you agree to the By signing-in you agree to the .
                </p>
                <button className='login__registerButton' onClick={register}>Create your amazon account</button>
            </div>

        </div>
    )
}

export default Login;

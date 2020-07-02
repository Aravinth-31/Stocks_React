import React, { useState } from 'react';
import './styles/form.css';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {logIn} from '../actions';

const login = (event,email,password,dispatch) => {
    event.preventDefault();
    if(email==='admin@gmail.com'&&password==='12345'){
        setTimeout(()=>{dispatch(logIn())},2000);
        toast.success('Logged In Successfully', { position: toast.POSITION.TOP_CENTER });
    }
    else{
        toast.error("Invalid Username or Password", { position: toast.POSITION.TOP_CENTER });
    }
}
export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    return (
        <div className="login">
            <ToastContainer transition={Zoom} autoClose={2000}></ToastContainer>
            <div className="login-triangle"></div>
            <h2 className="login-header">Log in</h2>
            <form className="login-container" onSubmit={(e) => login(e,email,password,dispatch)}>
                <p><input type="email" placeholder="Email" name='email' onChange={(e)=>setEmail(e.target.value)} /></p>
                <p><input type="password" placeholder="Password" name='password' onChange={(e)=>setPassword(e.target.value)} /></p>
                <p><input type="submit" value="Log in" /></p>
            </form>
        </div>
    );
}
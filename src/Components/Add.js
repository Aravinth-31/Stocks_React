import React, { useState } from 'react';
import './styles/add.css';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {add} from '../actions';

export default function Add() {
    const [name,setName]=useState('');
    const [type,setType]=useState('');
    const [price,setPrice]=useState(0);
    const [count,setCount]=useState(0);
    const dispatch=useDispatch();
    
    const addStock=(e)=>{
        e.preventDefault();
        var obj={name,type,price,count};
        dispatch(add(obj));
        toast.success("Product Added To The Stocks", { position: toast.POSITION.TOP_CENTER });
        setName('');
        setType('');
        setPrice(0);
        setCount(0);
    }
    
    return (
        <div>
            <ToastContainer transition={Zoom} autoClose={2000}></ToastContainer>
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1"></div>
                <div className="col-lg-11 col-md-11 col-sm-11">
                    <div className="login">
                        <div className="login-triangle"></div>
                        <h2 className="login-header">ADD STOCK</h2>
                        <form className="login-container" onSubmit={(e)=>addStock(e)}>
                            <p><input type="text" placeholder="Product Name" value={name} onChange={(e)=>setName(e.target.value)} required /></p>
                            <p><input type="text" placeholder="Product Type" value={type} onChange={(e)=>setType(e.target.value)} required /></p>
                            <p><input type="numbers" placeholder="Product Price" value={price?price:''} onChange={(e)=>setPrice(e.target.value)} required /></p>
                            <p><input type="numbers" placeholder="Number Of Products Available" value={count?count:''} onChange={(e)=>setCount(e.target.value)} required /></p>
                            <p><input type="submit" value="ADD" /></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
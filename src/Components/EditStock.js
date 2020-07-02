import React, { useEffect ,useState} from 'react';
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editStock,deleteStock } from '../actions';
import {useDispatch} from 'react-redux';

export default function EditSock(props) {
    const [name,setName]=useState('');
    const [type,setType]=useState('');
    const [price,setPrice]=useState(0);
    const [count,setCount]=useState(0);
    const [index,setIndex]=useState();
    useEffect(()=>{
        var obj=JSON.parse(props.match.params.stock);
        console.log(obj);
        setName(obj.name);
        setType(obj.type);
        setPrice(obj.price);
        setCount(obj.count);
        setIndex(obj.index);
    },[props.match.params.stock]);
    const dispatch=useDispatch();
    const edit=(e)=>{
        e.preventDefault();
        var obj={name,type,price,count}
        dispatch(editStock(index,obj));
        toast.success('Stock Details Saved', { position: toast.POSITION.TOP_CENTER });
        setTimeout(()=>{window.location.replace("https://github.com/Aravinth-thunder/Stocks/dashboard")},2000);
    }
    const deletestock= e =>{
        e.preventDefault();
        dispatch(deleteStock(index));
        toast.error('Stock Data Deleted', { position: toast.POSITION.TOP_CENTER });
        setTimeout(()=>{window.location.replace("https://github.com/Aravinth-thunder/Stocks/dashboard")},2000);
    }
    return (
        <div className="row">
            <ToastContainer transition={Zoom} autoClose={2000}></ToastContainer>
            <div className="col-lg-2 col-md-2 col-sm-2"></div>
            <div className="col-lg-10 col-md-10 col-sm-10">
                <div className="login">
                    <div className="login-triangle"></div>
                    <h2 className="login-header">EDIT STOCK</h2>
                    <form className="login-container">
                        <p><input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required /></p>
                        <p><input type="text" placeholder="Roll No" value={type} onChange={(e)=>setType(e.target.value)} required /></p>
                        <p><input type="numbers" placeholder="Roll No" value={price} onChange={(e)=>setPrice(e.target.value)} required /></p>
                        <p><input type="numbers" placeholder="Roll No" value={count} onChange={(e)=>setCount(e.target.value)} required /></p>
                        <p><input type="submit" value="SAVE"  onClick={edit}/></p>
                        <p><input type="submit" value="DELETE" onClick={(e)=>deletestock(e)}/></p>
                    </form>
                </div>
            </div>
        </div>
    );
}
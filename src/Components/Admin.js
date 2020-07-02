 import React from 'react';
import Login from './Login';
import Add from './Add';
import { useSelector} from 'react-redux';

export default function Admin(){
    const logged=useSelector(state=>state.logged);
    if(logged)
        return(<Add></Add>);
    else
        return(<Login></Login>);
}
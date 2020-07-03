import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './styles/dashboard.css';
import { reduce,addIncome,addCount,addItem } from '../actions';

function Dashboard() {
    const stocks = useSelector(state => state.stock);
    const loggedin = useSelector(state => state.logged);
    const dispatch = useDispatch();
    const [key, setKey] = useState(0);
    const reducer = (e, index) => {
        e.preventDefault();
        dispatch(addItem(stocks[index]));
        dispatch(addIncome(stocks[index].price));
        dispatch(reduce(index));
        dispatch(addCount());
        setKey(key + 1);
    }
    const edit=(e,stock,index)=>{
        e.preventDefault();
        stock={...stock,index:index};
        window.location.replace("https://aravinth-thunder.github.io/Stocks/#/edit/"+JSON.stringify(stock));
    }
    console.log(stocks);
    return (
        <div className="DashBoard" key={key}>
            <div className="row">
                <div className="col-md-2 col-lg-2"></div>
                <div className="col-md-10 col-lg-10">
                    <h2 style={{ marginLeft: '10%' }}>Stocks : </h2><br /><hr></hr>
                    {stocks.length ?
                        stocks.map((stock, index) =>
                            <div className="card" key={stock.name.toString()}>
                                <div className="card-horizontal">
                                    <div className="card-body" >
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3">
                                                <h4>Product Name:<br /></h4><h3>{stock.name}</h3>
                                            </div>
                                            <div className="col-lg-2 col-md-2">
                                                <h4>Type:<br /></h4><h3>{stock.type}</h3>
                                            </div>
                                            <div className="col-lg-2 col-md-2">
                                                <h4>Price:<br /></h4><h3>{stock.price}</h3>
                                            </div>
                                            <div className="col-lg-2 col-md-2">
                                                <h4>Count:<br /></h4><h3>{stock.count}</h3>
                                            </div>
                                            {loggedin ? <>
                                                <div className="col-lg-1 col-md-1">
                                                    <button className="ripple" onClick={(e) => reducer(e, index)}>Sell</button>
                                                </div>
                                                <div className="col-lg-2 col-md-2">
                                                    <button className="ripple" onClick={(e) => edit(e,stock,index)}>Edit</button>
                                                </div> </> : null
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        <h2 style={{ marginLeft: '15%',opacity:'0.7' }}>No Stocks Available</h2>
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
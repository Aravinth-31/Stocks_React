import React from 'react';
import { useSelector } from 'react-redux';

export default function TotalIncome() {
    const stocks = useSelector(state => state.stock);
    const income = useSelector(state =>state.income);
    const count = useSelector(state =>state.count);
    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-md-3"></div>
                <div className="col-lg-5 col-md-5">
    <h2 style={{opacity:'0.8'}}>Total Income : {income}</h2>
                </div>
                <div className="col-lg-4 col-md-4">
    <h2 style={{opacity:'0.8'}}>Total Count : {count}</h2>
                </div>
            </div>
            <hr/>
            <h2 style={{ marginLeft: '25%',textDecoration:'underline' }}><i>SOLD STOCKS : </i></h2>
            <div className="row">
                <div className="col-lg-2 col-md-2"></div>
                <div className="col-lg-10 col-md-10">
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
                                            <div className="col-lg-5 col-md-5">
                                                <h4>Count:<br /></h4><h3>{stock.count}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                        :
                        <h3 style={{ marginLeft: '10%' }}>No Stocks Available</h3>
                    }
                </div>
            </div>
        </div>
    );
}
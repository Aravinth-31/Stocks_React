const incomeReducer = (state=0,action)=>{
    switch(action.type){
        case 'ADDINCOME':
            return state+action.amount;
        default:
            return state;
    }
}  

export default incomeReducer;
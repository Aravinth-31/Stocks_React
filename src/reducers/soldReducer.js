const soldReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADDITEM':
            for(var i=0;i<state.length;i++){
                if(state[i].name===action.data.name && state[i].type===action.data.type && state[i].price===action.data.price){
                    state[i].count+=1;
                    return state;
                }
            }
            var obj={name:action.data.name,type:action.data.type,price:action.data.price,count:1};
            state=[...state,obj];
            return state;
        default:
            return state;
    }
}

export default soldReducer;
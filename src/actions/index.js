export const logIn = ()=>{
    return {
        type:'SIGN_IN'
    };
};

export const logOut = ()=>{
    return {
        type:'SIGN_OUT'
    };
};

export const add = (stock)=>{
    return {
        type:'ADD',
        data:stock
    }
}

export const reduce =(pos)=>{
    return{
        type:'REDUCE',
        index:pos
    }
}

export const editStock = (pos,obj) =>{
    return {
        type:'EDIT',
        data:obj,
        index:pos
    }
}

export const deleteStock = (pos) =>{
    return {
        type:'DELETE',
        index:pos
    }
}

export const addIncome = (data) =>{
    return {
        type:'ADDINCOME',
        amount:data
    }
}

export const addCount = () =>{
    return {
        type:'ADDCOUNT'
    }
}

export const addItem = (item) =>{
    return {
        type:'ADDITEM',
        data:item
    }
}
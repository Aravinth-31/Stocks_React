const products = [
    { name: 'Iphone-X', type: 'Mobile', price: 30000, count: 10 },
    { name: 'Lenovo', type: 'Laptop', price: 28000, count: 5 },
    { name: 'boAt Rockerz 255F', type: 'HeadSet', price: 1399, count: 15 },
    { name: 'POCO F1', type: 'Mobile', price: 18999, count: 3 }
];

const stockReducer = (state = products, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.data];
        case 'REDUCE':
            state[action.index].count = state[action.index].count - 1;
            if (state[action.index].count === 0)
                state.splice(action.index, 1);
            return state;
        case 'EDIT':
            state[action.index]=action.data;
            return state;
        case 'DELETE':
            state.splice(action.index,1);
            return state;
        default:
            return state;
    }
}

export default stockReducer;
 export const countriesReducer=(state = [], action) =>{
    switch (action.type) {
        case 'GetData':
            return action.payload;
        default: return state;
    }
}
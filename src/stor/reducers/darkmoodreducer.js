let x = localStorage.getItem("mood")
export const Darkmoodreducer=(state=x,action)=>{
    if (action.type==='Darkmood'){
        return action.payload
    }
    else{
        return state
    }

}
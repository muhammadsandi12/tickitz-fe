const initialState = {
    loading: false,
    data: {
    
    },
}


const Fetch = (state=initialState, action={}) => {
    switch (action.type){
        case "UPDATE_USER_REQUEST":
            return{...state, loading:true}
        case "UPDATE_USER_ERROR":
            return{...state, loading:false, error: action.payload}
        case "UPDATE_USER_SUCCESS":
            return{...state, loading:false, data: action.payload}
        default:
            return state
    }
}

export default Fetch
const initialState = {
    loading: false,
    data: {
    
    },
}


const Fetch = (state=initialState, action={}) => {
    switch (action.type){
        case "GET_USERS_REQUEST":
            return{...state, loading:true}
        case "GET_USERS_ERROR":
            return{...state, loading:false, error: action.payload}
        case "GET_USERS_SUCCESS":
            return{...state, loading:false, data: action.payload}
        default:
            return state
    }
}

export default Fetch
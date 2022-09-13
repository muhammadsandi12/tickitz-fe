const initialState = {
    loading: false,
    data: {
        
    }
}


const Fetch = (state=initialState, action={}) => {
    switch (action.type){
        case "GET_USER_BYID_REQUEST":
            return{...state, loading:true}
        case "GET_USER_BYID_ERROR":
            return{...state, loading:false, error: action.payload}
        case "GET_USER_BYID_SUCCESS":
            return{...state, loading:false, data: action.payload}
        default:
            return state
    }
}

export default Fetch
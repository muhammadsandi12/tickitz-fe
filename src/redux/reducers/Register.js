const initialState = {
    loading: false,
    data: {},
    error: null,
    isRegister: false
}


const Fetch = (state=initialState, action={}) => {
    switch (action.type){
        case "REGISTER_REQUEST":   
            return{...state, loading:true}
        case "REGISTER_ERROR":
            return{...state, loading:false, error: action.payload, isRegister: false}
        case "REGISTER_SUCCESS":
            return{...state, loading:false, data: action.payload, error: null, isRegister: true}
        default:
            return state
    }
}

export default Fetch





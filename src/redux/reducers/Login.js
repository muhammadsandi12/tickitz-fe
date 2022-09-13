const initialState = {
    loading: false,
    data: {
        "token": null,
        "user_id": null
    },
    error:null,
    isLogin: false
}


const Fetch = (state=initialState, action={}) => {
    switch (action.type){
        case "LOGIN_REQUEST":   
            return{...state, loading:true}
        case "LOGIN_ERROR":
            return{...state, loading:false, error: action.payload, isLogin: false}
        case "LOGIN_SUCCESS":
            return{...state, loading:false, data: action.payload, error: null, isLogin: true}
        case "AUTH_LOGOUT":
          return{...state, loading:false, data: {"token": null, "user_id": null}, error: null, isLogin: false}
        default:
            return state
    }
}

export default Fetch





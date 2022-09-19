const initialState = {
    loading: false,
    data: {
    },
}


const Fetch = (state=initialState, action={})=> {
    switch (action.type) {
        case "GET_TIME_REQUEST":
            return {...state, loading: true}
        case "GET_TIME_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload}
        case "GET_TIME_SUCCESS":
            return {...state, loading: false, data: action.payload, error: null}
        default:
            return state
    }
} 


export default Fetch
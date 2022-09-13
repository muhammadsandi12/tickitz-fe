const initialState = {
    loading: false,
    data: {
    },
}


const Fetch = (state=initialState, action={})=> {
    switch (action.type) {
        case "GET_UPCOMING_REQUEST":
            return {...state, loading: true}
        case "GET_UPCOMING_ERROR":
            return {...state, loading: false, data: state.data, error: action.payload}
        case "GET_UPCOMING_SUCCESS":
            return {...state, loading: false, data: action.payload, error: null}
        default:
            return state
    }
} 


export default Fetch
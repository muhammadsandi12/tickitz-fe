const initialState = {
    loading: false,
    data: {
        results: []
    },
    token:null,
    isDeleteMovies: false

}


const Fetch = (state=initialState, action={}) => {
    switch (action.type){
        case "DELETE_MOVIES_REQUEST":
            return{...state, loading:true}
        case "DELETE_MOVIES_ERROR":
            return{...state, loading:false, error: action.payload}
        case "DELETE_MOVIES_SUCCESS":
            return{...state, loading:false, data: action.payload, isDeleteMovies:true}
        default:
            return state
    }
}

export default Fetch
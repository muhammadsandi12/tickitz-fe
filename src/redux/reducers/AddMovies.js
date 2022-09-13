const initialState = {
    loading: false,
    data: {
        results: []
    },
    token:null,
    isAddMovies: false

}


const Fetch = (state=initialState, action={}) => {
    switch (action.type){
        case "ADD_MOVIES_REQUEST":
            return{...state, loading:true}
        case "ADD_MOVIES_ERROR":
            return{...state, loading:false, error: action.payload}
        case "ADD_MOVIES_SUCCESS":
            return{...state, loading:false, data: action.payload, isAddMovies:true}
        default:
            return state
    }
}

export default Fetch
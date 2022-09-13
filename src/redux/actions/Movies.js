import axios from 'axios'
import moment from 'moment';
import Swal from 'sweetalert2'



const GetMoviesRequest =() =>{
    return{
        type: 'GET_MOVIES_REQUEST',
       
    };
};

const GetMoviesSuccess = (data) =>{
    return{
        type: 'GET_MOVIES_SUCCESS',
        payload: data
    };
};


const GetMoviesError = (error) =>{
    return{
        type: 'GET_MOVIES_ERROR',
        payload: error
    };
};



export const GetMovies = ( {month},{search,page} ) => {
    return (dispatch) =>{
        dispatch(GetMoviesRequest())
        axios({
            method: "GET",
            // url: `http://localhost:3289/api/v1/movies?limit=8${search? `&search=${search}`:''} ${page? `&page=${page}`:''} ${month? `&month=${month}`:''}`  
            url: `http://localhost:3289/api/v1/movies?limit=8 ${month? `&month=${month}`:''} ${search? `&search=${search}`:''} ${page? `&page=${page}`:''} ` 
        }).then((res) =>{
            dispatch(GetMoviesSuccess(res.data.data))
        }).catch((err) =>{
            dispatch( GetMoviesError(err.response))
        })
    }
}


const PostMoviesRequest =() =>{
    return{
        type: 'ADD_MOVIES_REQUEST',
    };
};

const PostMoviesSuccess = (data) =>{
    return{
        type: 'ADD_MOVIES_SUCCESS',
        payload: data
    };
};


const PostMoviesError = (error) =>{
    return{
        type: 'ADD_MOVIES_ERROR',
        payload: error
    };
};



export const PostMovies = (formData,auth) => {
    return (dispatch) =>{
            dispatch(PostMoviesRequest())

            axios({
                method: "POST",
                url: "http://localhost:3289/api/v1/movies",
                data: formData,
                headers: {
                    authorization:auth
                  }
            }).then((res) =>{
                dispatch(PostMoviesSuccess(res.data))
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: '',
                        text: 'Add Movies Success',
                    })
                }
            }).catch((err) =>{
                dispatch( PostMoviesError(err.message))
                if (err.response.status) {
                    Swal.fire({
                        icon: 'error',
                        title: '',
                        text: err.response.data.message,
                    })
                }
                console.log(err, 'ini res post oi')

            })
    }
}



// const UpdateMoviesRequest =() =>{
//     return{
//         type: 'UPDATE_MOVIES_REQUEST',
       
//     };
// };

// const UpdateMoviesSuccess = (data) =>{
//     return{
//         type: 'UPDATE_MOVIES_SUCCESS',
//         payload: data
//     };
// };


// const UpdateMoviesError = (error) =>{
//     return{
//         type: 'UPDATE_MOVIES_ERROR',
//         payload: error
//     };
// };



// export const UpdateMovies = (data) => {
//     return (dispatch) =>{
//         dispatch(UpdateMoviesRequest())
//         axios({
//             method: "PATCH",
//             url: "http://localhost:3289/api/v1/movies",
//             data: data
//         }).then((res) =>{
//             dispatch(UpdateMoviesSuccess(res.data))
//         }).catch((err) =>{
//             dispatch( UpdateMoviesError(err.response))
//         })
//     }
// }







const DeleteMoviesRequest =() =>{
    return{
        type: 'DELETE_MOVIES_REQUEST',
       
    };
};

const DeleteMoviesSuccess = (data) =>{
    return{
        type: 'DELETE_MOVIES_SUCCESS',
        payload: data
    };
};


const DeleteMoviesError = (error) =>{
    return{
        type: 'DELETE_MOVIES_ERROR',
        payload: error
    };
};



export const DeleteMovies = (id, token) => {
    return (dispatch) =>{
        dispatch(DeleteMoviesRequest())
        console.log(token, 'ini data token')
        console.log(id, 'ini id nya')
        axios({
            method: "DELETE",
            url: `http://localhost:3289/api/v1/movies/${id}`,
            headers: {
                authorization:token
              }
        }).then((res) =>{
            dispatch(DeleteMoviesSuccess(res.data))
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: '',
                    text: 'Delete Movies Success',
                })
            }
        }).catch((err) =>{
            dispatch( DeleteMoviesError(err.response))
            if (err.response.status) {
                Swal.fire({
                    icon: 'error',
                    title: '',
                    text: err.response.data.message,
                })
            }
        })
    }
}



const GetMoviesByIdRequest =() =>{
    return{
        type: 'GET_MOVIES_BYID_REQUEST',
       
    };
};

const GetMoviesByIdSuccess = (data) =>{
    return{
        type: 'GET_MOVIES_BYID_SUCCESS',
        payload: data
    };
};



const GetMoviesByIdError = (error) =>{
    return{
        type: 'GET_MOVIES_BYID_ERROR',
        payload: error
    };
};



export const GetMoviesById = (data) => {
    return (dispatch) =>{
        dispatch(GetMoviesByIdRequest())
        axios({
            method: "GET",
            url: `http://localhost:3289/api/v1/movies/${data}`
        }).then((res) =>{
            dispatch(GetMoviesByIdSuccess(res.data))
        }).catch((err) =>{
            dispatch( GetMoviesByIdError(err.response))
        })
    }
}



const GetUpcomingRequest =() =>{
    return{
        type: 'GET_UPCOMING_REQUEST',
       
    };
};

const GetUpcomingSuccess = (data) =>{
    return{
        type: 'GET_UPCOMING_SUCCESS',
        payload: data
    };
};


const GetUpcomingError = (error) =>{
    return{
        type: 'GET_UPCOMING_ERROR',
        payload: error
    };
};



export const GetUpcoming = ({upcoming, limit }) => {
    return (dispatch) =>{
        dispatch(GetUpcomingRequest())
        axios({
            method: "GET",
            url: `http://localhost:3289/api/v1/movies${upcoming ? `?upcoming=${upcoming}`:''} ${limit ? `&limit=${limit}`:''}  `,
        }).then((res) =>{
            dispatch(GetUpcomingSuccess(res.data))
        }).catch((err) =>{
            dispatch( GetUpcomingError(err.response.data))
        })
    }
}




const GetNowShowingRequest =() =>{
    return{
        type: 'GET_NOW_SHOWING_REQUEST',
       
    };
};

const GetNowShowingSuccess = (data) =>{
    return{
        type: 'GET_NOW_SHOWING_SUCCESS',
        payload: data
    };
};


const GetNowShowingError = (error) =>{
    return{
        type: 'GET_NOW_SHOWING_ERROR',
        payload: error
    };
};



export const GetNowShowing = ({month, limit }) => {
    return (dispatch) =>{
        dispatch(GetNowShowingRequest())
        axios({
            method: "GET",
            url: `http://localhost:3289/api/v1/movies${month ? `?month=${month}`:''} ${limit ? `&limit=${limit}`:''}  `,
        }).then((res) =>{
            dispatch(GetNowShowingSuccess(res.data))
        }).catch((err) =>{
            dispatch( GetNowShowingError(err.response.data))
        })
    }
}




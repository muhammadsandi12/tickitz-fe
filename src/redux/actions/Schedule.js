import axios from "axios";
const urlApi = process.env.REACT_APP_URL_API

const GetScheduleByMoviesRequest =() =>{
    return{
        type: 'GET_SCHEDULE_BY_MOVIES_REQUEST',
       
    };
};

const GetScheduleByMoviesSuccess = (data) =>{
    return{
        type: 'GET_SCHEDULE_BY_MOVIES_SUCCESS',
        payload: data
    };
};


const GetScheduleByMoviesError = (error) =>{
    return{
        type: 'GET_SCHEDULE_BY_MOVIES_ERROR',
        payload: error
    };
};



export const GetScheduleByMoviesById = (idMovies) => {
    return (dispatch) =>{
        dispatch(GetScheduleByMoviesRequest())
        axios({
            method: "GET",
            url: `${urlApi}/schedule/movies/${idMovies}`,
        }).then((res) =>{
            dispatch(GetScheduleByMoviesSuccess(res.data))
        }).catch((err) =>{
            dispatch( GetScheduleByMoviesError(err.response.data))
        })
    }
}

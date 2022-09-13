import axios from "axios";
const urlApi = process.env.REACT_APP_URL_API

const GetSeatRequest =() =>{
    return{
        type: 'GET_SEAT_REQUEST',
       
    };
};

const GetSeatSuccess = (data) =>{
    return{
        type: 'GET_SEAT_SUCCESS',
        payload: data
    };
};


const GetSeatError = (error) =>{
    return{
        type: 'GET_SEAT_ERROR',
        payload: error
    };
};



export const GetSeat = ( id_schedule, id_time, token ) => {
    return (dispatch) =>{
        dispatch(GetSeatRequest())
        axios({
            method: "GET",
            url: `${urlApi}/seat${id_schedule? `?id_schedule=${id_schedule}`:''} ${id_time? `&id_time=${id_time}`:''}`,
            Headers:{
                Authorization: token
            } 
        }).then((res) =>{
            dispatch(GetSeatSuccess(res.data))
        }).catch((err) =>{
            dispatch( GetSeatError(err.response))
        })
    }
}


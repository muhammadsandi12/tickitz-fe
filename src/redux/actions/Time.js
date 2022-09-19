import axios from "axios";
const urlApi = process.env.REACT_APP_URL_API

const GetTimeRequest =() =>{
    return{
        type: 'GET_TIME_REQUEST',
       
    };
};

const GetTimeSuccess = (data) =>{
    return{
        type: 'GET_TIME_SUCCESS',
        payload: data
    };
};


const GetTimeError = (error) =>{
    return{
        type: 'GET_TIME_ERROR',
        payload: error
    };
};



export const GetTime = (idSchedule) => {
    return (dispatch) =>{
        dispatch(GetTimeRequest())
        console.log(idSchedule, 'ini id schedule 123')
        axios({
            method: "GET",
            url: `${urlApi}time/schedule/${idSchedule} `,
        }).then((res) =>{
            dispatch(GetTimeSuccess(res.data))
        }).catch((err) =>{
            dispatch( GetTimeError(err.response))
        })
    }
}


import axios from "axios";
import Swal from 'sweetalert2'
const urlApi = process.env.REACT_APP_URL_API

const GetUsersByIdRequest = () => {
    return {
        type: 'GET_USER_BYID_REQUEST',

    };
};

const GetUsersByIdSuccess = (data) => {
    return {
        type: 'GET_USER_BYID_SUCCESS',
        payload: data
    };
};


const GetUsersByIdError = (error) => {
    return {
        type: 'GET_USER_BYID_ERROR',
        payload: error
    };
};

export const UsersLogOut = () => {
    return{
        type: 'AUTH_LOGOUT',
    };
}


export const GetUsersById = (token) => {
    return (dispatch) => {
        dispatch(GetUsersByIdRequest())
        axios({
            method: "GET",
            url: `${urlApi}users/id `,
            headers: {
                Authorization: token
            }
        }).then((res) => {
            dispatch(GetUsersByIdSuccess(res.data.data[0]))
        }).catch((err) => {
            dispatch(GetUsersByIdError(err.response.data))
          
        })
    }
}


const UpdateUserRequest = () => {
    return {
        type: 'UPDATE_USER_REQUEST',

    };
};

const UpdateUserSuccess = (data) => {
    return {
        type: 'UPDATE_USER_SUCCESS',
        payload: data
    };
};


const UpdateUserError = (error) => {
    return {
        type: 'UPDATE_USER_ERROR',
        payload: error
    };
};



export const UpdateUser = (formUpdate,token) => {
    return (dispatch) => {
        dispatch(UpdateUserRequest())
        axios({
            method: "PATCH",
            url: `${urlApi}users `,
            data:formUpdate,
            headers: {
                Authorization: token
            }
        }).then((res) => {
            dispatch(UpdateUserSuccess(res.data.data[0]))
            console.log(res.status, ' ini status')
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: '',
                    text: 'Update Profile Success',
                })
            }
        }).catch((err) => {
            dispatch(UpdateUserError(err.response.data))
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





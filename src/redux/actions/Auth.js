import axios from 'axios'
import Swal from 'sweetalert2'
const urlApi = process.env.REACT_APP_URL_API

const LoginRequest = () => {
    return {
        type: 'LOGIN_REQUEST',

    };
};

const LoginSuccess = (data) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: data
    };
};


const LoginError = (error) => {
    return {
        type: 'LOGIN_ERROR',
        payload: error
    };
};

export const AuthLogin = (formData) => {
    return (dispatch) => {
        dispatch(LoginRequest())
        console.log(formData.email,'sfsf')
        axios({
            method: "POST",
            url: `${urlApi}auth/login`,
            data: {
                email: formData.email,
                password: formData.password
            }
        }).then((res) => {
            dispatch(LoginSuccess(res.data))
            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: '',
                    text: 'Login Success',
                })
            }
        }).catch((err) => {
            dispatch(LoginError(err.response.data))
            console.log(err, 'ini error woy')
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


export const AuthLogOut = () => {
    return {
        type: 'AUTH_LOGOUT'
    };
}




const RegisterRequest = () => {
    return {
        type: 'REGISTER_REQUEST',

    };
};

const RegisterSuccess = (data) => {
    return {
        type: 'REGISTER_SUCCESS',
        payload: data
    };
};


const RegisterError = (error) => {
    return {
        type: 'REGISTER_ERROR',
        payload: error
    };
};



export const AuthRegister = (formData) => {
    return (dispatch) => {
        dispatch(RegisterRequest())
        axios({
            method: "POST",
            url: `${urlApi}auth/register`,
            data: {
                firstname: formData.firstname,
                lastname: formData.lastname,
                phone_number: formData.phone_number,
                email: formData.email,
                password: formData.password
            }
        }).then((res) => {
            dispatch(RegisterSuccess(res.data))
            if (res.status ===201) {
                Swal.fire({
                    icon: 'success',
                    title: '',
                    text: 'Register Success',
                })
            }

        }).catch((err) => {
            dispatch(RegisterError(err.response.data))
            console.log(err, 'ini error woy')

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




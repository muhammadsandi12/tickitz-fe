import axios from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import { AuthLogin, AuthLogOut } from "../../redux/actions/Auth"
import './login.css'

const Login = () => {
    const { isLogin, loading, data, error } = useSelector((state) => state.login)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formAddData, setFormAddData] = useState({
        email: '',
        password: ''
    })
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(AuthLogin(formAddData))

    }

    useEffect(() => {
        if (isLogin === true) {
            navigate('/', { replace: true })

        }
    }, [isLogin])
    return (
        <section className="container-login">
            <section className="section-left" style={{ backgroundImage: `linear-gradient(rgba(43, 21, 107, 0.5), rgba(43, 21, 107, 0.8)), url(./cover.png)` }} >

            </section>
            <section className="section-right">
                <div className="wrapper-form">
                    <h1 className="title-form"> Sign In</h1>
                    <p className="description">Sign In with your data that you entered during your registration </p>
                    <div className="form">
                        <form onSubmit={handleLogin}>
                            <div className="email">
                                <p className="title-input">Email</p>
                                <input className="input-form" type={'email'} placeholder="email" required onChange={(e) => {
                                    setFormAddData((prevData) => ({
                                        ...prevData,
                                        email: e.target.value
                                    }))
                                }} /><br /><br />
                            </div>
                            <div className="password">
                                <p className="title-input">password</p>
                                <input className="input-form" type={'password'} placeholder="password" required onChange={(e) => {
                                    setFormAddData((prevData) => ({
                                        ...prevData,
                                        password: e.target.value
                                    }))
                                }} /><br />
                            </div>
                            <button className="btn-signin" >
                                Sign In
                            </button>
                        </form>
                    </div>
                    <div className="forget-password">
                        <p>Forgot your password?</p>
                        <Link to='/forget'>Reset now</Link>
                    </div>
                    <div className="dont-have-account">
                        <p>Don't have an account?</p>
                        <Link to='/signup'>Sign Up</Link>
                    </div>
                    <div>

                    </div>
                </div>
            </section>

        </section>
    )
}

export default Login
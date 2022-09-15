import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthRegister } from '../../redux/actions/Auth'
import './register.css'
 



const SignUp = ()=> {
  const { loading, isRegister} = useSelector((state) =>state.register)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formAddUsers, setFormAddUsers] = useState({
    firstname: '',
    lastname: '',
    phone_number: '',
    email: '',
    password: ''
  })

  const handleSignUp = (e)=> {
      e.preventDefault()
      dispatch(AuthRegister(formAddUsers))
  }

  useEffect(()=>{
      if(isRegister === true){
          navigate('/login', {replace:true})
      }
  },[isRegister])
    
    return(
      <section className="flex">
            <div className="section-left" >
            <section className="banner-image" style={{backgroundImage: `linear-gradient(rgba(43, 21, 107, 0.5), rgba(43, 21, 107, 0.8)), url(./cover.png)`}} >
            </section>
                
            </div>
            <section className="section-right">
            <div className="wrapper-form">
                    <h1 className="title-form"> Sign Up</h1>
                    <p className="description">Fill your additional details</p>
                    <div className="form">
                        <form onSubmit={handleSignUp}>
                            <div className="form-wrapper">
                                <p className="title-input">First Name</p>
                                <input className="input-form" type={'text'} placeholder="First Name" required onChange={(e)=> {
                                        setFormAddUsers((prevData)=>({
                                            ...prevData,
                                            firstname: e.target.value
                                        }))
                                }}/><br/>
                            </div>
                            <div className="form-wrapper">
                                <p className="title-input">Last Name</p>
                                <input className="input-form" type={'text'} placeholder="lastname" required onChange={(e)=> {
                                    setFormAddUsers((prevData)=>({
                                        ...prevData,
                                        lastname: e.target.value
                                    }))
                                }}/><br/>
                            </div>
                            <div className="form-wrapper">
                                <p className="title-input">Phone Number</p>
                                <input className="input-form" inputMode='numeric' placeholder="Phone Number" required onChange={(e)=> {
                                    setFormAddUsers((prevData)=>({
                                        ...prevData,
                                        phone_number: e.target.value
                                    }))
                                }}/><br/>
                            </div>
                            <div className="form-wrapper">
                                <p className="title-input">Email</p>
                                <input className="input-form" type={'email'} placeholder="Email" required onChange={(e)=> {
                                    setFormAddUsers((prevData)=>({
                                        ...prevData,
                                        email: e.target.value
                                    }))
                                }}/><br/>
                            </div>
                            <div className="form-wrapper">
                                <p className="title-input">password</p>
                                <input className="input-form" type={'password'} placeholder="password" required onChange={(e)=> {
                                    setFormAddUsers((prevData)=>({
                                        ...prevData,
                                        password: e.target.value
                                    }))
                                }}/><br/>
                            </div>
                            {loading ? (
                                <button className="btn-signin" disabled={true}>
                                    Loading...
                                </button>
                            ): (
                                <button className="btn-signin" >
                                    Sign Up
                                </button>
                            )}
                           
                        </form>
                    </div>
                    <div className="dont-have-account">
                            <p>Already have account ?</p>
                            {/* <Link to='/login' action='replace' onNavigate={onNavigate}>Sign In</Link> */}
                            <Link to={'/login'} onClick={() => navigate('/login', {replace:true})}>Sign In </Link>
                    </div>
                    <div>

                    </div>
            </div>
            </section>

        </section>     
   
    )
}

export default SignUp
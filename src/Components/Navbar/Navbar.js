import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, } from 'react-router-dom'
import {  AuthLogOut } from '../../redux/actions/Auth'
import { GetUsersById } from '../../redux/actions/Users'
import { useSelector, useDispatch } from 'react-redux'
import logo from './Tickitz1.png'

const Navbar = () => {
    const navigate = useNavigate()
    const urlImage = process.env.REACT_APP_URL_IMAGE
    const dispatch = useDispatch()
    const [active, setActive] = useState(false)
    let { data, isLogin } = useSelector((state) => state.login);
    const users = useSelector((state) => state.getUsersById)
    const navigation = (e) => {
        setActive(!active)
    }

    const handleLogout = (e) => {
        navigate('/', { replace: true })
        dispatch(AuthLogOut())
    }
    useEffect(() => {
        dispatch(GetUsersById(data.token))
    }, [isLogin])
    return (
        <section className='container flex mx-auto   justify-between items-center '>
            <div className='navbar-left flex items-center'>
                <div className='mr-20'>
                    <img src={logo} width={130} height={50} alt="logo tickitz"/>
                </div>
                <div className=''>
                    <ul className='flex space-x-20 text-base text-[#414141] font-medium'>
                        {data.role === 'admin' ? (
                            <>
                                <div>
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                </div>
                                <div>

                                    <li>
                                        <Link to={"/movies"}>List Movie</Link>
                                    </li>
                                </div>
                                <div>

                                    <li>
                                        <Link to={"/dashboard"}>Dashboard</Link>
                                    </li>
                                </div>

                            </>
                        ) : (
                            <>
                                <div>
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                </div>
                                <div>

                                    <li>
                                        <Link to={"/movies"}>List Movie</Link>
                                    </li>
                                </div>
                            </>
                        )}

                    </ul>
                </div>
            </div>
            <div className='flex items-center space-x-10'>
                {
                    isLogin ? (
                        <>
                            <div>
                                <input type={"text"} className="outline-none border-gray-100 border-w border-[0.5px] py-1 px-4 rounded-xl " placeholder="type to search..." />
                            </div>
                            <div className='' onClick={navigation}>
                                <img className=' rounded-full w-[50px] h-[50px]' src={`${urlImage}${users.data.profile_image}`}alt="image logo"/>
                                <div className='relative bg-slate-600'>
                                    <div className={active ? 'w-[120px] bg-white flex flex-col absolute top-1 rounded-md mt-2 border-[0.2px] px-4 py-1 justify-start items-start' : 'hidden'}>

                                        <button><Link to="/profile">Profile</Link></button>
                                        <button onClick={handleLogout} >Logout</button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <button className='w-[120px] bg-[#5F2EEA] text-[#F7F7FC] font-bold py-2 rounded-lg'>
                                <Link to={"/login"}>
                                    Sign In
                                </Link>
                            </button>
                        </>
                    )

                }

            </div>
        </section>

    )
}
export default Navbar

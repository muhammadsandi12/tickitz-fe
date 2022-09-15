import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, } from 'react-router-dom'
import { AuthLogOut } from '../../redux/actions/Auth'
import { GetUsersById } from '../../redux/actions/Users'
import { useSelector, useDispatch } from 'react-redux'
import logo from './Tickitz1.png'
import Button from './Button';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

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

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };



    return (
        <div className= {nav ? 'fixed left-0 top-0 right-0 w-full z-10 ease-in duration-500 bg-white':'relative left-0 top-0 w-full z-10 ease-in duration-500' }>
            <div className= ' container   mx-auto flex justify-between items-center p-4 text-black' >
                <div className='flex   items-center'>
                    <div className='md:mr-10 lg:mr-20'>
                        <Link className='' to='/'>
                            <img src='/Tickitz1.png' alt='image logo' width={130} height={50} />
                        </Link>
                    </div>
                    <div >
                        {data.role === 'admin' ? (
                            <>
                                <ul className='hidden md:flex  md:space-x-10 lg:space-x-20 text-base text-[#414141] font-medium'>
                                    <li className=''>
                                        <Link to='/'>Home</Link>
                                    </li>
                                    <li className=''>
                                        <Link to='/movies'>List Movie</Link>
                                    </li>
                                    <li className=''>
                                        <Link to='/dashboard'>Dashbord</Link>
                                    </li>

                                </ul>
                            </>
                        ) : (<>
                            <ul className='hidden md:flex space-x-10 text-base text-[#414141] font-medium'>
                                <li className=''>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className=''>
                                    <Link to='/movies'>List Movie</Link>
                                </li>

                            </ul>
                        </>)}
                    </div>
                   
                </div>
                <div className='flex items-center space-x-10'>
                {
                    isLogin ? (
                        <>
                            <div className='hidden lg:block'>
                                <input type={"text"} className="outline-none border-gray-100 border-w border-[0.5px] py-1 px-4 rounded-xl " placeholder="type to search..." />
                            </div>
                            <div className='hidden md:block' onClick={navigation}>
                                <img className=' rounded-full w-[56px] h-[56px]' src={`${urlImage}${users.data.profile_image}`}alt="image logo"/>
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
                            <div className='hidden md:block'>
                                <button className='w-[120px] bg-[#5F2EEA] text-[#F7F7FC] font-bold py-2 rounded-lg'>
                                    <Link to={"/login"}>
                                        Sign In
                                    </Link>
                                </button>
                            </div>
                        </>
                    )

                }

            </div>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block md:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} />
                    ) : (
                        <AiOutlineMenu size={20} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div
                    className={
                        nav
                            ? 'sm:hidden fixed top-14 left-0 right-0  flex justify-center items-center w-full bg-white text-center ease-in-out duration-300'
                            : 'sm:hidden fixed top-[-100%] left-0 right-0  flex justify-center items-center w-full bg-white text-center ease-in-out duration-300'
                    }
                >
                    {isLogin ? (<>

                        {data.role === 'admin' ? (
                        <>
                            <ul className=' '>
                                <li className='p-4 text-base font-medium text-[#14142B]'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='p-4 text-base font-medium text-[#14142B] '>
                                    <Link to='/movies'>List Movie</Link>
                                </li>
                                <li className='p-4 text-base font-medium text-[#14142B]'>
                                    <Link to='/dashboard'>Dashbord</Link>
                                </li>
                                <li className='p-4 text-base font-medium text-[#14142B]'>
                                    <div onClick={handleLogout}>
                                        Logout
                                    </div>
                                </li>

                            </ul>
                        </>
                    ) : (<>
                        <ul className=' '>
                            <li className='p-4 text-base font-medium text-[#14142B]'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='p-4 text-base font-medium text-[#14142B]'>
                                <Link to='/movies'>List Movie</Link>
                            </li>

                        </ul>
                    </>)}

                       
                    
                    </>) :(<>
                       
                        <ul className=' '>
                                <li className='p-4 text-base font-medium text-[#14142B]'>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className='p-4 text-base font-medium text-[#14142B]'>
                                    <Link to='/movies'>List Movie</Link>
                                </li>
                                <li className='p-4 text-base font-medium text-[#14142B]'>
                                    <Link to='/login'>Sign</Link>
                                </li>
                        </ul>
                    </>)}
                </div>
            </div>
        </div>

    )
}
export default Navbar

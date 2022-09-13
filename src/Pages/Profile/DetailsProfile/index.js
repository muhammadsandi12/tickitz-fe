import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { UpdateUser } from "../../../redux/actions/Users"
import { GetUsersById } from "../../../redux/actions/Users"
import "./profileDetails.css"

const DetailsProfile = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.getUsersById)
    let { data, error, loading, isLogin } = useSelector((state) => state.login);
    const update = useSelector((state) => state.updateUser);
    const [selectedImage, setSelectedImage] = useState();
    const [repatch, setRepatch] = useState(false)
    const [formUpdate, setFormUpdate] = useState({})
    const token = data.token
    
    const formData = new FormData()
    formData.append('firstname', formUpdate.firstname ?? users.data.firstname )
    formData.append('lastname', formUpdate.lastname ?? users.data.lastname )
    formData.append('phone_number', formUpdate.phone_number ?? users.data.firstname)
    formData.append('profile_image', formUpdate.profile_image)
    
    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(UpdateUser(formData, token))
        setRepatch(!repatch)
    }

    useEffect(() => {
        dispatch(GetUsersById(token))
    }, [update])
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    return (
        <div className="bg-gray">
            <div className="container mx-auto   ">
                <div className=" flex">
                    <div className="w-4/12 h-3/6 mr-6 rounded lg bg-white" >
                        <div className="wrap-details-name">
                            <div className="title-info">
                                INFO
                            </div>
                            <div className="image-profile-details">
                                <img src={selectedImage ? URL.createObjectURL(selectedImage) : `http://localhost:3289/uploads/${users.data.profile_image}`} />
                            </div>
                            <div className="mt-5">
                                <input type="file" onChange={(e) => setFormUpdate((prevData) => ({
                                        ...prevData,
                                        profile_image: e.target.files[0]
                                    }))& imageChange}/>
                            </div>
                            <div className="wrap-name">
                                <p className="name"> {users.data.firstname} {users.data.lastname}</p>
                                <p className="moviegoers">Moviegoers</p>
                            </div>

                        </div>
                        <div className="wrap-btn-logout">
                            <button className="btn-logout-2">
                                Logout
                            </button>
                        </div>
                    </div>
                    <div className="w-8/12">
                        <div className="bg-white py-8 px-8 rounded-xl mb-10">
                            <ul className="flex">
                                <li className="w-6/12">
                                    <Link to={"/profile"}>
                                        Account Setting
                                    </Link>
                                </li>
                                <li className="w-6/12">
                                    <Link to={""}>
                                        Order History
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <form encType='multipart/form-data' >
                            <div className="flex flex-col mt-4 py-14 px-8 mb-4 rounded-xl bg-white">
                                <div className="wrap-title border-b-[0.5px] pb-4 border-[#DEDEDE]">
                                    <p className="text-[#14142B] text-base font-medium "> Details Information</p>
                                </div>
                                <div className="bg-white">
                                    <div className="flex text-[#4E4B66] text-base font-normal  ">
                                        <div className="wrap-input input-left ">
                                            <label className="mb-4">firstname</label>
                                            <input className="outline-none py-4 px-2 border-[0.5px] border-[#DEDEDE] rounded-lg " type={"text"} defaultValue={users.data.firstname} onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    firstname: e.target.value
                                                }))
                                            }} />
                                        </div>
                                        <div className="wrap-input input-right">
                                            <label className="mb-4">lastname</label>
                                            <input className="outline-none py-4 px-2 border-[0.5px] border-[#DEDEDE] rounded-lg "  defaultValue={users.data.lastname} onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    lastname: e.target.value
                                                }))
                                            }} />
                                        </div>
                                    </div>
                                    <div className="section-input text-[#4E4B66] text-base font-normal">
                                        <div className="wrap-input input-left">
                                            <label className="mb-4">email</label>
                                            <input className="outline-none py-4 px-2 border-[0.5px] border-[#DEDEDE] rounded-lg " defaultValue={users.data.email} disabled={true} />
                                        </div>
                                        <div className="wrap-input input-right">
                                            <label className="mb-4">Phone Number</label>
                                            <input className="outline-none py-4 px-2 border-[0.5px] border-[#DEDEDE] rounded-lg " defaultValue={users.data.phone_number} onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    phone_number: e.target.value
                                                }))
                                            }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button onClick={handleUpdate} className="btn-update">Update Changes</button>
                            </div>
                        </form>
                        <form encType='multipart/form-data' >
                            <div className="flex flex-col mt-4 py-14 px-8 mb-4 rounded-xl bg-white">
                                <div className="wrap-title border-b-[0.5px] pb-4 border-[#DEDEDE]">
                                    <p className="text-[#14142B] text-base font-medium "> Account and Privacy</p>
                                </div>
                                <div className="bg-white">
                                    <div className="flex text-[#4E4B66] text-base font-normal  ">
                                        <div className="wrap-input input-left ">
                                            <label className="mb-4">New Password</label>
                                            <input className="outline-none py-4 px-2 border-[0.5px] border-[#DEDEDE] rounded-lg "type={"password"}  onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    firstname: e.target.value
                                                }))
                                            }} />
                                        </div>
                                        <div className="wrap-input input-right">
                                            <label className="mb-4">Confirm Password</label>
                                            <input type={"password"} className="outline-none py-4 px-2 border-[0.5px] border-[#DEDEDE] rounded-lg" onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    lastname: e.target.value
                                                }))
                                            }} />
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>

                            <div>
                                <button onClick={handleUpdate} className="btn-update">Update Changes</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default DetailsProfile
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
    console.log(users.data, 'ini users data')
    const [repatch, setRepatch] = useState(false)
    const [formUpdate, setFormUpdate] = useState({})
    console.log(formUpdate, 'ini form update')
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
    const removeSelectedImage = () => {
        setSelectedImage();
    };
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
                <div className="bg-red-200 flex">
                    <div className="w-/12 h-3/6  bg-white" >
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
                        <div className="list-account">
                            <ul>
                                <li>
                                    <Link to={"/profile"}>
                                        Account Setting
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        Order History
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <form encType='multipart/form-data' >
                            <div className="details-information">
                                <div className="wrap-title">
                                    <p className="title-details"> Details Information</p>
                                </div>
                                <div className="input-details">
                                    <div className="section-input ">
                                        <div className="wrap-input input-left">
                                            <label>firstname</label>
                                            <input type={"text"} defaultValue={users.data.firstname} onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    firstname: e.target.value
                                                }))
                                            }} />
                                        </div>
                                        <div className="wrap-input input-right">
                                            <label>lastname</label>
                                            <input defaultValue={users.data.lastname} onChange={(e) => {
                                                setFormUpdate((prevData) => ({
                                                    ...prevData,
                                                    lastname: e.target.value
                                                }))
                                            }} />
                                        </div>
                                    </div>
                                    <div className="section-input ">
                                        <div className="wrap-input input-left">
                                            <label>email</label>
                                            <input defaultValue={users.data.email} disabled={true} />
                                        </div>
                                        <div className="wrap-input input-right">
                                            <label>Phone Number</label>
                                            <input defaultValue={users.data.phone_number} onChange={(e) => {
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
                        <form encType='multipart/form-data'>
                            <div className="section-password">
                                <div className="wrap-title">
                                    <p className="title-details"> Account and Privacy</p>
                                </div>
                                <div className="input-details">

                                    <div className="section-input ">
                                        <div className="wrap-input input-left">
                                            <label>New Password</label>
                                            <input type={"password"} />

                                        </div>
                                        <div className="wrap-input input-right">
                                            <label>Confirm Password</label>
                                            <input type={"password"} />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <button className="btn-update">Update Changes</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default DetailsProfile
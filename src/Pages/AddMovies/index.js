import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { PostMovies, GetMovies } from '../../redux/actions/Movies'
import { useDispatch, useSelector } from 'react-redux'
import './addMovies.css'
import AdminMovies from '../../Components/AdminMovies'
import { AiOutlineFileImage } from "react-icons/ai"
const AddMovies = () => {
    const login = useSelector((state) => state.login)
    const isAddMovies = useSelector((state) => state.addMovies)
    const [formAddData, setFormAddData] = useState({})
    const [repatch, setRepatch] = useState(false)
    const dispatch = useDispatch()
    const formData = new FormData()
    formData.append('title', formAddData.title)
    formData.append('categories', formAddData.categories)
    formData.append('cover', formAddData.cover)
    formData.append('release_date', formAddData.release_date)
    formData.append('hour', formAddData.hour)
    formData.append('minute', formAddData.minute)
    formData.append('director', formAddData.director)
    formData.append('description', formAddData.description)
    formData.append('casts', formAddData.casts)

    useEffect(() => {

    }, [isAddMovies])

    const handleAddNewMovies = (e) => {
        dispatch(PostMovies(formData, login.data.token))
        setRepatch(!repatch)
    }



    return (
        <>
            <Navbar />
            <div className='bg-gray'>
                <div className='container mx-auto '>
                    <div className='text-2xl font-bold mb-4'>Form Movie</div>
                    <form encType='multipart/form-data' onSubmit={handleAddNewMovies}>
                        <div className='bg-white py-8 px-12 rounded-lg'>
                            <div className='flex'>
                                {/* {image upload harus ada encType} */}
                                <div className='w-4/12 flex-col justify-center items-center text-center'>
                                    <div className='flex justify-center items-center mb-10'>
                                        <AiOutlineFileImage size={200} />
                                    </div>
                                    <div>
                                        <input className='input' type="file" placeholder="image" onChange={(e) => setFormAddData((prevData) => ({
                                            ...prevData,
                                            cover: e.target.files[0]
                                        }))} /><br />

                                    </div>
                                </div>
                                <div className='w-4/12'>
                                    <div className='flex flex-col justify-center px-2'>
                                        <label className='text-[#4E4B66] font-base font-normal mb-2'>Movie Name</label>
                                        <input className='border-[0.5px] py-2 px-2 rounded-md border-[#DEDEDE] outline-none' type="text" placeholder="Title" onChange={(e) => setFormAddData((prevData) => ({
                                            ...prevData,
                                            title: e.target.value
                                        }))} /><br />
                                    </div>
                                    <div className='flex flex-col justify-center px-2 '>
                                        <label className='text-[#4E4B66] font-base font-normal mb-2'>Director</label>
                                        <input className='border-[0.5px] py-2 px-2 rounded-md border-[#DEDEDE] outline-none' type="text" placeholder="director" onChange={(e) => setFormAddData((prevData) => ({
                                            ...prevData,
                                            director: e.target.value
                                        }))} /><br />
                                    </div>
                                    <div className='flex flex-col justify-center px-2'>
                                        <label className='text-[#4E4B66] font-base font-normal mb-2'>Release date</label>
                                        <input className='border-[0.5px] py-2 px-2 rounded-md border-[#DEDEDE] outline-none' type="date" placeholder="release_date" onChange={(e) => setFormAddData((prevData) => ({
                                            ...prevData,
                                            release_date: e.target.value
                                        }))} /><br />
                                    </div>
                                </div>
                                <div className='w-4/12'>
                                    <div className='flex flex-col justify-center px-2'>
                                        <label className='text-[#4E4B66] font-base font-normal mb-2'>Category</label>
                                        <input className='border-[0.5px] py-2 px-2 rounded-md border-[#DEDEDE] outline-none' type="text" placeholder="genre" onChange={(e) => setFormAddData((prevData) => ({
                                            ...prevData,
                                            categories: e.target.value
                                        }))} /><br />
                                    </div>
                                    <div className='flex flex-col justify-center px-2'>
                                        <label className='text-[#4E4B66] font-base font-normal mb-2'>casts</label>
                                        <input className='border-[0.5px] py-2 px-2 rounded-md  border-[#DEDEDE] outline-none' type="text" placeholder="cast" onChange={(e) => setFormAddData((prevData) => ({
                                            ...prevData,
                                            casts: e.target.value
                                        }))} /><br />

                                    </div>
                                    <div className='flex flex-col justify-center px-2'>
                                        <div className='flex'>
                                            <label className='text-[#4E4B66] w-6/12 font-base font-normal mb-2 '>Duration Hour</label>
                                            <label className='text-[#4E4B66] w-6/12 font-base font-normal mb-2'>Duration minute</label>
                                        </div>
                                        <div className='flex justify-between '>
                                            <div className=''>
                                                <input className='border-[0.5px] py-2 px-2 rounded-md w-8/12 border-[#DEDEDE] outline-none' type="text" placeholder="Hour" onChange={(e) => setFormAddData((prevData) => ({
                                                    ...prevData,
                                                    hour: e.target.value
                                                }))} />
                                            </div>
                                            <div className=''>
                                                <input className='border-[0.5px] py-2 px-2 rounded-md w-8/12  border-[#DEDEDE] outline-none' type="text" placeholder="Minute" onChange={(e) => setFormAddData((prevData) => ({
                                                    ...prevData,
                                                    minute: e.target.value
                                                }))} /><br />

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <label className='text-[#4E4B66] font-base font-normal mb-2 '>Synopsis</label>
                            <textarea className='border-[0.5px] py-4 px-4 my-4 rounded-md w-full h-[108px]  border-[#DEDEDE] outline-none' type="text" onChange={(e) => setFormAddData((prevData) => ({
                                ...prevData,
                                description: e.target.value
                            }))} /><br />
                            <button className="btn btn-primary" >Add new movies</button>
                        </div>
                    </form>
                </div>
            </div>

            <AdminMovies />

            <Footer />
        </>
    )
}

export default AddMovies
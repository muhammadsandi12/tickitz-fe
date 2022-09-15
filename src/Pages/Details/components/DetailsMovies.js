import { useEffect, useState } from "react"
import { GetMoviesById } from "../../../redux/actions/Movies"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import './details.css'
import moment from "moment"
const DetailsMovies = () => {
    const urlImage = process.env.REACT_APP_URL_IMAGE
    const dispatch = useDispatch()
    const details = useSelector((state) => state.getMoviesById)    
    let { id } = useParams()

    useEffect(() => {
        dispatch(GetMoviesById(id))
    }, [])

    return (
        <>
       
            {details?.data?.data?.results.map((item) => (
                <section className="container mx-auto flex flex-col lg:flex-row  ">
                    <div className=" w-full flex justify-center mb-10  lg:w-4/12 lg:mr-10">
                        <div className=" p-8 border-[0.5px] border-[#DEDEDE] rounded-lg">
                            <img className="w-[236px] h-[362px]" src={`${urlImage}${item.cover}`} alt="image"/>
                        </div>
                    </div>
                    <div className="w-full lg:w-8/12">
                        <div className="flex flex-col ">
                            <div className="flex-col text-center lg:text-left">
                                <div className="text-4xl font-bold  text-[#14142B] tracking-wide leading-8">{item.title}</div>
                                <div className="text-lg text-[#4E4B66] font-normal mt-2">{item.categories}</div>
                            </div>
                            <div className="flex mt-4 mb-2 border-b-[1px] border-[#DEDEDE]">
                                <div className="flex-col mr-8 w-4/12 " >
                                    <div className="mb-2" >
                                        <div className="text-[#8692A6] font-normal text-sm mb-2">
                                            release date
                                        </div>
                                        <div className="text-[#121212] text-base font-normal">
                                            {moment(item.release_date).format('LL')}
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="text-[#8692A6] font-normal text-sm mb-2" >
                                            duration
                                        </div>
                                        <div className="text-[#121212] text-base font-normal">
                                            {item.duration}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-2 w-8/12">
                                        <div className="text-[#8692A6] font-normal text-sm mb-2">
                                            Directed by
                                        </div>
                                        <div className="text-[#121212] text-base font-normal">
                                            {item.director}
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="text-[#8692A6] font-normal text-sm mb-2">
                                            Cast
                                        </div>
                                        <div className="text-[#121212] text-base font-normal">
                                            {item.casts}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col mt-4"  >
                                <div className="text-xl font-semibold">
                                    Synopsis
                                </div>
                                <div className="mt-4 text-[#4E4B66] text-base font-normal tracking-wide leading-8">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            ))}
        </>

    )

}
export default DetailsMovies    
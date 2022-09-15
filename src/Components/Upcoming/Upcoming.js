import React, { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { GetMovies, GetUpcoming } from "../../redux/actions/Movies"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import moment from "moment"

const Upcoming = () => {
    
    const urlImage = process.env.REACT_APP_URL_IMAGE
    const dispatch = useDispatch()
    const now = moment().format('YYYY-MM-DD')
    const { data,} = useSelector((state) => state.getUpcoming);
    const [upcoming, setUpcoming] = useState({
        search: '',
        sort: '',
        month: '',
        upcoming: now,
        limit: 7,
    })
    useEffect(() => {
        dispatch(GetUpcoming(upcoming))

    }, [])
    return (
        <div className="container mx-auto ">
                <div className="flex  justify-between">
                    <div className="text-2xl  font-bold border-b-4 pb-4 border-[#000] ">
                        Upcoming                   
                         </div>
                    <div className=" text-[#5F2EEA] text-base font-bold">
                    <Link to={"/movies"}>
                    view all</Link>

                    </div>
                </div>
                <div className="container flex overflow-auto">
                    {data?.data?.results?.map((movie) => {
                        return (
                            <div className="justify-between">
                                <div className="w-[223px] bg-white h-[452px] flex flex-col justify-center items-center  border-[#DEDEDE] border-2 rounded-xl mr-10 mt-4">
                                    <img src={`${urlImage}${movie.cover}`} className="rounded-md w-[159px] h-[244px]" alt={movie.title}  />

                                <div className="text-center mt-4" >
                                            <div className="text-lg font-bold text-[#14142B]">
                                                <h3>{movie.title}</h3>
                                            </div>
                                            <div className="text-[#A0A3BD] text-xs mt-2 font-normal">
                                                <p>{movie.categories}</p>
                                            </div>
                                        </div>
                                        <div className="px-6 w-full  mt-4">
                                            <Link to={`/details/${movie.id_movies}`}>
                                                <button className="w-full py-2 rounded-lg text-sm text-[#5F2EEA] font-normal bg-white border-[0.5px] border-[#5F2EEA] ">Details</button>
                                            </Link>

                                        </div>
                                </div>

                            </div>
                                
                          
                        )
                    })}
                </div>
            </div>
    )
}

export default Upcoming
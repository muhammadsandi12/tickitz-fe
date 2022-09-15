
import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { GetMovies, GetMoviesById, GetNowShowing } from "../../redux/actions/Movies"
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment"

const Showing = () => {
    const now = moment().format('YYYY-MM-DD')
    const { data} = useSelector((state) => state.getNowShowing);
    const dispatch = useDispatch()
    const urlImage = process.env.REACT_APP_URL_IMAGE
    const [nowShowing, setNowShowing] = useState({    
        search: '',
        sort: '',
        month: now,
        limit: 7,
        upcoming: ''
    })
    useEffect(() => {
        dispatch(GetNowShowing(nowShowing))
    }, [])

    return (
        <div className="bg-[#F5F6F8]">

            <div className="container mx-auto ">
                <div className="flex  justify-between">
                    <div className="text-2xl text-[#5F2EEA] font-bold border-b-4 pb-4 border-[#5F2EEA] ">
                        Now Showing
                    </div>
                    <div className=" text-[#5F2EEA] text-base font-bold">
                        <Link to={"/movies"}>
                        view all
                        </Link>
                    </div>
                </div>
                <div className="container flex overflow-auto">
                    {data?.data?.results?.map((movie) => {
                        return (
                            <Link to={`/details/${movie.id_movies}`}>
                                <div className="w-[223px] h-[308px] flex justify-center items-center  border-white border-2 rounded-xl mr-10 mt-4">
                                    <img src={`${urlImage}/${movie.cover}`} className="rounded-md" alt={movie.title} width={159} height={244} />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

        </div>
        
    )
}


export default Showing
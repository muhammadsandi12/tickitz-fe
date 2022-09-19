import './schedule.css'
import { useDispatch, useSelector } from 'react-redux/'
import { useEffect, useState } from 'react'
import { GetScheduleByMoviesById } from '../../../redux/actions/Schedule'
import { Link, useParams } from "react-router-dom"
import { GetBookNow } from '../../../redux/actions/BookNow'
import Time from './Time'
import moment from 'moment'
const ScheduleMovie = (timeBooking) => {
    const urlImage = process.env.REACT_APP_URL_IMAGE
    const { id } = useParams()
    console.log(timeBooking, 'ini get time')
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.getScheduleByMoviesById);
    const [time, setTime] = useState()
    const [location, setLocation] = useState()
    useEffect(() => {
        dispatch(GetScheduleByMoviesById(id, location))
    }, [])
    const handleBooking = (item, time) => {
        dispatch(GetBookNow({ item, time }))
    }
    return (
        <div className="bg-[#F5F6F8] ">
            <div className='container mx-auto'>
                <div className='text-3xl text-center font-semibold mb-4' >
                    Showtimes and Tickets
                </div>

                {/* <div className='flex justify-center'>
                    <div className='mr-4'>
                        <form>
                            <input className='bg-gray-400 ' type="date" min={moment(data?.data?.results[0].date_start).format("YYYY-MM-DD")} max={moment(data?.data?.results[0].date_end).format("YYYY-MM-DD")} />
                        </form>
                    </div>
                    <div>
                        <form>
                            <select onChange={(e) => setLocation(e.target.value)}  >
                                {data?.data?.results?.map((item,index) => (
                                    <>
                                        <option key={index}  value={item.location_name}>{item.location_name}</option>
                                    </>
                                ))}
                            </select>
                        </form>
                    </div>
                </div> */}
                <div className='mt-10'>
                    <div className=' flex flex-col lg:flex-row w-full '>
                        {data?.data?.results?.map((item) => (
                            <div className=' mr-4 h-[350px] flex-col bg-white  mb-4 rounded-md w-full lg:w-4/12'>
                                <div className=' h-1/4 mb-4 '>
                                    <div className=' flex  items-center  p-4 border-b-[0.5px]  border-[#dedede]'>
                                        <div className='logo-premiere' >
                                            <div className='wrap-image'>
                                                <img src={`${urlImage}${item.logo_premiere}`} alt="image logo" />
                                            </div>
                                        </div>
                                        <div className='details-premiere'>
                                            <div className='name-premiere'>{item.name_premiere}</div>
                                            <div className='address-premiere'>{item.address}</div>
                                            <div className='address-premiere'>{item.location_name}</div>
                                        </div>
                                    </div>

                                </div>
                                <div className='flex-2 h-2/4 '>
                                    <div className='h-2/4 mt-4'>
                                        <Time  idSchedule = {item.id_schedule} setTime= {setTime}  />

                                    </div>
                                    
                                    <div className='wrap-price'>
                                        <div className='title-price'>
                                            Price
                                        </div>
                                        
                                        <div className='price'>${item.price}/seat</div>
                                    </div>
                                </div>
                                <div className=' w-full px-4  '>
                                    <Link to={`/booking/:${id}`}>
                                        <button onClick={(e) => handleBooking(item, time)} className='w-full bg-[#5F2EEA] py-2 border-none rounded-md '>Book now</button>
                                    </Link>
                                </div>

                            </div>

                        ))}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ScheduleMovie
import './schedule.css'
import { useDispatch, useSelector } from 'react-redux/'
import { useEffect, useState } from 'react'
import { GetScheduleByMoviesById } from '../../../redux/actions/Schedule'
import { Link, useParams } from "react-router-dom"
import { GetBookNow } from '../../../redux/actions/BookNow'
import moment from 'moment'
const ScheduleMovie = () => {
    const urlImage = process.env.REACT_APP_URL_IMAGE
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.getScheduleByMoviesById);
    const [time, setTime] = useState()
    const [location, setLocation] = useState()
    console.log(location,'ini location')
    console.log(data.data.results[0], 'adasd')
    useEffect(() => {
        dispatch(GetScheduleByMoviesById(id, location))
    }, [location,data])
    const handleBooking = (item, time) => {
        dispatch(GetBookNow({ item, time }))
    }
    return (
        <div className="bg-[#F5F6F8] ">
            <div className='container mx-auto'>
                <div className='text-3xl text-center font-semibold mb-4' >
                    Showtimes and Tickets
                </div>

                <div className='flex justify-center'>
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
                </div>
                <div className='mt-10'>
                    <div className=' flex'>
                        {data?.data?.results?.map((item) => (
                            <div className='wrap-schedule'>
                                <div className='premiere-details'>
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
                                <div className='section-time'>
                                    <div className='time-details'>
                                        {item?.time?.map((time) => (
                                            <>
                                                <div onClick={() => setTime(time.id)} className='time'>
                                                    {time.time}
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                    <div className='wrap-price'>
                                        <div className='title-price'>
                                            Price
                                        </div>
                                        <div className='price'>${item.price}/seat</div>
                                    </div>
                                </div>
                                <div className='wrap-btn-book'>
                                    <Link to={`/booking/:${id}`}>
                                        <button onClick={(e) => handleBooking(item, time)} className='btn-book'>Book now</button>
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
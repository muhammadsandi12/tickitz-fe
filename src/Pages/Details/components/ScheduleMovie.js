import './schedule.css'
import { useDispatch, useSelector } from 'react-redux/'
import { useEffect, useState } from 'react'
import { GetScheduleByMoviesById } from '../../../redux/actions/Schedule'
import { Link, useParams } from "react-router-dom"
import { GetBookNow } from '../../../redux/actions/BookNow'
const ScheduleMovie = () => {
    const urlImage = process.env.REACT_APP_URL_IMAGE
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data} = useSelector((state) => state.getScheduleByMoviesById);
    const [time, setTime] = useState()

    useEffect(() => {
        dispatch(GetScheduleByMoviesById(id))
    }, [])
    const handleBooking =(item, time) =>{
        dispatch(GetBookNow({item,time}))
    }
    return (
        <div className="container container-showtimes">
           
            <div className='title-show' >
                Showtimes and Tickets
            </div>
            <div className='wrap-select'>
                <div>
                    <form>
                        <select>
                            <option>lklsdfkml</option>
                        </select>

                    </form>
                </div>
                <div>
                    <form>
                        <select>
                        {data?.data?.results?.map((item) =>(
                            <option>{item.location_name}</option>
                            
                        ))}
                        </select>
                    </form>
                </div>ssds
            </div>
           <div className='section-schedule'>
                <div className='container-schedule'>
                     {data?.data?.results?.map((item) => (
                        <div className='wrap-schedule'>
                            <div className='premiere-details'>
                                <div className='logo-premiere' >
                                    <div className='wrap-image'>
                                        <img src={`${urlImage}${item.logo_premiere}`} />
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
                                            <div onClick={() =>setTime(time.id)} className='time'>
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
                                    <button onClick={(e)=>handleBooking(item, time)} className='btn-book'>Book now</button>
                                </Link>
                                </div>

                        </div>

                    ))}

                </div>
            </div> 

        </div>
    )
}

export default ScheduleMovie
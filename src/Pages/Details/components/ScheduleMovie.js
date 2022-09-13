import './schedule.css'
import { useDispatch, useSelector } from 'react-redux/'
import { useEffect } from 'react'
import { GetScheduleByMoviesById } from '../../../redux/actions/Schedule'
import { useParams } from "react-router-dom"

const ScheduleMovie = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data, error, loading } = useSelector((state) => state.getScheduleByMoviesById);
    console.log(data, 'ini data schedule')
    useEffect(() => {
        dispatch(GetScheduleByMoviesById(id))
    }, [])
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
                                        <img src={`http://localhost:3289/uploads/${item.logo_premiere}`} />
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

                                            <div className='time'>
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
                                    <button className='btn-book'>Book now</button>
                                </div>

                        </div>

                    ))}

                </div>
            </div> 

        </div>
    )
}

export default ScheduleMovie
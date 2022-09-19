import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetTime } from "../../../redux/actions/Time"
const Time = ({idSchedule , setTime}) => {
        const dispatch = useDispatch()
        const { data } = useSelector((state) => state.getTime);
        useEffect(()=>{
        dispatch(GetTime(idSchedule))
        },[])
    return (
        <div className='time-details'>
            
            {data?.data?.map((time, index) => (
                <>
                    <div key={index} onClick={() => setTime(time.id)} className= 'time'>
                        {time.time}
                    </div>
                </>
            ))}
        </div>
    )
}
export default Time
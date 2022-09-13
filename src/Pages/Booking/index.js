import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetSeat } from "../../redux/actions/Seat"
const Booking = () =>{
    const dispatch = useDispatch()
    const booking = useSelector((state) => state.getBookNow)
    console.log(booking, 'ini data booking')
    useEffect(() =>{
        dispatch(GetSeat())
    },[])
    return(
        <>
            <Navbar/>
                <div className=" bg-gray">
                    <div className="container mx-auto">                        
                        <div className="flex">
                                <div className="w-8/12 bg-white mr-4">
                                    <div>
                                        Movie Selected
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="w-4/12 bg-white">
                                    order info
                                </div>
                        </div>

                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Booking
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

const Booking = () =>{
    return(
        <>
            <Navbar/>
                <div className="container bg-gray">
                    <div className="flex">
                        <div>
                             Movie Selected
                        </div>
                        <div>
                            order info
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Booking
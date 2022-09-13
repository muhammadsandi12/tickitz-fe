import Navbar from "../../Components/Navbar/Navbar"
import DetailsMovies from "./components/DetailsMovies"
import ScheduleMovie from "./components/ScheduleMovie"
import Footer from "../../Components/Footer/Footer"

const Details = () => {
    return(
        <>
        <Navbar/>
         <DetailsMovies/>
        <ScheduleMovie/> 
        <Footer/>
        </>
    )
}

export default Details

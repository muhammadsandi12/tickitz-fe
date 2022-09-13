import Navbar from "../../Components/Navbar/Navbar"
import DetailsMovies from "./components/DetailsMovies"
import ScheduleMovie from "./components/ScheduleMovie"
import Footer from "../../Components/Footer/Footer"
import {useParams} from "react-router-dom";

const Details = () => {
    let {id} = useParams();
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

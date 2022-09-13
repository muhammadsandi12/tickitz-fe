import React, {useEffect} from 'react'

import Navbar from '../../Components/Navbar/Navbar'
import Banner from './components/Banner'
import Showing from '../../Components/Showing/ShowingCard'
import Footer  from '../../Components/Footer/Footer'
import Upcoming from '../../Components/Upcoming/Upcoming'
import Join from './components/Join'
import { Link } from 'react-router-dom'



const Home = ()=> {
    
    
 
    return(
        <>
        <Navbar />
        <Banner />
        <Showing/>
        <Upcoming/>
        <Join/>
        <Footer /> 

   

        </>
    )
}

export default Home
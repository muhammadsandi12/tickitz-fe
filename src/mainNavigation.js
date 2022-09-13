import './App.css';
import { Route, Routes } from 'react-router-dom';
import {Login,Home, Movies, SignUp, Details, Profile, AddMovies, Booking} from './Pages';

const MainNavigations = () => {
  return (
    <Routes>
      <Route  path='/home' element={<Home/>}/>
      <Route  path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/dashboard' element={<AddMovies/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/details'>
        <Route path=':id' element={<Details/>}/>
       </Route>
       <Route path='/profile' element={<Profile/>}/>
      <Route path='/booking'>
        <Route path=':id' element={<Booking/>}/>
       </Route>

    </Routes>
  )
}

export default MainNavigations;
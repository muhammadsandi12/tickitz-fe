import { combineReducers } from "redux";
import Login from "../reducers/Login";
import Register from "../reducers/Register";
import GetMovies from '../reducers/GetMovies'
import AddMovies from '../reducers/AddMovies'
import GetUsers from "../reducers/GetUsers";
import GetUsersById from "../reducers/GetUsersById"
import GetMoviesById from "../reducers/GetMoviesById"
import GetScheduleByMoviesById from "../reducers/GetScheduleByMovies";
import GetUpcoming from "./GetUpcoming";
import GetNowShowing from "./GetNowShowing";
import UpdateUser from "./UpdateUser";
import DeleteMovies from "./DeleteMovies";


const rootReducers = combineReducers({
    login: Login,
    register: Register,
    addMovies: AddMovies,
    getMovies: GetMovies,
    getUsers: GetUsers,
    getMoviesById: GetMoviesById,
    getUsersById: GetUsersById,
    getScheduleByMoviesById: GetScheduleByMoviesById,
    getUpcoming: GetUpcoming,
    getNowShowing: GetNowShowing,
    updateUser: UpdateUser,
    deleteMovies: DeleteMovies
})

export default rootReducers
import {  useSearchParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { DeleteMovies, GetMovies } from "../../redux/actions/Movies"
import { useEffect, useState } from "react"


const AdminMovies = () => {
    const [query, setQuery] = useSearchParams()
    const [paginate, setPaginate] = useState({ page: query.get('page') ?? 1 })
    const dispatch = useDispatch()
    const movies = useSelector((state) => state.getMovies)
    let { data } = useSelector((state) => state.login);
    const deleted = useSelector((state) => state.deleteMovies)
    const [month] = useState({})
    const isAddMovies = useSelector((state) => state.addMovies)
    
    useEffect(() => {
        dispatch(GetMovies(month, paginate))
    }, [paginate, month,deleted.isDeleteMovies,isAddMovies])
    const handlePaginate = (page) => {
        setPaginate((prevState) => ({ ...prevState, page }))
        query.set('page', page ?? 1)
        setQuery(query)
    }
    const update = (id) =>{
    }
    const handleDelete = (id) => {
        dispatch(DeleteMovies(id,data.token))
        
    }

    let totalPage = Array(movies.data.totalPage).fill() ?? []
    return (
        <div className=" bg-gray">
            <div className="container mx-auto">
                <div className=" flex justify-between">
                    <div className="w-4/12 text-2xl font-bold">
                        List Movie
                    </div>
                    <div className="w-4/12  flex justify-end items-end">
                        <input className="w-8/12 text-base font-normal py-2 px-2 rounded-lg outline-none" placeholder="Search Movie Name..." onChange={(e) => setPaginate((prev) => ({
                            ...prev,
                            search: e.target.value,

                        }))} />
                    </div>
                </div>
              
                <div className="wrap-list">
                    {movies?.data?.results?.map((item) => (
                        <>
                            <div className="flex flex-col mx-4 my-2 border-[0.5px] border-[#DEDEDE] rounded-r-lg px-6 py-4 justify-between ">
                                <div className=" ">
                                    <img className="w-[159px] h-[244px] rounded-lg" src={`http://localhost:3289/uploads/${item.cover}`} alt={item.title} />
                                </div>
                                <div className="text-center mt-4" >
                                    <div className="text-lg font-bold text-[#14142B]">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="text-[#A0A3BD] text-xs mt-2 font-normal">
                                        <p>{item.categories}</p>
                                    </div>
                                </div>
                           
                                    <button onClick={()=> update(item.id_movies)} className="w-full mt-4 py-2 rounded-lg text-sm text-[#5F2EEA] font-normal bg-white border-[0.5px] border-[#5F2EEA] ">Update</button>
                                    <button onClick={() => handleDelete(item.id_movies)} className="w-full mt-4 py-2 rounded-lg text-sm text-[#ED2E7E] font-normal bg-white border-[0.5px] border-[#ED2E7E] ">Delete</button>
                               
                            </div>

                        </>
                    ))}


                </div>
                <div className="wrap-pagination">
                    {totalPage?.map((item, index) => {
                        return (
                            <>

                                <button className={`btn-pagination ${paginate.page === index + 1 ? `btn-active` : 'btn-noActive'}`} onClick={(e) => handlePaginate(index + 1)} >{index + 1}</button>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default AdminMovies
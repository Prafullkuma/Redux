import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import AddForm from './Form/AddForm'
import MovieStat from './Form/MovieStat'
import MovieList from './MovieList'
import {order_by} from '../actions/movieActions'
const MovieContainer = () => {

        const [search,setSearch]=useState('')
        const [list,setList]=useState([])
        const [sort,setSort]=useState('')

        const dispatch = useDispatch()

        const movie=useSelector((state)=>{
                return state.movie
        })
        const handleChange=(e)=>{
                const str=e.target.value
                const result=movie.filter((ele)=>{
                        return ele.name.includes(str)
                })
                setSearch(str)
                setList(result)
        }
        
        const handleSort=(e)=>{
                const attr=e.target.value
                    setSort(attr)
                dispatch(order_by(attr))
        }

        return (
            <div>
                <div className="container overflow-hidden mt-3">
                    <div className="row gx-5">
                        <div className="col">

                                <div className="p-3 border bg-light">                
                                    <input type="text" 
                                        className="form-control"
                                        value={search}
                                        onChange={handleChange}
                                        placeholder="Search the term"
                                    />   
                                </div>
                        </div>

                         <div className="col">
                                <div className="p-3 border bg-light">

                                    <select className="form-control" value={sort} onChange={handleSort}>
                                        <option className="dropdown-item" value="">Select to Sort</option>
                                        <option className="dropdown-item" value="a-z-asc"> A-Z ASC </option>
                                        <option className="dropdown-item" value="z-a des"> Z-A DSC </option>
                                        <option className="dropdown-item" value="rating-asc">Rating ASC</option>
                                        <option className="dropdown-item" value="rating-dsc">Rating DSC</option>
                                    </select>
                                </div>
                        </div>
                    </div>

                    <br/>

                    <h1 className="text-secondary">Total movies-{list.length !==0 ? list.length :movie.length}</h1>

                    <div className="container mt-3">
                        <div className="row">
                         <div className="col col-lg-9">
                            {list.length !==0 ?
                                    <div>
                                        <h1>search term found</h1>
                                        <MovieList movie={list}/>
                                    </div>
                            :
                                <MovieList movie={movie}/>
                            }    
                         </div>
                        <div className="col col-lg-2">      
                                <AddForm/>
                                <MovieStat/>
                        </div>
                        </div>
                    </div>
                   
                </div>
                </div>
            )
}

export default MovieContainer

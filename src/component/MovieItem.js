import React from 'react'
import {useDispatch} from 'react-redux'
import {removeCard} from '../actions/movieActions'

const MovieItem = ({id,name,rating}) => {
    const dispatch = useDispatch()
    const removeHandle=(id)=>{
        dispatch(removeCard(id))    
    }
    return (
        <div>
                <div className="col">
                        <div className="card">
                                <div className="card-body">
                                    <img src="..." class="card-img-top" alt="image not found" style={{color:'red'}} />
                                    <h3 className="card-title">{name}</h3>
                                    <p className="card-text"> {rating}</p>
                                    <button onClick={()=>removeHandle(id)}>Remove</button>
                                </div>
                        </div>
                    </div>
               
        </div>
    )
}

export default MovieItem

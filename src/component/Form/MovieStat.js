import React from 'react'
import { useSelector } from 'react-redux'

const MovieStat = () => {
    const movie=useSelector((state)=>{
        return state.movie
    })

    const findHighest=(movie)=>{
        const result=movie.sort((a, b)=> {
            return a.rating - b.rating
        })
        return  result[0]
    }
    const data=findHighest(movie)
    
    return (
        <div>
            <hr/>
            <h3>Movie stats</h3>
            <h4>Total movie-{movie.length}</h4>
            <h1>{data && <span className="text-success">{data.name} </span>}</h1>       
        </div>
    )
}

export default MovieStat

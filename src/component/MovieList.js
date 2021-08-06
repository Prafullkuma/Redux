import React from 'react'
import MovieItem from './MovieItem'

const MovieList = ({movie}) => {
    
    return (
        <div >
            <div className="row row-cols-1 row-cols-md-2 g-3">
                {movie.map((ele)=>{
                    return <MovieItem key={ele.id} {...ele} />
                })}
            </div>
            
        </div>
    )
}

export default MovieList

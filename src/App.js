import React from 'react'
import MovieContainer from './component/MovieContainer'
const App = () => {
    
    return (
        <div className="container m-4">
            <div className="card-header  bg-danger">
                <h1 className="text-white">Movie List App</h1>
            </div>
            <MovieContainer/>
        </div>
    )
}

export default App

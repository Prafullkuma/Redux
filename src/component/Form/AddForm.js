import React from 'react'
import MovieForm from './MovieForm'
import {useDispatch} from 'react-redux'
import {addMovie} from '../../actions/movieActions'


const AddForm = () => {
    const dispatch = useDispatch()
    const formSubmission=(formData)=>{
        dispatch(addMovie(formData))
    }
    return (
        <div>
            <h3>Add Form</h3>
            <MovieForm formSubmission={formSubmission} />
        </div>
    )
}

export default AddForm

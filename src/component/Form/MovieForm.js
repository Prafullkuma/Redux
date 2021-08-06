import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const MovieForm = (props)=> {
    
    const {formSubmission}=props
    const [name,setName]=useState('')
    const [rating,setRating]=useState('')
    const [formError,setFormError]=useState({})

    let error={}

    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="name"){
            setName(e.target.value)
        }
        else if(attr==="rating"){
            setRating(e.target.value)
        }
    }
    const formValidation=()=>{
        if(name.trim().length===0){
          error.name="Name can't be blank"        
        }
        if(rating.trim().length===0){
            error.rating="Rating can't be blank"
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        formValidation()

        const formData={
            id:uuidv4(),
            name:name,
            rating:rating
        }
        if(Object.keys(error).length===0){
            setFormError({})                
            formSubmission(formData)
            setName('')
            setRating('')
        }else{
            setFormError(error)
        }
    }
    return (    
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                      type="text" 
                      name="name" 
                      value={name}
                      onChange={handleChange}
                      placeholder="Enter Movie name"/>
                      {formError.name && <span>{formError.name}</span>}
                      <br/><br/>
                <input 
                        type="text" 
                        name="rating" 
                        value={rating}
                        onChange={handleChange}
                        placeholder="IMDB rating"/>
                    
                        {formError.rating && <span>{formError.rating}</span>}
                        <br/><br/>
                <input type="submit" className="btn btn-dark" value="Add movie"/>
            </form>
            <br/>

        </div>
    )
}

export default MovieForm

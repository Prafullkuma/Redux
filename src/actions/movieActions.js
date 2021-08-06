
export const addMovie=(formData)=>{
    return{
        type:'ADD_MOVIE',
        payload:formData
    }
}
export const order_by=(keyword)=>{

    return{
        type:'SORT_BY',
        payload:keyword
    }
}
export const removeCard=(id)=>{

    return{
        type:'REMOVE_MOVIE',
        payload:id
    }
}
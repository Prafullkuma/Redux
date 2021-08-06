const movieState=[
    {id:1,name:'Shooly',rating:'23'},
    {id:2,name:'Blood money',rating:'26'}
]

const movieReducers=(state=movieState,action)=>{
    switch (action.type) {
        case 'ADD_MOVIE':{
            return [action.payload,...state]
        }
        case 'SORT_BY':{
             if(action.payload==="rating-asc"){
                return state.sort((a,b)=>{
                    return a.rating-b.rating
                })
             }
             else if(action.payload==="rating-dsc"){
                return state.sort((a,b)=>{
                    return b.rating-a.rating
                })  
             }
             else if(action.payload==='a-z-asc'){
                 return state.sort(function(a, b) {
                    let nameA = a.name.toUpperCase(); 
                    let nameB = b.name.toUpperCase(); 
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    return 0;
                  });
             }
             else if(action.payload==="z-a-des"){
                return state.sort(function(a, b) {
                    let nameA = a.name.toUpperCase(); 
                    let nameB = b.name.toUpperCase(); 
                    if (nameA > nameB) {
                      return -1;
                    }
                    if (nameA < nameB) {
                      return 1;
                    }
                    return 0;
                  });
             }

        }
        case 'REMOVE_MOVIE':{
            return state.filter((ele)=>{
                return ele.id !== action.payload
            })
        }
        default:{
            return state
        }
    }
    
}

export default movieReducers
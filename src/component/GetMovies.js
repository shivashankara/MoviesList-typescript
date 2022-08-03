import React, { useEffect,useState } from 'react';
import axios from 'axios';



const  GetMovies=(props) =>{
const [movies, setmovies] = useState([])

useEffect(()=>{
    axios.get(`https://my.api.mockaroo.com/graph.json?key=158c1970`)
    .then(res =>{
        console.log(res)
    })
    .catch(error =>{
      alert( error.message) 
    })
},[])

    return ( 
        <div>Functional component </div>
     );
}

export default GetMovies;
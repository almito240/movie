import React from 'react'

// let PORT=process.env.PORT || 3000;

const API=process.env.NODE_ENV === 'production' ? `https://movie211213.herokuapp.com/` : `http://localhost:8080`;

export default async function getAllMovies() {

    try{
        return await fetch(`${API}/movies/all`)
        .then((res)=>{return res.json()})
        .then(results=>{return results.data})
    }catch(err){
    console.log(err);
    }
    
}
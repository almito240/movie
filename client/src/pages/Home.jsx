import React, {useState , useEffect} from 'react'

import getAllMovies from '../service/movies-service'
import CustomTableComponent from '../components/table'


export default function Home(props) {
  
const [movies, setMovies] = useState([])
useEffect(getMovies,[])
function getMovies() {
  getAllMovies().then((res)=>{setMovies(res)})
}

       const movieColumns = [
        {
          name: "_id",
          label: "Id",
          options: {
           filter: true,
           sort: true,
          }
         },
         {
         name: "movieName",
         label: "Movie Name",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
          name: "year",
          label: "Year",
          options: {
           filter: true,
           sort: true,
          }
         },
        {
         name: "rating",
         label: "Rating",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "createdAt",
         label: "Created At",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "updateAt",
         label: "Last Update",
         options: {
          filter: true,
          sort: false,
         }
        },
       ];

       return (
        <div>
            
            <h1>Home</h1>

            <CustomTableComponent data={movies} title={"Movies"} columns={movieColumns}/>
            
        </div>
    )
}
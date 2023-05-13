import React from 'react'
import { data } from "../data/data.js";
import RecomenedMovies from './recomened-movies.jsx';


function RecomenedList() {
  return (
    <div className="entertainment-web-movie__recomened-for-you-movies">
        {data.map((request) => {
        return (
            <RecomenedMovies
            year={request.year}
            category={request.category}
            rating={request.rating}
            title = {request.title}
            />
        )
      })}
    </div>
  )
}

export default RecomenedList
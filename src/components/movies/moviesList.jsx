import React from 'react';

export const MoviesList = () => {
  const movies = movies.map(movie => {
    return(
      <option key={movie.id} value={movie.title}>{movie.title}</option>
    )
  })

  return()
}
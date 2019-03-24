import axios from 'axios';

export const getMovies = () => axios.get("https://ghibliapi.herokuapp.com/films")
export const getPeople = () => axios.get("https://ghibliapi.herokuapp.com/people")
export const getLocations = () => axios.get("https://ghibliapi.herokuapp.com/locations")
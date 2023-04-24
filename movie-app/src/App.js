import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App= ()=> {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState('');

const getMovieRequest = async() =>{
  const url = "http://www.omdbapi.com/?s=avengers&apikey=29fda01a"

  const response = await fetch(url);
  const responseJson = await response.json();

  console.log(responseJson.Search);
  setMovies(responseJson.Search);
};
useEffect(()=>{
  getMovieRequest();
}, [])



  return(
    <div className='container-fluid movie-app'> 
      <div className = 'row'>

      </div>

      <div className='d-flex justify-content-start m-3'>
        <MovieList movies = {movies}/>
      </div>
    </div>
  ); 
};

export default App;

import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';

const App= ()=> {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async(searchValue) =>{
  const url =  `http://www.omdbapi.com/?s=${searchValue}&apikey=29fda01a`;
  
  const response = await fetch(url);
  const responseJson = await response.json();

  if(responseJson.Search){
    setMovies(responseJson.Search);
  }



};

useEffect(()=>{
  getMovieRequest(searchValue);
}, [searchValue])



  return(
    <div className='container-fluid movie-app'> 
      <div className = 'row d-flex align-items-center mt-10 mb-10'>
        <MovieListHeading heading = 'Movies' />
        <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
      </div>
      <div className='d-flex justify-content-start m-10'>
          <MovieList movies = {movies} favoriteComponent = {AddFavorites}/>
      </div>
    </div>
  ); 
};

export default App;

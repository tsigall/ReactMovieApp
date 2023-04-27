import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';

const App= ()=> {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] =  useState([]); 
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async(searchValue) =>{
  const url =  `http://www.omdbapi.com/?s=${searchValue}&apikey=29fda01a`;
  
  // const url = 'https://api.themoviedb.org/3/search/movie?api_key=93fca930502ca26f4f11c7e8bee747a4&query={searchValue}'

  // const apiKey = '93fca930502ca26f4f11c7e8bee747a4';
  // const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${(searchValue)}`

  // const url =  'https://api.themoviedb.org/3/search/movie?api_key=93fca930502ca26f4f11c7e8bee747a4&query=Action'



  const response = await fetch(url);
  const responseJson = await response.json();

  if(responseJson.Search){
    setMovies(responseJson.Search);
  }



};

useEffect(()=>{
  getMovieRequest(searchValue);
}, [searchValue])

useEffect(() => {
  const movieFavorites = JSON.parse(
    localStorage.getItem('react-movie-app-favorites')
  );

  if (movieFavorites) {
    setFavorites(movieFavorites);
  }
}, []);

const saveToLocalStorage = (items) => {
  localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
};

const addFavoriteMovie = (movie) => {
  const newFavoriteList = [...favorites, movie];
  setFavorites(newFavoriteList);
  saveToLocalStorage(newFavoriteList);
};

const removeFavoriteMovie = (movie) => {
  const newFavoriteList = favorites.filter(
    (favorite) => favorite.imdbID !== movie.imdbID
  );

  setFavorites(newFavoriteList);
  saveToLocalStorage(newFavoriteList);
};

  return(
    <div className='container-fluid movie-app'> 
      <div className = 'row d-flex align-items-center mt-10 mb-10'>
        <MovieListHeading heading = 'Movies' />
        <SearchBox searchValue = {searchValue} setSearchValue = {setSearchValue} />
      </div>
      <div className='d-flex justify-content-start m-10'>
          <MovieList movies = {movies} 
          handleFavoritesClick = {addFavoriteMovie} 
          favoriteComponent = {AddFavorites}/>

      </div>
      <div className = 'row d-flex align-items-center mt-10 mb-10'>
        <MovieListHeading heading = 'Favorites' />
      </div>
      <div className='d-flex justify-content-start m-10'>
          <MovieList
          movies = {favorites} 
          handleFavoritesClick = {removeFavoriteMovie} 
          favoriteComponent = {RemoveFavorites}/>

      </div>



    </div>




  ); 
};

export default App;
import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';
import AddRatings from './components/AddRating';

const App= ()=> {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] =  useState([]); 
  const [searchValue, setSearchValue] = useState('');
  const [ratings, setRatings] = useState([]);

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

// const addNewRating = (movie) => {
//   const newRatingList = ratings.filter(
//     (rate)
//   )
// }

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
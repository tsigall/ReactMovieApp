import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import SearchBox from './components/SearchBox';
import AddFavorites from './components/AddFavorites';
import RemoveFavorites from './components/RemoveFavorites';
import AddRating from './components/AddRating';
import RatingsModal from './RatingsModal';


const App= ()=> {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] =  useState([]);
  const [searchValue, setSearchValue] = useState('');
  // const [rating, setRating] = useState([]);
  const [show, setShow] = useState(false);
  const [movie, setMovie] = useState("");
  const [five, setFive] = useState([]);
  const [four, setFour] = useState([]);
  const [three, setThree] = useState([]);
  const [two, setTwo] = useState([]);
  const [one, setOne] = useState([]);


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

const addMovieRating = (movie) => {
  setShow(true);
  setMovie(movie);
}

const onClose = (rating) => {
  setShow(false);
  handleRating(rating);
}

const handleRating = (rating) => {

  //five stars
  if(rating === 5){
    const newList = [...five, movie];
    setFive(newList);
    saveToLocalStorage(newList);
  } else {
    const newList = five.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFive(newList);
    saveToLocalStorage(newList);
  }

  //four stars
  if(rating === 4){
    const newList = [...four, movie];
    setFour(newList);
    saveToLocalStorage(newList);
  } else {
    const newList = four.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFour(newList);
    saveToLocalStorage(newList);
  }

  //three stars
  if(rating === 3){
    const newList = [...three, movie];
    setThree(newList);
    saveToLocalStorage(newList);
  } else {
    const newList = three.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setThree(newList);
    saveToLocalStorage(newList);
  }

  //two stars
  if(rating === 2){
      const newList = [...five, movie];
      setTwo(newList);
      saveToLocalStorage(newList);
    } else {
      const newList = two.filter(
        (favorite) => favorite.imdbID !== movie.imdbID
      );
      setTwo(newList);
      saveToLocalStorage(newList);
    }

  //one star
  if(rating === 1){
    const newList = [...five, movie];
    setOne(newList);
    saveToLocalStorage(newList);
  } else {
    const newList = one.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setOne(newList);
    saveToLocalStorage(newList);
  }
}


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

      <div>
        <RatingsModal show = {show}
        onClose = {onClose}
        movie = {movie}
        />
      </div>

      <div className='d-flex justify-content-start m-10'>
          <MovieList movies = {movies} 
          handleFavoritesClick = {addFavoriteMovie} 
          favoriteComponent = {AddFavorites}
          handleRatingsClick = {addMovieRating}
          ratingComponent = {AddRating}/>
      </div>

      <div className = 'row d-flex align-items-center mt-10 mb-10'>
        <MovieListHeading heading = 'Favorites' />
      </div>

      <div className='d-flex justify-content-start m-10'>
          <MovieList
          movies = {favorites} 
          handleFavoritesClick = {removeFavoriteMovie} 
          favoriteComponent = {RemoveFavorites}
          handleRatingsClick = {addMovieRating}
          ratingComponent = {AddRating}/>
      </div>

      <div className = 'row d-flex align-items-center mt-10 mb-10'>
        <MovieListHeading heading = 'Five Stars' />
      </div>

      <div className='d-flex justify-content-start m-10'>
          <MovieList
          movies = {five} 
          handleFavoritesClick = {addFavoriteMovie} 
          favoriteComponent = {AddFavorites}
          handleRatingsClick = {addMovieRating}
          ratingComponent = {AddRating}/>
      </div>

      <div className = 'row d-flex align-items-center mt-10 mb-10'>
        <MovieListHeading heading = 'Four Stars' />
      </div>

      <div className='d-flex justify-content-start m-10'>
          <MovieList
          movies = {four} 
          handleFavoritesClick = {addFavoriteMovie} 
          favoriteComponent = {AddFavorites}
          handleRatingsClick = {addMovieRating}
          ratingComponent = {AddRating}/>
      </div>

      <div className = 'row d-flex align-items-center mt-10 mb-10'>
        <MovieListHeading heading = 'Three Stars' />
      </div>

      <div className='d-flex justify-content-start m-10'>
          <MovieList
          movies = {three} 
          handleFavoritesClick = {addFavoriteMovie} 
          favoriteComponent = {AddFavorites}
          handleRatingsClick = {addMovieRating}
          ratingComponent = {AddRating}/>
      </div>

      <div className = 'row d-flex align-items-center mt-10 mb-10'>
        <MovieListHeading heading = 'Two Stars' />
      </div>

      <div className='d-flex justify-content-start m-10'>
          <MovieList
          movies = {two} 
          handleFavoritesClick = {addFavoriteMovie} 
          favoriteComponent = {AddFavorites}
          handleRatingsClick = {addMovieRating}
          ratingComponent = {AddRating}/>
      </div>

      <div className = 'row d-flex align-items-center mt-10 mb-10'>
        <MovieListHeading heading = 'One Stars' />
      </div>

      <div className='d-flex justify-content-start m-10'>
          <MovieList
          movies = {one} 
          handleFavoritesClick = {addFavoriteMovie} 
          favoriteComponent = {AddFavorites}
          handleRatingsClick = {addMovieRating}
          ratingComponent = {AddRating}/>
      </div>

    </div>




  ); 
};

export default App;
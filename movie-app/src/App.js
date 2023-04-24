import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

const App= ()=> {
  const [movies, setMovies] = useState([
    {
    Title: 'Star Wars: Episode IV - A New Hope',
    Year: '1977',
    imdbID: 'tt0076759',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg'
},
{
    Title: 'Star Wars: Episode V - The Empire Strikes Back',
    Year: '1980',
    imdbID: 'tt0080684',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg'
},
{
  Title: 'Rogue One: A Star Wars Story',
  Year: '2016',
  imdbID: 'tt3748528',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg'
},
{
  Title: 'Star Wars: Episode VIII - The Last Jedi',
  Year: '2017',
  imdbID: 'tt2527336',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg'
},
{
  Title: 'Star Wars: Episode IX - The Rise of Skywalker',
  Year: '2019',
  imdbID: 'tt2527338',
  Type: 'movie',
  Poster: 'https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg'
}
]);

const getMovieRequest = async() =>{
  const url = "http://www.omdbapi.com/?s=star wars&apikey=29fda01a"

  const response = await fetch(url);
  const responseJson = await response.json();
  console.log(responseJson);
};
useEffect(()=>{
  getMovieRequest();
}, [])







  return(
    <div className='container-fluid movie-app'> 
      <div className='row'>
        <MovieList movies = {movies}/>
      </div>
    </div>
  ); 
};

export default App;

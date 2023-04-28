import React from 'react';

const MovieList = (props) => {
	const FavoriteComponent = props.favoriteComponent;
    const RatingsComponent = props.ratingsComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavoritesClick(movie)}
						className='overlay1 d-flex align-items-center justify-content-center'
					>
						<FavoriteComponent />
					</div>
                    <div
						onClick={() => props.handleRatingsClick(movie)}
						className='overlay2 height d-flex align-items-center justify-content-center'
					>
						<RatingsComponent />
					</div> 
				</div>
			))}
		</>
	);
};

export default MovieList;

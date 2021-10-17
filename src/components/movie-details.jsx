import { useEffect, useState } from "react";

import Header from "./header";

const MovieDetails = ({ movieDetail, favoritsMovies, setFavoritsMovies }) => {
	useEffect(() => {
		const isMovieInFavorites = favoritsMovies.filter(
			(favoritMovie) => favoritMovie.episode_id === movieDetail.episode_id
		);
		setIsFavorite(isMovieInFavorites.length === 0);
	}, [favoritsMovies, movieDetail.episode_id]);

	const [isFavorite, setIsFavorite] = useState(false);

	const addToFavorites = () =>
		setFavoritsMovies([...favoritsMovies, movieDetail]);

	const removeFromFavorites = () => {
		const updatedFavorites = favoritsMovies.filter(
			(item) => item.episode_id !== movieDetail.episode_id
		);
		setFavoritsMovies(updatedFavorites);
	};

	return (
		<div className='col-md-8'>
			<Header title={"Movie Detailes Section"} />
			<div className='card'>
				<div className='card-header'>
					Directer: {movieDetail.director}
					{isFavorite && (
						<button
							onClick={addToFavorites}
							className='btn btn-sm btn-dark float-end'
						>
							Add to Favories
						</button>
					)}
					{!isFavorite && (
						<button
							onClick={removeFromFavorites}
							className='btn btn-sm btn-danger float-end'
						>
							Remove from Favories
						</button>
					)}
				</div>

				<div className='card-body'>
					<h5 className='card-title'>{movieDetail.title}</h5>
					<p className='card-text'>{movieDetail.opening_crawl}</p>
				</div>
				<div className='card-footer text-muted'>
					Release Date: {movieDetail.release_date}
				</div>
			</div>
		</div>
	);
};

export default MovieDetails;
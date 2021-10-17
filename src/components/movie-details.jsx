import { useEffect, useState } from "react";

import Header from "./header";

const MovieDetails = ({ movieDetail, favoritsMovies, setFavoritsMovies }) => {
	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const isFavorite = favoritsMovies.filter(
			(favoritMovie) => favoritMovie.episode_id === movieDetail.episode_id
		);
		setIsFavorite(isFavorite.length === 0);
	}, [favoritsMovies, movieDetail.episode_id]);

	const addToFavorites = () =>
		setFavoritsMovies([...favoritsMovies, movieDetail]);

	const removeFromFavorites = () => {
		const updatedFavorites = favoritsMovies.filter(
			(item) => item.episode_id !== movieDetail.episode_id
		);
		setFavoritsMovies(updatedFavorites);
	};

	const renderNoMovieSelected = () => {
		return (
			<div className='alert alert-secondary' role='alert'>
				Click on a movie, to see the movie's detailes
			</div>
		);
	};

	return (
		<>
			<Header title='Movie Detailes Section' />
			{Object.keys(movieDetail).length === 0 ? (
				renderNoMovieSelected()
			) : (
				<div className='card'>
					<div className='card-header'>
						Directer: {movieDetail.director}
						{isFavorite && (
							<button
								onClick={addToFavorites}
								className='btn btn-sm btn-dark float-end'
							>
								<i className='fas fa-bookmark me-2'></i>
								Add to Favorite
							</button>
						)}
						{!isFavorite && (
							<button
								onClick={removeFromFavorites}
								className='btn btn-sm btn-danger float-end'
							>
								<i className='fas fa-trash-alt me-2'></i>
								Remove from Favorite
							</button>
						)}
					</div>
					<div className='card-body'>
						<div style={{ display: "flex", alignItems: "baseline" }}>
							<i className='fas fa-video float me-2'></i>
							<h5 className='card-title'>{movieDetail.title}</h5>
						</div>
						<p className='card-text'>{movieDetail.opening_crawl}</p>
					</div>
					<div className='card-footer text-muted'>
						<i className='fas fa-calendar-alt me-2'></i>
						Release Date: {movieDetail.release_date}
					</div>
				</div>
			)}
		</>
	);
};

export default MovieDetails;

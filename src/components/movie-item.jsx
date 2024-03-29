import { useEffect, useMemo, useState } from "react";

const MovieItem = ({ setMovieDetail, movieData, movieDetail }) => {
	const [isActive, setIsActive] = useState(false);

	const handleIsActive = useMemo(() => {
		return movieData.episode_id === movieDetail.episode_id;
	}, [movieData.episode_id, movieDetail.episode_id]);

	useEffect(() => {
		setIsActive(handleIsActive);
	}, [handleIsActive]);

	const onSelectMovie = () => setMovieDetail(movieData);

	const movieItemClassName = () => {
		let className = "list-group-item list-group-item-action py-3 lh-tight";
		if (isActive) className += " active";
		return className;
	};

	return (
		<div className={movieItemClassName()} onClick={onSelectMovie}>
			<div className='d-flex align-items-center justify-content-between'>
				<strong className='mb-1'>{movieData.title}</strong>
			</div>
			<div className='col-10 mb-1 small'>
				{movieData.opening_crawl.slice(0, 100) + "..."}
			</div>
		</div>
	);
};

export default MovieItem;

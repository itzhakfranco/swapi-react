import { useEffect, useState } from "react";

const MovieItem = ({ setMovieDetail, movieData, movieDetail }) => {
	useEffect(() => {
		const test = movieData.episode_id === movieDetail.episode_id;
		setIsActive(test);
	}, [movieData.episode_id, movieDetail.episode_id]);

	const className = () => {
		let className = "list-group-item list-group-item-action py-3 lh-tight";
		if (isActive) className += " active";
		return className;
	};
	const [isActive, setIsActive] = useState(false);
	return (
		<div className={className()} onClick={() => setMovieDetail(movieData)}>
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

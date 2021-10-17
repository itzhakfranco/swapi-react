import MovieItem from "./movie-item";
import Header from "./header";

const MovieList = ({ moviesData, setMovieDetail, movieDetail }) => {
	return (
		<>
			<Header title='Star Wars Movies' />
			<div className='list-group list-group-flush border-bottom scrollarea'>
				{moviesData.map((movie) => (
					<MovieItem
						key={movie.episode_id}
						movieData={movie}
						movieDetail={movieDetail}
						setMovieDetail={setMovieDetail}
					/>
				))}
			</div>
		</>
	);
};

export default MovieList;

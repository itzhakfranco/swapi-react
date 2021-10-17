import { useEffect, useState } from "react";

import axios from "axios";

import MovieList from "./components/movie-list";
import MovieDetails from "./components/movie-details";
import PreLoader from "./components/utils/pre-loader";

function App() {
	const [moviesData, setMoviesData] = useState([]);
	const [movieDetail, setMovieDetail] = useState({});
	const [favoritsMovies, setFavoritsMovies] = useState([]);

	useEffect(() => {
		fetchMovieList();
		loadFavoritesFromState();
	}, []);

	useEffect(() => {
		saveFavoritesToState();
	}, [favoritsMovies]);

	const saveFavoritesToState = () => {
		if (favoritsMovies.length > 0) {
			const serializedState = JSON.stringify(favoritsMovies);
			localStorage.setItem("favoritsMovies", serializedState);
		}
	};

	const loadFavoritesFromState = () => {
		const serializedState = localStorage.getItem("favoritsMovies");
		if (serializedState) setFavoritsMovies(JSON.parse(serializedState));
	};

	const fetchMovieList = async () => {
		const { data } = await axios.get("https://swapi.dev/api/films/");
		setMoviesData(data.results);
	};
	return (
		<div className='container'>
			<div className='row'>
				{moviesData.length === 0 ? (
					<PreLoader />
				) : (
					<>
						<MovieList
							moviesData={moviesData}
							setMovieDetail={setMovieDetail}
							movieDetail={movieDetail}
						/>
						<div className='col-md-8'>
							<MovieDetails
								movieDetail={movieDetail}
								favoritsMovies={favoritsMovies}
								setFavoritsMovies={setFavoritsMovies}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default App;

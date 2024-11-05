import { useState, useEffect } from "react";
import getMovies from "../../API's/TMDB";
import MovieCard from "../movie card/MovieCard";

function RecomendedMovies() {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getMovies().
            then(res => {
                // console.log(res.data.results);
                setMovies(res.data.results);
            })
            .catch(err => {
                console.error("Error fetching movies:", err.message || err);
                setError("Could not fetch recommended movies.");
            })
    }, []);

    return (
        <div className="mx-24 my-10" >
            <h1 className="text-text-highlight text-2xl font-mono" >Recommend Movies</h1>

            {error ? (
                <p className="text-red-500 mt-4">{error}</p>
            ) : (
                <div className="grid grid-rows-4 grid-flow-col gap-4 mt-4" >
                    {/* {movies.map((movie, i) => (<MovieCard key={i} movie={movie} />))} */}
                    {movies.length ? (
                        movies.map((movie, i) => <MovieCard key={i} movie={movie} />)
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            )}


        </div>
    )
}

export default RecomendedMovies
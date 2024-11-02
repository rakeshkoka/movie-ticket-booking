import {useState, useEffect} from "react";
import getMovies from "../../API's/TMDB";
import MovieCard from "../movie card/MovieCard";

function RecomendedMovies() {

    const [movies, setMovies] = useState([]);

    useEffect( () => {
        getMovies().
        then( res => {
            // console.log(res.data.results);
            setMovies(res.data.results);
        } )
        .catch(err => {
            console.log(err);
        })
    },[]);

  return (
    <div className="mx-24 my-10" >
        <div>
            <h1 className="text-text-highlight text-2xl font-mono" >Recommend Movies</h1>

            <div className="grid grid-rows-4 grid-flow-col gap-4 mt-4" >
                {movies.map( (movie, i) => ( <MovieCard key={i} movie={movie} /> ) ) }
            </div>
        </div>
    </div>
  )
}

export default RecomendedMovies
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "../footer/Footer";

function MovieDetails() {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=41c953dc7d1c21d27df7b693e9740a3c`)
            .then(res => {
                console.log(res.data);
                setMovieDetails(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id]);

    if (!movieDetails) {
        return <p>Loading...</p>; // Display a loading message until data is available
    }

    const backDropUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`;

    return (
        <div className="mx-auto mt-2" style={{ width: '100%', height: '2338.2px' }}>
            <section className="" style={{ height: '480px' }}>
                <div className="py-8 mx-auto" style={{
                    // backgroundImage: `url(${backDropUrl})`,
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${backDropUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100%",
                    backgroundAttachment: "fixed", 
                    width: '98%',
                    backgroundRepeat: "no-repeat",
                }}>
                    <div className="mx-auto flex items-center" style={{ width: '1240px', height: '416px', }}>
                        {/* Image div */}
                        <div style={{ width: '261px', height: '392px' }}>
                            <img className="w-full h-auto rounded-xl"
                                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                                alt={`${movieDetails.title} poster`}
                            />
                        </div>
                        {/* details div */}
                        <div className="pl-8 font-serif flex flex-col justify-around items-start" style={{ width: '488px', height: '295.600px', }} >
                            <h1 className="text-text-highlight text-4xl font-semibold font-sans" >{movieDetails.title}</h1>
                            <p className="text-text-light" >{movieDetails.original_language.toUpperCase()}</p>
                            <div className="w-52 h-12" >
                                <button className="h-full w-full text-text-highlight font-semibold text-lg font-mono" style={{ backgroundColor: 'rgb(248, 68, 100', borderRadius: '8px' }} >Book tickets</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div  className="mx-auto" style={{height: '2217px', width: '1240px',}}>
                <section className="component-1 p-8" style={{borderTop: '1px solid white'}} >
                    <span>
                        <h4 className="text-text-highlight text-2xl font-serif font-semibold mb-2" >About the movie</h4>
                        <p className="text-text-light" >{movieDetails.overview}</p>
                    </span>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default MovieDetails;

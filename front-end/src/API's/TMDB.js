import axios from 'axios';

function getMovies(){
    return axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=41c953dc7d1c21d27df7b693e9740a3c');
};

export default getMovies;
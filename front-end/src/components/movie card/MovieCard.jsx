/* eslint-disable react/prop-types */


function MovieCard({ movie }) {
  return (
    <div className="card bg-primary-bg border-0 cursor-pointer" style={{ width: '222.400px', height: '442.013px' }} >
      <img className="w-full h-auto rounded-xl" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
      <div className="card-body">
        <h5 className="card-title font-medium text-lg text-text-highlight">{movie.title}</h5>
        <p className="card-text text-text-light">{movie.media_type}</p>
      </div>
    </div>
  )
}

export default MovieCard
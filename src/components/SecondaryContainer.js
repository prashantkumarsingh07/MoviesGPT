
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies && (<div className='  bg-black'>
    <div className=' mt-0  md:-mt-56 pl-4 md:pl-12   relative z-20 '>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
    <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
    <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
    </div>
    
    </div>)
  );
};

export default SecondaryContainer;
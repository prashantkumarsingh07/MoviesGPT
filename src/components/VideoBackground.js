
import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";



const VideoBackground = ({movieId}) => {
  const trailerVideo =useSelector(store=>store.movies?.trailerVideo);
  
  useMovieTrailer(movieId);

  return (
    <div className=" w-screen "><iframe className=" w-screen aspect-video"  src={"https://www.youtube.com/embed/e1k1PC0TtmE?si=SlyQLIGnC4a-9-Px"+trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
  )
} 

export default VideoBackground;
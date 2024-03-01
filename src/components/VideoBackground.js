import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";


const VideoBackground = ({movieId}) => {
  const trailerVideo =useSelector(store=>store.movies?.trailerVideo);
  const dispatch = useDispatch();
  

  // fetch trailer video  
   
  const getMovieVideo = async () =>{
     
    const data = await fetch('https://api.themoviedb.org/3/movie/1096197/videos?language=en-US', API_OPTIONS);
     
    const json= await data.json();
    
    console.log(json);

    const filterData = json.results.filter(video=>video.type==="Trailer");
    const trailer = filterData.length?filterData[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(()=>{
    getMovieVideo();
  },[]);

  

  return (
    <div><iframe width="560" height="315" src={"https://www.youtube.com/embed/e1k1PC0TtmE?si=SlyQLIGnC4a-9-Px"+trailerVideo?.key} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
  )
} 

export default VideoBackground;
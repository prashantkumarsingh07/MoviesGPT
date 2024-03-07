

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[15%]  px-6   md:px-24 absolute text-white bg-gradient-to-r from-black">
     <h1 className=" text-2xl  md:text-6xl font-bold">{title}</h1>
     <p className=" hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
     <div className=" my-4 md:m-0">
      <button className=" bg-white py-1 md:py-4  px-3 md:px-12 text-xl text-black  rounded-lg hover:bg-opacity-8 0"> ▶  Play</button>
      <button className="bg-slate-500  p-4  px-12 text-xl text-white bg-opacity-50 rounded-lg  mx-2 hidden md:inline-block">ℹ️ More info</button>
     </div>

    </div>
  )
}

export default VideoTitle;
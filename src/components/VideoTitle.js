

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black">
     <h1 className="text-6xl font-bold">{title}</h1>
     <p className="py-6 text-lg w-1/4">{overview}</p>
     <div className="">
      <button className=" bg-white  p-4  px-12 text-xl text-black  rounded-lg hover:bg-opacity-8 0"> ▶  Play</button>
      <button className="bg-slate-500  p-4  px-12 text-xl text-white bg-opacity-50 rounded-lg  mx-2">ℹ️ More info</button>
     </div>

    </div>
  )
}

export default VideoTitle;
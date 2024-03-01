

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-36 px-12">
     <h1 className="text-6xl font-bold">{title}</h1>
     <p className="py-6 text-lg w-1/4">{overview}</p>
     <div className="">
      <button className=" bg-slate-500  p-4  px-12 text-xl text-white bg-opacity-50 rounded-lg"> ▶  Play</button>
      <button className="bg-slate-500  p-4  px-12 text-xl text-white bg-opacity-50 rounded-lg  mx-2">More info</button>
     </div>

    </div>
  )
}

export default VideoTitle;
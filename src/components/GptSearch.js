import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACK_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
 <>
    <div className=" fixed -z-10">
         <img className=' h-screen object-cover md: w-screen '
           src={BACK_IMG}
           alt="logo"
         />
       </div>

    <div >
   <GptSearchBar />
    <GptMovieSuggestion />
    </div>
</>
  )
}

export default GptSearch;
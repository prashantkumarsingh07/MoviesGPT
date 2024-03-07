import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACK_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
     <div className=" fixed -z-10">
         <img
           src={BACK_IMG}
           alt="logo"
         />
       </div>
    <GptSearchBar />
    <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch;
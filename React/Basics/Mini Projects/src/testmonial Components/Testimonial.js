import React, { useState } from 'react'
import Card from './Card' ;
import {FiChevronLeft , FiChevronRight} from 'react-icons/fi';

const Testimonial = (props) => {
    let data = props.data;
    const[index , setIndex] =useState(0) ;

    function leftShiftHandler(){
        if(index - 1 < 0){
            setIndex(data.length - 1) ;
        }
        else{
            setIndex(index - 1);
        }
    }


    function rightShiftHandler(){
        if(index + 1 >= data.length){
            setIndex(0) ;
        }
        else{
            setIndex(index + 1);
        }
    }

    function surprisetHandler(){
        let randomIndex =  Math.floor(Math.random() * data.length) ;
        if(index === randomIndex){
            surprisetHandler() ;
        }
        else{
            setIndex(randomIndex) ;
        }
    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

      <Card review = {data[index]}
      />




      <div className='flex text-3xl text-violet-400 font-bold justify-center'>
        <button className=' cursor-pointer  hover:text-violet-500 ' onClick={leftShiftHandler} >
            <FiChevronLeft/>
        </button>
        <button className=' cursor-pointer  hover:text-violet-500' onClick={rightShiftHandler}>
            <FiChevronRight/>
        </button>
      </div>

      <div>
        <button className='bg-violet-400 hover:bg-violet-500 transition-color duration-200 text-white cursor-pointer rounded-md font-bold text-lg px-10 py-2 mt-3' 
        onClick={surprisetHandler}>
            Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonial

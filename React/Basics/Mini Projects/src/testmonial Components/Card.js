import React from 'react'
import { FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

 


const Card = (props) => {
    let review = props.review ;
  return (
    <div className='flex flex-col md:relative'>
      <div className='absolute top-[-7rem] z-[10]  mx-auto'>
        <img src={review.image} alt="Person'sImage"
            className='aspect-square rounded-full w-[140px] h-[140px] z-25'
        />
        <div className='w-[140px] h-[140px] bg-violet-400 rounded-full absolute top-[-6px] left-[10px] z-[-10]'></div>
      </div>

      <div className='text-center mt-7'>
        <p className='font-bold test-2x capitalize tracking-wider'>{review.name} </p>
        <p className='text-violet-300 uppercase text-sm'>{review.job} </p>
      </div>

      <div className=' self-center mt-5 text-violet-400 '>
        <FaQuoteLeft/>
      </div>

        <div className='text-center mt-4 text-slate-500'>
         {review.text} 
        </div>

      <div className=' self-center mt-5 mb-3 text-violet-400'>
        <FaQuoteRight/>
      </div>

    </div>
  )
}

export default Card

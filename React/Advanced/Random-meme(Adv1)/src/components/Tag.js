import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { useState } from 'react';
useState


const Random = () => {
    const [tag , setTag] =useState('') ;

     function clickHandler(){
            fetchData()
    }

    const memeType = 'tag' ;

    const {gif , loading , fetchData } = useGif(tag)

    function changeHandler(e){
        e.preventDefault()
        setTag(e.target.value) ;
    }
    // console.log(imageSource)

  return (
    <div className='border-1 bg-blue-500 w-[600px] mx-auto my-6 flex flex-col rounded-xl items-center'>
      <h1 className='text-xl font-bold text-center  m-4'>RANDOM {tag} GIF</h1>
    {
        loading ? (<Spinner memeType={memeType}/>) : (<img src={gif} width='300' className='mx-auto '/>)
    }


    <input 
        className='w-10/12 text-lg py-1 outline-none rounded-lg mb-[3px] mt-[25px] text-center'
        onChange={changeHandler}
        value={tag}
    />

      <button onClick={clickHandler} className='text-md bg-blue-700 rounded-md   my-6 py-2 w-[500px] mx-4 font-bold'>Generate</button>
    </div>
  )
}

export default Random


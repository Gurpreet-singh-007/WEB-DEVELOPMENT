import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {

    const {gif , loading , fetchData} = useGif() ;
    const memeType = 'random' ;
        
        function clickHandler(){
          fetchData()
    }


  return (
    <div className='border-1 bg-emerald-500 w-[600px] mx-auto my-6 flex flex-col rounded-lg items-center'>
      <h1 className='text-xl font-bold text-center  m-4'>A RANDOM GIF</h1>
    {
        loading ? (<Spinner memeType={memeType} />) : (<img src={gif} width='300' className='mx-auto '/>)
    }

      <button onClick={clickHandler} className='text-md bg-emerald-700 rounded-md   my-6 py-2 w-[500px] mx-4 font-bold'>Generate</button>
    </div>
  )
}

export default Random

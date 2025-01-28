import React from 'react'
import Testimonial from './testmonial Components/Testimonial'
import data from './data-2' ;


const App = () => { 
  return (
    <div className='flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200'>
      <div className=' text-center'>
        <h1 className='text-4xl font-bold'> Our Testimonials</h1>
        <div className='bg-violet-400 h-[4px] w-[20%]  mt-1 mx-auto'> </div>
        <Testimonial data={data}/>
      </div>
    </div>
  )
}

export default App




































// import React, { useState } from "react";
// import Tour from "./Tourism-Plan component/tour";
// import data from "./data-1";
// import './index.css'


// function App(){

//   const [tours , setTours] = useState(data) ;

//   function removetourHandler(id){
//     const newTours = tours.filter(tour => tour.id !== id)
//     setTours(newTours) ;
//   }

//   if(tours.length === 0){
//     return (
//       <div className="refresh">
//         <h2> No Tours Left</h2>
//         <button className="refresh-button" onClick={() => setTours(data)}>
//           Refresh
//         </button>
//       </div>
//     )
//   }
//   return(
//     <div>
//       <Tour tours={tours} removetourHandler={removetourHandler}></Tour>
//     </div>
//   )
// }

// export default App;
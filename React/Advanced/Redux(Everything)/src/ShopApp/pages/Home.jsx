import React, { useEffect, useState } from 'react'
import Products from '../components/Products';
import { products } from '../../data';
const Home = () => {

  const [loading , setLoading] =useState(false) ;
  const [posts , setPosts] = useState([]) ;

  useEffect(() => {
    setPosts(products) ;
  })
  return (
    <div>
      {
        loading ? <Spinner/> : 
        posts.length > 0 ? 
        (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5 min-h-[80vh]'>
          {
             posts.map((post) => (
            <Products key={post.id} post ={post}/>
            ))
          }
        </div>) : (<div className='flex justify-center items-center'>NO POST FOUND</div>)

      }
    </div>
  )
}

export default Home

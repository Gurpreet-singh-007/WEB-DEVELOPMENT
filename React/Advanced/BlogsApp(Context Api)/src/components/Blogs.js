import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {

    const {posts , loading} =useContext(AppContext) ;
  return (
        <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[50px] mb-[50px]'> 
        {
            loading ? (<Spinner/>) 
            :
            ( posts.length === 0 ? 
            (<div> No Posts Found</div>)    :
            (posts.map( ( posts ) => (
               <BlogDetails key={posts.id} post={posts} />
        ) ) )
        )
      }
    </div>
  )
}

export default Blogs

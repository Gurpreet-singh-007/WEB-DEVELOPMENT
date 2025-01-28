import React from 'react'
import { NavLink } from 'react-router'

const BlogDetails = ({post}) => {
    return (
        <div>
        <NavLink to={`/blog/${post.id}`} >
            
            <p className='text-lg font-bold py-3 flex flex-col gap-y-7'> {post.title} </p>
       
        </NavLink>

        <p className='text-sm mt-[4px]'> By 
            <span className='italic'> {post.author} </span> 
            on 
            <NavLink to={`category/${post.category.replaceAll(" " , "-")}`} >
                <span> {post.category} </span>
            </NavLink> 
        </p>

        <p className='text-sm'>Posted On {post.date}</p>

        <p className='text-sm mt-[14px] '> {post.content} </p>

        <div className='flex gap-x-3 '>
            {post.tags.map( (tag , i ) => (
             <NavLink key={i}  to={`/tags/${tag.replaceAll(" " , "-" )}`} >

                <span > {`#${tag}`}</span>
             </NavLink>
            ) )}
        </div>
     
    </div>
  )
}

export default BlogDetails

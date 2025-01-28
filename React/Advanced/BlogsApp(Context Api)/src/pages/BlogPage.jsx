import React, { useContext, useState , useEffect } from 'react'
import { useLocation } from 'react-router';
import { AppContext } from '../context/Appcontext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

const BlogPage = () => {
    const [blog , setBlog] = useState(null) ;
    const [relatedBlogs , setRelatedBlogs] = useState([]);
    const location = useLocation() ;
    // const navigation = useNavigation() ;
    const {setLoading , loading} = useContext(AppContext) ;
    const blogId = location.pathname.split("/").at(-1) ;

    async function fetchRelatedBlogs (){
        setLoading(true) ;
        let url = `${baseUrl}?blogId=${blogId}`

        try{
            const res = await fetch(url) ;
            const data = await res.json() ;
            setBlog(data.blog)
            setRelatedBlogs(data.relatedBlogs)
        }

        catch(e){
            console.log(e) ;
            setBlog(null) ;
            setRelatedBlogs([])
        }
        setLoading(false) ;
    }

    useEffect(() => {
        if(blog){
            fetchRelatedBlogs() ;
        }
    } , [location.pathname])
  return (
    <div className='mt-[160px]'>
      <Header/>
      <div>
        <button 
        onClick={() => navigaiton(-1)}
        >
            Back
        </button>
      </div>
      {
        loading ? (<Spinner/>) : 
        blog ? 
        ( <div>
            <blogDetails post= {blog} />
            <h2> Related Blogs</h2>
            {
                relatedBlogs.map((post) =>(
                    <div key={post.id}>
                        <blogDetails post={post} />
                    </div>
                ) )
            }
        </div>)
         : ( <p> No Blog found </p>)
      }
    </div>
  )
}

export default BlogPage

import React, { useContext, useEffect } from 'react'
import Home from './pages/Home';
import BlogPage from './pages/BlogPage';
import CategoryPage from './pages/CategoryPage';
import TagPage from './pages/TagPage';
import { AppContext } from './context/Appcontext'
import {Routes , Route, useSearchParams, useLocation } from 'react-router' ;

const App = () => {

  const {fetchBlogPosts} = useContext(AppContext)
  const [searchParams , setSearchParams] = useSearchParams() ;
  const location = useLocation() ;


  useEffect( () => {

    const page = searchParams.get("page") ?? 1 ;

    if(location.pathname.includes("tags")){
      console.log("inside if tag")
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ") ;
      fetchBlogPosts(Number(page) , tag) ;
    }

    else if(location.pathname.includes("catogories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ") ;
      fetchBlogPosts(Number(page) ,null , category) ;
    }

    else{
      fetchBlogPosts(page) ;
    }


  } , [location.pathname , location.search] )


  return (

    <Routes>
      <Route path='/' element={<Home/> }/>
      <Route path='/blog/:blogId' element={<BlogPage/> }/>
      <Route path='/tags/:tag' element={<TagPage/> }/>
      <Route path='/category/:category' element={<CategoryPage/> }/>
    </Routes>

)
}

export default App
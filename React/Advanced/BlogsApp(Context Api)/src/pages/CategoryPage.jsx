import React from 'react'
import Header from '../components/Header'
import { useNavigate , useLocation} from 'react-router'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {

    const navigation = useNavigate() ;
    const location = useLocation();
    const category = location.pathname.split("/").at(-1) ;

  return (
    <div className='mt-[90px]'>
      <Header/>
      <div>

        <button
        onClick={() => navigation(-1)}
        >
            Back
        </button>

        <h2>Blogs on <span> {category} </span> </h2>

        <Blogs/>
        <Pagination/>
      </div>

    </div>
  )
}

export default CategoryPage

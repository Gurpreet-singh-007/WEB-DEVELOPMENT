import React from 'react'
import { useDispatch, useSelector } from 'react-redux' ;
import {add , remove} from "../redux/Slices/CartSlice" ;
import { toast } from 'react-toastify';


const Products = ({post}) => {
    const cart =  useSelector((state) => state.cart) ;

    const dispatch = useDispatch() ;

    const addToCart = () => {
        dispatch(add(post))
        toast.success("Item Added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(post))
        toast.success("Item Removed to Cart");
    }
  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border border-slate-300 hover:shadow-2xl'>
      <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1 '>{post.title}</p>
      </div>
      <div>
        <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{post.description.split(' ').slice(0,10).join(' ') + "..."}</p>
      </div>
      <div className='h-[180px]'>
        <img src={post.image}
          className='h-full'
        />
      </div>

      <div className='flex justify-between gap-12 items-center w-full mt-5'>

        <div>
          <p className='text-green-600 font-semibold'>${post.price}</p>
        </div>

          <div>
              {
                  cart.some((p) => p.id == post.id) ? 
                  (<button 
                  className='text-gray-700 border-2  border-gray-700 rounded-full font-semibold text-[12px] uppercase hover:bg-gray-700 hover:text-white transition duration-300 px-3 py-1'
                  onClick={removeFromCart}>
                      Remove Item
                  </button>) :
                  (<button 
                  className='text-gray-700 border-2  border-gray-700 rounded-full font-semibold text-[12px] uppercase hover:bg-gray-700 hover:text-white transition duration-300 px-3 py-1'
                  onClick={addToCart}>
                      Add To Cart
                  </button>)
              }
          </div>
      </div>
        
    </div>
  )
}

export default Products

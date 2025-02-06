import React from 'react' ;
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {remove} from "../redux/Slices/CartSlice"
import { toast } from 'react-toastify';


const CartItem = ({item , itemIndex}) => {

    const dispatch = useDispatch() ;



    const removeFromCart = () => {
        dispatch(remove(item)) ;
        toast.success("Item Removed")
    }
  return (
    <div className=''>
      <div className=' w-[500px] py-8 flex flex-row border-b-2 border-b-black justify-around'>

        <div className='w-[40%]'>
            <img src={item.image} className='w-[80%]' />
        </div>
        <div className='w-[50%] flex flex-col justify-evenly'>
            <h1 className='text-gray-700 font-semibold text-lg text-left mt-1' >{item.title}</h1>

            <h1 className=' text-gray-400 font-normal text-[14px] text-left my-5'>{item.description.split(' ').slice(0,10).join(' ') + "..."}</h1>

            <div className='flex flex-row justify-between'>
              <span className='text-green-700 font-semibold'>
                ${item.price}
              </span>
              <div 
              className='bg-red-200 rounded-full h-8 w-8 flex justify-center items-center'
              onClick={removeFromCart}
              >
                  <MdDelete className='text-[20px] text-red-700'/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem

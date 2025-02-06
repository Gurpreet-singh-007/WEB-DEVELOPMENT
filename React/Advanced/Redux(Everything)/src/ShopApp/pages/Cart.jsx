import React, { useEffect , useState} from 'react'
import { useSelector } from 'react-redux' ;
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
  const {cart} = useSelector((state) => state) ;
  console.log(cart)
  const [totalAmount , setTotalAmount] = useState(0) ; 

  useEffect(() => {
    setTotalAmount(cart.reduce((acc , curr) => {
      return acc + curr.price } ,0) )
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ? 
        (<div className='flex flex-row justify-center gap-x-10'>

          <div >
            {
              cart.map((item , i) => (
             <CartItem key={item.id} item={item} itemIndex={i} />
            ))
            }
          </div>

          <div className='flex flex-col justify-between mt-10'>
            <div className=''>
              <div className='text-green-700 uppercase text-[20px] font-bold'>Your Cart</div>
              <div className='text-green-700 uppercase text-[40px] font-bold'>Summary</div>
              <p>
                <span className='font-bold'>Total Items : </span>
                {cart.length}
              </p>
            </div>

            <div className='flex items-center flex-col'>
            
              <p> Total Amount : 
              <span className='font-bold'>${totalAmount}</span>
              </p>
              <button className='bg-green-700 text-white py-2 px-20 rounded-md'>
                CheckOut Now
              </button>
            </div>
          </div>

        </div>) :
        (<div className='h-[85vh] flex items-center justify-center flex-col'>
          <h1> Your Cart is Empty</h1>
          <Link to='/'>
            <button className='bg-green-700 text-white font-semibold rounded-md px-4 py-1'>Shop Now</button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart

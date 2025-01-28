import React, { useState } from 'react'
import toast from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible } from 'react-icons/ai' ;
import { Link, useNavigate } from 'react-router';

const LoginForm = ({setIsLoggedIn}) => {

    const [formData , setFormData] = useState( {
        email:'' ,
        password :''
    } ) ;

    const [showPassword , setShowPassword] =useState(false)
    ;

    function changeHandler(e){

        setFormData( (prevData) => (
            {
                ...prevData , 
                [e.target.name] : e.target.value 
            }   
        )  )
    }

    const navigate = useNavigate() ;
    function submitHandler(e){
        e.preventDefault() ;
        setIsLoggedIn(true) ;
        toast.success("Logged In")
        navigate("/dashboard") ;
        console.log(formData) ;
    }
  return (
    <form onSubmit={submitHandler} className='flex flex-col w-full gap-y-4 mt-6'>
        <label className='w-full'>
            <p className=' text-[0.875rem] text-stone-300 mb-1 leading-[1.375rem]'>
                Email Address <sup className='text-pink-400'>*</sup>
            </p>
            <input
                required
                type= 'text'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter email address'
                name='email'
                className='bg-[#2C333F] rounded-[0.5rem] w-full p-[12px] border-b-stone-500 border-b-[1px] text-white'
            />
        </label>
         
        <label className='w-full relative'>
            <p className=' text-[0.875rem] text-stone-300 mb-1 leading-[1.375rem]'>
                Password <sup className='text-pink-400'>*</sup>
            </p>
            <input
                required
                type={showPassword ? ('text') : ('password')}
                value={FormData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                 className='bg-[#2C333F] rounded-[0.5rem] w-full p-[12px] border-b-stone-500 border-b-[1px] text-white'
            />

            <span  className='absolute right-4 top-[38px] text-stone-300 text-2xl'
              onClick={ () => 
            setShowPassword( (prev) => !prev)} >
                {showPassword ? (<AiOutlineEyeInvisible />)  :(<AiOutlineEye />
                ) 
                }
            </span>

            <Link to='#'>
                <p className='text-xs mt-1 text-[#47A5C5] font-[500] max-w-max ml-auto'>Forgot Password</p>
            </Link>


            <button className='bg-[#e6d600] rounded-[8px] font-medium px-[12px] py-[8px] w-full my-3'>
                Sign In 
            </button>
        </label>
    </form>
  )
}

export default LoginForm

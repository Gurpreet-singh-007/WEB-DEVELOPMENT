import React from 'react'
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm' ;
import frameImage from "../assets/frame.png" ;
import { FcGoogle } from 'react-icons/fc';

const Template = ({title , desc1 , desc2 , image , formtype , setIsLoggedIn}) => {
  return (
    <div className='flex justify-between max-w-[1260px] w-11/12 py-12 mx-auto items-center min-h-[90vh]'>
      
      <div className='w-11/12 max-w-[450px] ' >

      <h1 className='text-stone-200 font-semibold text-[1.875rem] leading-[2.375rem] '>{title}</h1>
      <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
        <span className='text-stone-400'>{desc1}</span>
        <br />
        <span className='text-[#47A5C5] italic'>{desc2}</span>
      </p>

      {
      formtype === "signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>) : (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
      }


      <div className='flex w-full items-center my-4 gap-x-2 '>
        <div className='h-[1px] bg-stone-700 w-full'></div>
        <p className='text-stone-700 font-medium leading-[1.375rem]'>OR</p>
        <div className='h-[1px] bg-stone-700 w-full'></div>
      </div>

      <button className='flex w-full justify-center items-center rounded-[8px] font-medium text-stone-100 border border-stone-700 px-[12px] py-[8px] gap-x-2 mt-6'>
        <FcGoogle/>
        Sign up with Google
      </button>
      </div>

      <div className='relative w-11/12 max-w-[450px]'>
        <img src={frameImage}
        alt='Pattern'
        width={558}
        height={504}
        loading='lazy' />


        <img src={image}
        alt='Students'
        width={558}
        height={504}
        loading='lazy'
        className='absolute -top-4 right-4' />

      </div>

    </div>
  )
}

export default Template

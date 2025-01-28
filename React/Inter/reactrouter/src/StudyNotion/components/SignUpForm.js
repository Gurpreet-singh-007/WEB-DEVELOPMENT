import React, { useState } from 'react';
import toast from 'react-hot-toast';
import {AiOutlineEye , AiOutlineEyeInvisible } from 'react-icons/ai' ;
import { useNavigate } from 'react-router';


const SignUpForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate() ;

    const [formData , setFormData] =useState( {
        firstName: '',
        lastName: '' ,
        email : '' ,
        password : '' ,
        confirmPassword : '' ,
    })

    const [showPassword , setShowPassword] = useState(false) ;
    const [showConfirmPassword , setShowConfirmPassword] = useState(false) ;
    const [accountType , setAccountType] =useState('student')

    function changeHandler(e){
        setFormData ( (prevData) => (
            {
            ...prevData ,
            [e.target.name]:e.target.value
            }
          )
        )
    }

    function submitHandler(e){
        e.preventDefault() ;
        if(formData.password !== formData.confirmPassword){
            toast.error("Password do not match") ;
            navigate("/signup")

            
        } 
        
        else{
            setIsLoggedIn(true) ;
            toast.success("Account Created") ;
            navigate("/dashboard")
            const finalData = {
                ...formData ,
                accountType
            }
            console.log(finalData)
        }
    }
  return (
    <div>
      
      <div className='flex bg-[#2C333F] text-[rgb(44,51,63)] p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button
        className={` ${accountType === 'student' ? 
        " bg-stone-900 text-stone-500 "
        :
        " bg-transparent text-stone-200 "} py-2 px-5 rounded-full transition-all duration-200 "
         `}
        onClick={() => setAccountType('student')}
        >Student</button>
        <button
        className={` ${accountType === 'instructor' ? 
        " bg-stone-900 text-stone-500 "
        :
        " bg-transparent text-stone-200 "} py-2 px-5 rounded-full transition-all duration-200 "
         `}
         onClick={() => setAccountType('instructor')}
        >Instructor</button>
      </div>

        <form onSubmit={submitHandler}>

            <div className='flex gap-x-4 my-3'>
                <label className='w-full'>
                    <p className=' text-[0.875rem] text-stone-300 mb-1 leading-[1.375rem]'>First Name <sup>*</sup></p>
                    <input 
                    required
                        type='text'
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        className='bg-[#2C333F] rounded-[0.5rem] w-full p-[12px] border-b-stone-500 border-b-[1px] text-white'
                    />
                </label>

                <label className='w-full'>
                    <p className=' text-[0.875rem] text-stone-300 mb-1 leading-[1.375rem]'>Last Name <sup>*</sup></p>
                    <input 
                    required
                        type='text'
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        className='bg-[#2C333F] rounded-[0.5rem] w-full p-[12px] border-b-stone-500 border-b-[1px] text-white'
                    />
                </label>
            </div>


            <label className='w-full my-3'>
                <p className=' text-[0.875rem] text-stone-300 mb-1 leading-[1.375rem]'>Email Adderess <sup>*</sup></p>
                <input 
                required
                    type='email'
                    name='email'
                    onChange={changeHandler}
                    placeholder='Enter Email Address'
                    value={formData.email}
                    className='bg-[#2C333F] rounded-[0.5rem] w-full p-[12px] border-b-stone-500 border-b-[1px] text-white'
                />
            </label>

            <div className='flex gap-x-4 my-3'>
                <label className='w-full relative'>
                    <p className=' text-[0.875rem] text-stone-300 mb-1 leading-[1.375rem]'>Create Password <sup>*</sup></p>
                    <input 
                    required
                        type={showPassword ? ('text') : ('password') }
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter Password'
                        value={formData.password}
                        className='bg-[#2C333F] rounded-[0.5rem] w-full p-[12px] border-b-stone-500 border-b-[1px] text-white'
                    />

                    <span 
                    className='absolute right-4 top-[38px] text-stone-300 text-2xl'
                    onClick={ () => 
                        setShowPassword( (prev) => !prev)} >
                            {showPassword ? (<AiOutlineEyeInvisible />)  :(<AiOutlineEye />
                            ) 
                            }
                    </span>
                </label>
                <label className='w-full relative'>
                    <p className=' text-[0.875rem] text-stone-300 mb-1 leading-[1.375rem]'>Confirm Password <sup>*</sup></p>
                    <input 
                    required
                        type={showConfirmPassword ? ('text') : ('password') }
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Confirm Password'
                        value={formData.confirmPassword}
                        className='bg-[#2C333F] rounded-[0.5rem] w-full p-[12px] border-b-stone-500 border-b-[1px] text-white'
                    />

                    <span 
                  className='absolute right-4 top-[38px] text-stone-300 text-2xl'
                    onClick={ () => 
                        setShowConfirmPassword( (prev) => !prev)} >
                            {showConfirmPassword ? (<AiOutlineEyeInvisible />)  :(<AiOutlineEye />
                            ) 
                            }
                    </span>
                </label>
            </div>

            <button className='bg-[#e6d600] rounded-[8px] font-medium px-[12px] py-[8px] w-full mt-8'>
                Create Account 
            </button>     

        </form>


    </div>
  )
}

export default SignUpForm

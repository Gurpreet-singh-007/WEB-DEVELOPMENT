import React from 'react'
import { Link } from 'react-router'
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast';
import './whole.css'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn ;
    let setIsLoggedIn = props.setIsLoggedIn ;

  return (
    <div className='flex text-white items-center  justify-between w-11/12 max-w-[1260px]  py-4 mx-auto'>

      <Link to="/">
        <img src={logo} alt='logo' width={160} height={32} loading='lazy' />
      </Link>


      <nav>
        <ul className='flex gap-x-6 text-stone-300'>
            <li>
                <Link to='/'> Home</Link>
            </li>
            <li>
                <Link to='/'> About</Link>
            </li>
            <li>
                <Link to='/'> Contact </Link>
            </li>
        </ul>
      </nav>

        <div className='flex items-center gap-x-4 '>
        { !isLoggedIn &&
            <Link to='/login'>
                <button className='button'>Log in</button>
            </Link>
        }
        { !isLoggedIn &&
            <Link to='/signup'>
                <button className='button'>Sign Up</button>
            </Link>
        }
        { isLoggedIn &&
            <Link to='/'>
                <button className='button' onClick={() => {
                    setIsLoggedIn(false)
                    toast.success("Logged out")
                }}>Log Out</button>
            </Link>
        }
        { isLoggedIn &&
            <Link to='/dashboard'>
                <button className='button'> Dashboard</button>
            </Link>
        }
        </div>
    </div>
  )
}

export default Navbar

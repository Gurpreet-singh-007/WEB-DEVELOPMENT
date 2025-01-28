import React from 'react'
import './spinner.css'

const Spinner = ({memeType}) => {

  return (
  (
    memeType == 'tag' ? (<div className='custom-loader text-blue-700'></div>) : ((<div className='custom-loader text-emerald-700'></div>))
  )
  )
}

export default Spinner

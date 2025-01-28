import React from 'react'
import { useNavigate } from 'react-router'

export default function Labs(){

  const navigate = useNavigate() ;
  function homePageHandler(){
    navigate('/')
  }
  return (
    <div>
        <div>
          This is Labs Page
        </div>
        <button onClick={homePageHandler}>Move to Home Page</button>
    </div>
  )
}

// export default Labs

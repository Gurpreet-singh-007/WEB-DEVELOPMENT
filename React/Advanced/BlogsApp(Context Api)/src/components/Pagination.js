import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'

const Pagination = () => {

    const {page ,totalPages, handleChangePage } = useContext(AppContext)
  return (
    <div className='w-full border-2 flex justify-center items-center fixed bottom-0 bg-white '>

        <div className='flex justify-between w-[670px] py-2'>

            <div className='flex gap-x-2'>
                { page > 1 &&
                    <button
                    className='rounded-sm border-2 px-4 py-1'
                    onClick={() => handleChangePage (page - 1)}>
                        Previous
                    </button>
                }
                { page < totalPages  &&
                    <button 
                    className='rounded-sm border-2 px-4 py-1'
                    onClick={() => handleChangePage (page + 1)}>
                        Next
                    </button>
                }
            </div>

            <p className='font-bold'>
                Page {page} of {totalPages}
            </p>

        </div>

    </div>
  )
}

export default Pagination

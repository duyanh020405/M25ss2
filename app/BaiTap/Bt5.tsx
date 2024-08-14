import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
export default function Bt5() {
  return (
    <div>
    <div>
      <div style={{width:400,height:200}} className='border border-black'>
        <FontAwesomeIcon className='w-10 text-red-600 relative left-14 top-5' icon={faExclamationTriangle}></FontAwesomeIcon>
        <div className='relative left-14 top-5'>
            <h1 className='text-xl'>Delete blog post</h1>
            <p className='text-l '>Are you sure you want to delete this post . <br />This action can not undone</p>
        </div>
        <div className='relative left-14 top-8 flex gap-5'>
            <button style={{width:100,height:30 , borderRadius:2 ,backgroundColor:'grey' }}>Cancle</button>
            <button style={{width:100,height:30 , borderRadius:2 ,backgroundColor:'red' , color:'white'}}>Delete</button>
        </div>
      </div>
    
    </div>
    {/**Bai 6 */}
   
    </div>
  )
}

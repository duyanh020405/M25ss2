import React from 'react'

export default function Bt4() {
  return (
    <div className=' border-4 border-r-gray-500 border-3 absolute left-10' style={{width:500, height:600}}>
      <h1 className='text-4xl relative top-5 left-10'>Form Sign Up</h1>
      <br />
      <br />
      <div className='relative left-10'>
        <p>Name</p>
        <input type="text" placeholder='Your Name' className='border-2 border-grey-600 ' style={{width:300, height:40}} />
      </div>
      <br />
      <div className='relative left-10'>
      <p>Email</p>
      </div>
      <div className='relative left-10 flex'>
      <input type="text" className='border-2 border-grey-600 ' style={{width:300, height:40}} />
      <p className='relative right-72 top-2 text-gray-500'>US</p>
      <p className='relative right-72 top-2 text-gray-500'>+84(123) 456-789</p>
      </div>
      <br />
      <div className='relative left-10 '>
        <p>Address</p>
        <input type="text" className='border-2 border-grey-600 ' style={{width:300, height:100}} />
        <p className='relative bottom-24 text-gray-500'>Tell me a little about the project...</p>
      </div>
      <div>
        <p className='relative left-10 '>Skills</p>
        <div className='flex row gap-16 relative left-10 top-5'>
            <div className='gap-10'>
                <div className='flex row gap-5'>
                <input type="checkbox" name="" id="" />
                <p>HTML</p>
                </div>
                <div className='flex row gap-5'>
                <input type="checkbox" name="" id="" />
                <p>Ex Design</p>
                </div>
                <div className='flex row gap-5'>
                <input type="checkbox" name="" id="" />
                <p>CSS</p>
                </div>
            </div>
            <div>
            <div className=' gap-10'>
                <div className='flex row gap-5'>
                <input type="checkbox" name="" id="" />
                <p>JavaScripts</p>
                </div>
                <div className='flex row gap-5'>
                <input type="checkbox" name="" id="" />
                <p>ReactJS</p>
                </div>
                <div className='flex row gap-5'>
                <input type="checkbox" name="" id="" />
                <p>Java</p>
                </div>
            </div> 
            </div>
        </div>
      </div>
      <button className='text-white , bg-violet-600 relative top-10 left-10' style={{width:200 , height:40}}>Sign Up</button>
    </div>
  )
}

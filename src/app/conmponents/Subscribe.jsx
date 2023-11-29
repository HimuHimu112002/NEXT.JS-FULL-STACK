import React from 'react'
const Subscribe = () => {
  return (
    <div className='container flex justify-center mt-20'>
        <div className='w-2/4 m-auto'>
            <p className='text-center text-green-500 font-bold'>SUBSCRIBE</p>
            <h3 className='text-xl md:text-4xl text-center w-full md:w-96 m-auto py-4 '>Subscribe to get the latest news about us</h3>
            <div className="join pb-8 w-full">
                <input className="input input-bordered join-item w-full" placeholder="Email"/>
                <button className="btn join-item rounded-r-full">Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe
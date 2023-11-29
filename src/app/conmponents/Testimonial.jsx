import React from 'react'
import { TestimonialData } from '../api/AllGetApi/api'
import Image from 'next/image'

const Testimonial = async () => {
    let data = await TestimonialData()
  return (
    <div className='container mx-auto mt-10'>
        <h5 className='text-green-600 font-bold py-4 ml-6'>Testimonial List</h5>
        <h2 className='text-3xl w-96 font-bold mb-4 ml-6'>Better Agency/SEO Solution At Your Fingertips</h2>

        <div className='flex justify-between flex-wrap'>
            {data.map((item,i)=>(
                <>

                    <div key={i} className="m-auto mb-6 card w-96 bg-base-100 shadow-md">
                        <figure><Image className='w-full rounded pt-6' width="50" height="50" src={item.image} alt="Shoes"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {item.name}
                            </h2>
                            <p>{item.designation}</p>
                            <p>{item.msg}</p>
                            <div className="card-actions justify-start pt-3">
                                <div className="badge badge-outline">Facebook</div> 
                                <div className="badge badge-outline">Twitter</div>
                                <div className="badge badge-outline">Tnstagram</div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default Testimonial
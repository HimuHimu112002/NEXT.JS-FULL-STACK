import React from 'react'
import { ProjectData } from '../api/AllGetApi/api'
import Image from 'next/image'

const Allproject = async () => {
    let data = await ProjectData()
  return (
    <div className='container mx-auto mt-10'>
        <h5 className='text-green-600 font-bold py-4 ml-6'>All Project</h5>
        <h2 className='text-3xl w-96 font-bold mb-4 ml-6'>Better Agency/SEO Solution At Your Fingertips</h2>

        <div className='flex justify-between flex-wrap'>
            {data.map((item,i)=>(
                <>

                    <div key={i} className="m-auto mb-6 card w-96 bg-base-100 shadow">
                        <figure><Image className='w-80' width="50" height="50" src={item.image} alt="Shoes"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {item.name}
                            </h2>
                            <h2 className='text-xl'>{item.title}</h2>
                        </div>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default Allproject
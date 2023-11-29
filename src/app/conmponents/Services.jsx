import React from 'react'
import { ServiceData } from '../api/AllGetApi/api'
import Image from 'next/image'

const Services = async () => {
    let data = await ServiceData()
  return (
    <div className='container mx-auto mt-10'>

        <h5 className='text-green-600 font-bold py-4 ml-6'>Our All Services</h5>
        <h2 className='text-3xl w-96 font-bold mb-4 ml-6'>We Provide BestWeb design services</h2>

        <div className='flex justify-between flex-wrap'>
            {data.map((item,i)=>(
                <>

                    <div key={i} className="m-auto mb-6 card w-96 bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title">
                            {item.title}
                            </h2>
                            <p className='text-sm'>{item.des}</p>
                        </div>

                        <figure className='flex justify-between flex-wrap'>
                            <div className='w-full flex justify-between'>
                                <Image className='w-[60%]' width="100" height="100" src={item.image1} alt="Shoes"/>
                                <Image className='w-[39%]' width="100" height="100" src={item.image2} alt="Shoes"/>
                            </div>
                            <div className='py-2 w-full flex justify-between'>
                                <Image className='w-[50%]' width="100" height="100" src={item.image3} alt="Shoes"/>
                                <Image className='w-[49%]' width="100" height="100" src={item.image4} alt="Shoes"/>
                            </div>
                        </figure>
                    </div>
                </>
            ))}
        </div>

    </div>
  )
}

export default Services
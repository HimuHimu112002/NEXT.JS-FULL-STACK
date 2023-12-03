import React from 'react'
import { FeaturedData } from '../api/AllGetApi/api'
import Image from 'next/image'

const FeaturedProject = async () => {
    let data = await FeaturedData()
    console.log(data[0].image)
  return (
    <div className=' bg-[#EAEEF3]'>
        <div className='container mx-auto py-10'>
            <p className='text-green-600 font-bold ml-4'>FEATURED PROJECT</p>
            <h2 className='text-3xl font-bold w-96 ml-4 mb-10'>We provide the Perfect Solution to your business growth</h2>

            <div className='flex justify-between flex-wrap md:flex-nowrap'>

                <div className='w-full lg:w-[50%] p-4 rounded shadow'>
                    <Image className='w-full h-auto' width="100" height="100" src={data[0].image} alt='featured'/>
                    <h4 className='text-green-500 font-bold mt-1'>{data[0].remark}</h4>
                    <h1 className='text-2xl font-semibold'>{data[0].title}</h1>
                </div>

                <div className='w-[49%'>
                    <div className='flex justify-between flex-wrap md:flex-nowrap'>
                        <div className='w-full mx-1'>
                            <div className='p-4 rounded shadow'>
                            <Image className='w-full' width="100" height="100" src={data[0].image} alt='featured'/>
                            <h4 className='text-green-500 font-bold mt-1'>{data[0].remark}</h4>
                            <h1 className='text-2xl font-semibold'>{data[0].title}</h1>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='p-4 rounded shadow'>
                            <Image className='w-full' width="100" height="100" src={data[0].image} alt='featured'/>
                            <h4 className='text-green-500 font-bold mt-1'>{data[0].remark}</h4>
                            <h1 className='text-2xl font-semibold'>{data[0].title}</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between flex-wrap md:flex-nowrap mt-2'>
                        <div className='w-full mx-1'>
                            <div className='p-4 rounded shadow'>
                            <Image className='w-full' width="100" height="100" src={data[0].image} alt='featured'/>
                            <h4 className='text-green-500 font-bold mt-1'>{data[0].remark}</h4>
                            <h1 className='text-2xl font-semibold'>{data[0].title}</h1>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className='p-4 rounded shadow'>
                            <Image className='w-full' width="100" height="100" src={data[0].image} alt='featured'/>
                            <h4 className='text-green-500 font-bold mt-1'>{data[0].remark}</h4>
                            <h1 className='text-2xl font-semibold'>{data[0].title}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default FeaturedProject
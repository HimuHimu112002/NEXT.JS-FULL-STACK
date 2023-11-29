import React from 'react'
import { FeaturedData } from '../api/AllGetApi/api'
import Image from 'next/image'

const FeaturedProject = async () => {
    let data = await FeaturedData()
  return (
    <div className=' bg-[#EAEEF3]'>
        <div className='container mx-auto py-10'>
            <p className='text-green-600 font-bold ml-4'>FEATURED PROJECT</p>
            <h2 className='text-3xl font-bold w-96 ml-4 mb-10'>We provide the Perfect Solution to your business growth</h2>

            <div className='flex justify-between flex-wrap mx-2'>
                {data.map((item)=>(
                    <>
                        <div className='w-full sm:w-1/2 md:w-1/3 lg:1/3'>
                            <Image className='w-full p-2' width={100} height={100} src={item.image} alt=''/>
                        </div>
                    </>
                ))}
            </div>
                
        </div>
    </div>
  )
}

export default FeaturedProject
import React from 'react'
import { TeamData } from '../api/AllGetApi/api'
import Image from 'next/image'

const TeamMember = async () => {
    let data = await TeamData()
  return (
    <div className='container mx-auto mt-10'>
        <h5 className='text-green-600 font-bold py-4 ml-6'>Our Team Member</h5>
        <h2 className='text-3xl w-96 font-bold mb-4 ml-6'>Check our awesome team members</h2>

        <div className='flex justify-between flex-wrap'>
            {data.map((item,i)=>(
                <>

                    <div key={i} className="m-auto mb-6 card w-96 bg-base-100 shadow-md">
                        <figure><Image className='w-80' width="50" height="50" src={item.image} alt="Shoes"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>{item.bio}</p>
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

export default TeamMember
import { WorkData } from '../api/AllGetApi/api'

const WorkSection = async () => {
    let data = await WorkData()
  return (
    <div className='container mx-auto'> 
        <h4 className='text-3xl font-bold w-1/3 justify-start my-5'>We provide the Perfect Solution to your business growth</h4>
        <section className='container flex justify-between flex-wrap py-10'>
            {data.map((item, i)=>(
                <div key={i} className="card mx-2 mt-4 sm:mt-none md:w-auto lg:w-[30%] bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.des}</p>
                        <div className="card-actions justify-start">
                            <button className="btn btn-primary ">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </div>

  )
}

export default WorkSection
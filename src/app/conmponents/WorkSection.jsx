import { WorkData } from '../api/AllGetApi/api'

const WorkSection = async () => {
    let data = await WorkData()
  return (
    <div className='container mx-auto'> 
        <p className='text-green-600 font-bold pt-4 ml-6'>Work List</p>
        <h4 className='text-3xl font-bold w-auto lg:w-1/3 justify-start my-2 ml-4'>We provide the Perfect Solution to your business growth</h4>
        <section className='container flex justify-between flex-wrap'>
            {data.map((item, i)=>(
                <div key={i} className="card mx-2 mt-4 sm:mt-none md:w-auto lg:w-[30%] bg-base-100 shadow">
                    <img className='w-20 ml-6 mt-4' src='image/Activity.png'/>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.des}</p>
                        <div className="card-actions justify-start">
                            <button className="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200">Buy Now</button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </div>

  )
}

export default WorkSection
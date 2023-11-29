import Image from 'next/image'
import Herosection from './conmponents/Herosection'
import WorkSection from './conmponents/WorkSection'
import StatusCount from './conmponents/StatusCount'
import FeaturedProject from './conmponents/FeaturedProject'


export default function Home() {
  return (
   <>

      <Herosection/>
      <WorkSection/>
      <StatusCount/>
      <FeaturedProject/>
   </>
  )
}

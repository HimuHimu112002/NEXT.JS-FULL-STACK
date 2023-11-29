import './globals.css'
import Navmenu from './conmponents/Navmenu'
import Subscribe from './conmponents/Subscribe';
import FooterSection from './conmponents/FooterSection';
import TopLoader from './conmponents/TopLoader';

export async function generateMetadata(){
  const res=await fetch("https://agency.teamrabbil.com/api/SiteMeta/home");
  const JSON=await res.json();
  return{
      title:JSON[0]['title'],
      description:JSON[0]['description'],
      keywords:JSON[0]['keywords'],
      openGraph: {
          images: JSON[0]['image'],
      },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <TopLoader/>
      <Navmenu/>
      {children}
      <Subscribe/>
      <FooterSection/>
      </body>
    </html>
  )
}

import './globals.css'
import Navmenu from './conmponents/Navmenu'
import NextTopLoader from 'nextjs-toploader';

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
      <NextTopLoader color="#269669" height={3} speed={200} />
      <Navmenu/>
      {children}
      </body>
    </html>
  )
}

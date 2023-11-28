import './globals.css'
import Navmenu from './conmponents/Navmenu'

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
      <Navmenu/>
      {children}
      </body>
    </html>
  )
}

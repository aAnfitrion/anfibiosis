import NavBar from './Navbar'
import Footer from './Footer'

export default function Container({ children }) {
  return(
    <div className='bg-yaru-200 text-yaru-100 m-5 border-yaru-300 border rounded-xl drop-shadow-2xl'>
      <NavBar/>
      {children}
      <Footer/>
    </div>
  )
}

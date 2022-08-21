import Head from 'next/head'
import Navbar from '../components/Navbar'
import MainPresentation from '../components/index/MainPresentation'
import Skills from '../components/index/Skills/Skills'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className='bg-yaru-200 text-yaru-100 m-5 border-yaru-300 border rounded-xl drop-shadow-2xl'>
      <Navbar/>
      <MainPresentation/>
      <Skills/>
      <Footer/>
    </div>
  )
}

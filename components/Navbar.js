import { BiLock } from 'react-icons/bi'
import ButtonJump from './ButtonJump.js'

export default function Navbar() {
  return(
    <nav className='border-b border-yaru-500'>
      <div className='px-4 py-3 border-t border-yaru-400 rounded-xl'>
        <div className='grid grid-cols-2'>
          <div className='justify-start flex space-x-4'>
            <ButtonJump href='/'>Inicio</ButtonJump>
            <ButtonJump href='/projects'>Proyectos</ButtonJump>
            <ButtonJump href='/logs'>Registro</ButtonJump>
          </div>
          <div className='justify-end flex'>
            <a href='#' className='hover:text-yaru-100 text-yaru-200 ease-in duration-300'><BiLock /> </a>
          </div>
        </div>
      </div> 
    </nav>
  )
}

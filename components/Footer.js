export default function Footer() {
  return(
    <div className='border-t border-yaru-300'>
      <div className='border-t border-yaru-400 p-4 flex justify-evenly text-yaru-800'>
        <div>
          <h1 className='text-xl'>Creado con</h1> 
          <ul className='list-none text-sm'>
            <li>
              <a href='https://nextjs.org/'>Next JS</a>
            </li>
            <li>  
              <a href='https://react-icons.github.io/'>React Icons</a>
            </li>
            <li>
              <a href='https://tailwindcss.com/'>Tailwind CSS</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl'>Creado por</h1>
          <ul className='list-none'>
            <li>
              <a href='https://github.com/aAnfitrion'>Anfitrion</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

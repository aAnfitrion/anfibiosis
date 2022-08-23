import ContactList from './ContactList.js'

export default function Contact() {
  return(
    <div className='py-10 bg-yaru-600 border-t border-yaru-500'>
      <div className='grid grid-cols-1'>
        <div className='flex justify-center'>
          <div className='text-center'>
            <h1 className='text-4xl pb-2'>Mis redes de contacto</h1>
            <p>Estas son mis redes de contacto. Puedes hablarme para lo que quieras, siempre que no sea una tontería.</p>
          </div> 
        </div>
        <div className='py-10 mt-5'>
          <ContactList/>
        </div>
      </div> 
    </div>
  )
}

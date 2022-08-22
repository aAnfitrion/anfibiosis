export default function MainPresentation() {
  return(
    <div className='py-8 bg-yaru-600 border-b border-yaru-500'>
      <div className='grid grid-cols-6 my-10'>
        <div className='flex justify-center col-start-2 col-span-2'>
          <div className='p-3 bg-yaru-700 rounded-xl border border-yaru-200'>
            <img src='/img/golem.png' />
          </div>
        </div>
        <div className='flex items-center justify-center col-span-2'>
          <div className='text-center'>
            <h1 className='text-6xl mb-3'>Anfitrion</h1>
            <p>En esta página podrás encontrar información sobre mi. Tal como: mis habilidades, mis formas de contacto, mis proyectos y otras cosas más. Hice esta página porque vi un video de portafolios impresionantes, y quiero hacer mi propio portafolio.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

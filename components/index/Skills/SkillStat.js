export default function SkillStat({level, type, children}) {
  console.log(level)
  return(
    <div className='grid grid-cols-4'>
      <div className='col-span-3'>
        <div className='grid grid-cols-10 rounded-md border border-yaru-500'>
          <div className={`col-span-${level} bg-gradient-to-r from-purple-100 to-purple-200 p-2 rounded-md text-center`}>
            {level}0%
          </div>
        </div>
      </div>
      <div className='col-span-1 flex items-center text-xl space-x-2'>
        <p className='ml-4'>{type}</p> 
        {children}
      </div>
    </div>
  )
}

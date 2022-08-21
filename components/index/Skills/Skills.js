import SkillStat from './SkillList'
import SkillDesc from './SkillDesc'

export default function() {
  return(
    <div className='p-10 border-t border-yaru-400'>
      <div className='grid grid-cols-5'>
        <div className='col-span-2 flex items-center'>
          <SkillDesc/>
        </div>
        <div className='col-span-3 space-y-1'>
          <SkillStat/> 
        </div>
      </div>
    </div>
  )
}

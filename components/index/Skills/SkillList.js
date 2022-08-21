import SkillStat from './SkillStat'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaravel, FaGitAlt } from 'react-icons/fa'
import { SiPhp } from 'react-icons/si'

export default function SkillList() {
  return(
    <>
      <SkillStat level='6' type='Html'><FaHtml5/></SkillStat> 
      <SkillStat level='4' type='Css'><FaCss3Alt/></SkillStat> 
      <SkillStat level='2' type='Javascript'><FaJs/></SkillStat> 
      <SkillStat level='3' type='PHP'><SiPhp/></SkillStat> 
      <SkillStat level='4' type='React JS'><FaReact/></SkillStat> 
      <SkillStat level='3' type='Git'><FaGitAlt/></SkillStat> 
      <SkillStat level='1' type='Laravel'><FaLaravel/></SkillStat>
    </>
  )
}

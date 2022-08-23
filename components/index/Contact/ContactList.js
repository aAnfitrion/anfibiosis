import ContactType from './ContactType'
import { FaDiscord, FaYoutube, FaGithub } from 'react-icons/fa'

export default function ContactList() {
  return(
    <div className='flex justify-evenly'>
      <ContactType bgh='hover:bg-blue-100' href='https://discord.gg/etPyGGmrCw'><FaDiscord/></ContactType> 
      <ContactType bgh='hover:bg-red-100' href='https://www.youtube.com/channel/UCqNd6e3sUBz3OkuFjnOZGbA'><FaYoutube/></ContactType> 
      <ContactType bgh='hover:bg-teal-100' href='https://github.com/aAnfitrion'><FaGithub/></ContactType> 
    </div>
  )
}

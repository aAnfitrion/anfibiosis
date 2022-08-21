import Link from 'next/link'

export default function Button1({href, children}) {
  return(
    <Link href={href} >
      <a className='pt-1 pb-1 hover:pt-0 hover:pb-2 ease-in duration-100'>{children}</a>
    </Link>
  )
}

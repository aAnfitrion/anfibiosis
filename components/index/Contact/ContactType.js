export default function ContactType({ children, bgh, href }) {
  return(
    <a className={`rounded-full p-4 bg-yaru-200 text-3xl border border-yaru-500 hover:rotate-45 ${bgh} hover:border-yaru-100 easi-in duration-300`} href={href} target='_blank'>
      {children}
    </a>
  )
}

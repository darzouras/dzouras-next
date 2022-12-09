
import Link from 'next/link'

const Navigation = ({ navLinks }) => {
  return (
    <nav className='border-2 rounded-md border-violet text-violet bg-sand inline-block mb-4 md:mb-0'>
      <ul className='p-2 flex gap-3 md:flex-col'>
        {navLinks.map((link) => {
          return (
            <li key={link._key}>
              <Link href={link.url} className="lowercase">
                {link.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
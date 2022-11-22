
import Link from 'next/link'

const Navigation = ({ navLinks }) => {
  return (
    <nav className='border-2 rounded-md border-lake text-lake bg-sand inline-block mb-4'>
      <ul className='p-2 flex gap-3'>
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
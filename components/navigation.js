
import Link from 'next/link'

const Navigation = ({ navLinks }) => {
  return (
    <nav>
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link._key}>
              <Link href={link.url}>
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
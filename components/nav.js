import Link from 'next/link'

const Nav = () => (
  <nav className="flex items-center">
    <Link href='/slides'>
      <a className="ml-2 text-white">杂谈</a>
    </Link>
  </nav>
)

export default Nav

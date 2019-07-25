import Link from 'next/link'

const Nav = () => (
  <nav className="flex items-center">
    <Link href='/slides'>
      <a className="ml-2 text-purple-200 hover:text-white">杂谈</a>
    </Link>
    <Link href='/photo_book_video'>
      <a className="ml-2 text-purple-200 hover:text-white">资源</a>
    </Link>
  </nav>
)

export default Nav

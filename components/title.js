import Link from 'next/link'
import { siteMeta } from '../blog.config'

const Title = ({ path }) => (
  path === '/' ? (
    <h1 className="flex-grow">
      <a className="text-white" href={siteMeta.siteUrl}>
        {siteMeta.title}
      </a>
    </h1>
  ) : (
    <p className="flex-grow font-bold text-xl">
      <Link href='/'>
        <a className="text-purple-200 hover:text-white" rel='me'>{siteMeta.title}</a>
      </Link>
    </p>
  )
)

export default Title

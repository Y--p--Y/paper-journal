import Link from 'next/link'
import { siteMeta } from '../blog.config'

const Title = ({ path }) => (
  <>
    {path === '/' ? (
      <h1>
        <a className="text-white" href={siteMeta.siteUrl}>
          {siteMeta.title}
        </a>
      </h1>
    ) : (
      <p>
        <Link href='/'>
          <a className="text-white" rel='me'>{siteMeta.title}</a>
        </Link>
      </p>
    )}
    <style jsx>{`
      h1 {
        margin-top: 0;
      }

      p {
        font-size: 1.3em;
        font-weight: bold;
      }
    `}</style>
  </>
)

export default Title

import Link from 'next/link'
import PublishedAt from './utils/published-at'

const Post = ({ title, summary, date, path }) => (
  <article className="pb-4 border-dotted border-b-4 border-red-400">
    <header className="mb-2">
      <h2>
        <Link href={path}>
          <a className="no-underline hover:underline text-purple-900">{title}</a>
        </Link>
      </h2>

      <PublishedAt link={path} date={date} />
    </header>
    <div className="text-gray-700">{summary}</div>
  </article>
)

export default Post

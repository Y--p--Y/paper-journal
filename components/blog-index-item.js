import Link from 'next/link'
import PublishedAt from './utils/published-at'
import Tags from './tags'

const Post = ({ tags, title, summary, date, path }) => (
  <article className="pb-1 dotted-border border-b-4">
    <Link href={path}>
      <div className="cursor-pointer">
        <header className="mb-2">
          <h2>
            <a
              title={title}
              className="no-underline hover:text-white hover:bg-purple-900 text-purple-900"
            >
              {title}
            </a>
          </h2>

          <PublishedAt link={path} date={date} />
        </header>
        <div className="text-gray-700">{summary}</div>
      </div>
    </Link>
    <div className="mt-2">
      <Tags tags={tags} />
    </div>
  </article>
)

export default Post

import Link from 'next/link'

const Tags = ({ tags }) => {
  if (!tags || !tags.length) {
    return null
  }

  return tags.map((tag, i) => (
    <Link key={tag} href={`/posts?tag=${tag}`}>
      <a>
        <small
          className={`p-1 text-purple-600 hover:text-white hover:bg-purple-700 ${i === tags.length - 1 ? '' : 'mr-1'}`}
        >#{tag}
        </small>
      </a>
    </Link>
  ))
}

export default Tags

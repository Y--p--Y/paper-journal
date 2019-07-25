import PropTypes from 'prop-types'
import Link from 'next/link'

const NextPrevPost = ({ title, path, position }) => {
  const isNext = position === 'next'
  return (
    <>
      <hr className="dotted-border border-t-4 my-4" />
      <Link href={path}>
        <a className="flex flex-col text-purple-800 hover:text-white hover:bg-purple-800 py-2">
          <small>Read {position} post </small>
          <strong>{title}</strong>
        </a>
      </Link>
      <style jsx>{`
        a {
          ${isNext ? 'text-align: right;' : ''}
          ${isNext ? 'grid-column: 2 / 2;' : ''}
        }
      `}</style>
    </>
  )
}

NextPrevPost.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['next', 'previous'])
}

export default NextPrevPost

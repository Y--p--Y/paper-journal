import Link from 'next/link'

import { posts as blogposts } from '../data/index'

// TODO: list all tags and posts
const Posts = () => {
  const tags = blogposts.reduce((acc, post) => {
    if (post.tags && post.tags.length) {
      post.tags.forEach(tag => {
        //TODO: sluggify tags
        acc[tag] = tag in acc ? acc[tag] + 1 : 1
      });
    }

    return acc
  }, {})

  return (
    <ul>
      {Object.keys(tags).map((tag) => {
        return (
          <li key={tag}>
            <Link href={`/posts?tag=${tag}`}>
              <a>{tag}({tags[tag]})</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Posts

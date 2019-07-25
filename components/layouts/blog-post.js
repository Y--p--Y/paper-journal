import Head from '../head'
import PublishedAt from '../utils/published-at'
import blogposts from '../../posts/index'
import NextPrevPost from '../next-prev-post'
import Tags from '../tags'

function BlogPost ({ path, meta, children }) {
  const currentPostIndex = blogposts
    .map(({ title }) => title)
    .indexOf(meta.title)
  const previousPost = blogposts[currentPostIndex + 1]
  const nextPost = blogposts[currentPostIndex - 1]

  return (
    <>
      <Head
        title={meta.title}
        description={meta.summary}
      />
      <article className='h-entry'>
        <header>
          <h1 className='p-name'>{meta.title}</h1>

          <div>
            <PublishedAt date={meta.publishedAt} link={path} />
          </div>
        </header>
        <div className='text-gray-800 e-content'>{children}</div>
        <div className="mt-12">
          <Tags tags={meta.tags} />
        </div>

        <footer>
          {(previousPost || nextPost) && (
            <div className='post-pagination'>
              {previousPost && (
                <NextPrevPost
                  title={previousPost.title}
                  path={previousPost.path}
                  position='previous'
                />
              )}
              {nextPost && (
                <NextPrevPost
                  title={nextPost.title}
                  path={nextPost.path}
                  position='next'
                />
              )}
            </div>
          )}
        </footer>
      </article>
    </>
  )
}

export default BlogPost

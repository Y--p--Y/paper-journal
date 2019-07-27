import Anchor from '../components/markdown/Anchor'
import { photoBookVideos } from '../data'
import Head from '../components/head'

function PhotoBookVideos() {
  const videos = photoBookVideos.map(([author, videos]) => (
    <section key={author}>
      <h3>{author}</h3>
      <ul>
        {Object.keys(videos).map(name => (
          <li key={name}>
            <Anchor href={videos[name]} title={name}>{name}</Anchor>
          </li>
        ))}
      </ul>
    </section>
  ))

  return (
    <>
      <Head
        title="翻影集视频合集"
        description="翻影集视频收录"
      />
      <article>
        <header>
          <h2>翻影集视频合集</h2>
        </header>
        {videos}
      </article>
    </>
  )
}

export default PhotoBookVideos

import { siteMeta } from '../blog.config'

function Footer () {
  return (
    <footer className="p-4 mt-4 bg-purple-900 text-center text-white">
      <p>
        {siteMeta.author} ❤️
      </p>
    </footer>
  )
}

export default Footer

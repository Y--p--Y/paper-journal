import { siteMeta } from '../blog.config'

function Footer () {
  return (
    <footer
      className="flex justify-center pt-12 pb-24 mt-4 bg-purple-900 text-white"
    >
      <section className="w-56 mr-4 text-left">
        <p className="mb-4"><strong>About</strong></p>
        <p>{siteMeta.description}️</p>
        <p>
          {siteMeta.author} ❤️
        </p>
      </section>
      <section className="w-56 text-left">
        <p className="mb-4"><strong>Contact</strong></p>
      </section>
    </footer>
  )
}

export default Footer

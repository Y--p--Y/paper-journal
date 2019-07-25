export default props => (
  <section className="flex p-4 md:pr-6 my-2 mx-auto bg-purple-100">
    <div className="hidden sm:block text-2xl mr-3">💬</div>
    <blockquote
      className="flex-grow text-gray-600"
      {...props}
    />
  </section>
)

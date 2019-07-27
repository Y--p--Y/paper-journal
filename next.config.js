const withCSS = require('@zeit/next-css')
const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    hastPlugins: [require('mdx-prism')]
  }
})

module.exports = withCSS(withMDX({
  target: 'serverless',
  pageExtensions: ['js', 'jsx', 'mdx', 'md'],
  webpack: (config, { defaultLoaders, isServer, dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
      module: 'empty'
    }

    if (isServer && !dev) {
      const originalEntry = config.entry
      config.entry = async () => {
        const entries = { ...(await originalEntry()) }
        // This script imports components from the Next app, so it's transpiled to `.next/server/scripts/build-rss.js`
        entries['./data/rss-feed.js'] = './data/rss-feed.js'
        return entries
      }
    }

    return config
  }
}))

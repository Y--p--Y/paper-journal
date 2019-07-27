const yaml = require('js-yaml');
const fs = require('fs')
const path = require('path')

const DIR = path.join(process.cwd(), '/data/photo_book_video.yml')
const json = yaml.safeLoad(fs.readFileSync(DIR, 'utf8'))

module.exports = Object.keys(json)
  .sort((a, b) => a.localeCompare(b))
  .map(author => [author, json[author]]);



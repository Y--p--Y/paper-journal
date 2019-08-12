import React from 'react'
import Link from 'next/link'
import { parse, format } from 'date-fns'

function PublishedAt (props) {
  const { link, date } = props
  return (
    <Link href={link}>
      <a href={link} {...props}>
        <time className='dt-published'>
          {format(parse(date), 'MMMM DD, YYYY')}
        </time>
      </a>
    </Link>
  )
}

export default PublishedAt

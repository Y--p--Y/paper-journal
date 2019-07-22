import { siteMeta } from '../blog.config'

const Profile = () => (
  <div className='h-card profile'>
    <div>
      <p>
        Hi, I'm{' '}
        <a className='u-url p-name' href={siteMeta.siteUrl} rel='me'>
          {siteMeta.author}
        </a>
      </p>
      <p className='p-note'>
        I'm a frontend developer &amp; web standards enthusiastic.
      </p>
    </div>
  </div>
)

export default Profile

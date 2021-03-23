/** @format */

import Profile from 'components/auth/profile'
import useChangeMeta from 'components/common/hooks/useChangeMeta'
import MainLayout from 'components/MainLayout';
const profile = () => {
  useChangeMeta('Profile')
  const content = (
    <Profile />
  )

  return (
    <div>
      <MainLayout content={content} />
    </div>
  )
}

export default profile

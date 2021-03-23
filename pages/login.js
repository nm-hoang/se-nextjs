/** @format */

import useChangeMeta from 'components/common/hooks/useChangeMeta'
import MainLayout from 'components/MainLayout'
import Login from 'components/auth/login'

const login = () => {
  useChangeMeta('Login')

  const login = <Login />

  return (
    <div>
      <MainLayout content={login} />
    </div>
  )
}

export default login

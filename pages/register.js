/** @format */

import Register from 'components/auth/register'
import useChangeMeta from 'components/common/hooks/useChangeMeta'
import MainLayout from 'components/MainLayout';
const register = () => {
  useChangeMeta('Register')

  const content = (
    <div className="container">
    <div className="row">
      <div className="col align-self-center">
          <Register />
    </div>
    </div>
    </div>
  )

  return (
    <div>
      <MainLayout content={content} />
    </div>
  )
}

export default register;

/** @format */

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { ProfileActions } from 'actions/authActions'
const Profile = () => {
  const router = useRouter()
  const { isLoading } = useSelector((state) => state.authReducers)
  const dispatch = useDispatch()
  const [user, setUser] = useState({})
  useEffect(() => {
    const { id } = router.query
    dispatch(ProfileActions(id)).then((res) => {
      if (!res.error) {
        setUser(res.data)
      }
    })
  }, [])

  return <div>Profile:</div>
}

export default Profile

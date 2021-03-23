/** @format */

import Utils from 'components/UIKit/Utils'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useToasts } from 'react-toast-notifications'

import { LoginActions } from 'actions/authActions'

const Login = (props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { addToast } = useToasts()
  const state = useSelector((state) => state.authReducers)
  const { isLoading } = state

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onClick = () => {
    const data = {
      username,
      password,
    }

    dispatch(LoginActions(data)).then((res) => {
      if (res.error) {
        if (res.data) {
          addToast(res.data.error, { appearance: 'error' })
        } else {
          addToast('Something went wrong!', { appearance: 'error' })
        }
      } else {
        addToast('Logged In', { appearance: 'success' })
        router.push('/')
      }
    })
  }

  const items = {
    inputs: [
      {
        id: 1,
        label: 'Username', // Same as name but lowercase
        type: 'text',
        placeholder: 'Enter your username',
        onChange: (e) => setUsername(e.target.value),
      },
      {
        id: 2,
        label: 'Password',
        type: 'password',
        placeholder: 'Enter your password',
        onChange: (e) => setPassword(e.target.value),
      },
    ],
    actions: [
      {
        id: 1,
        text: 'Cancel',
        isOutline: true,
        variant: 'danger',
        onClick: () => router.push('/'),
      },
      { id: 2, text: 'Login', onClick: () => onClick(), isLoading },
    ],
  }

  const customBody = (
    <div className="row justify-content-center mt-3">
      <div className="col-auto">
        <p className="text-body-18 text-dark">
          Or{' '}
          <a href="/register" className="text-decoration-none">
            Register
          </a>
        </p>
      </div>
    </div>
  )

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-6">
          {Utils.CardForm({ items, title: 'Login', customBody })}
        </div>
      </div>
    </>
  )
}

export default Login

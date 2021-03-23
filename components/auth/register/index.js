/** @format */

import { useState } from 'react'
const Register = () => {
  const [user, setUser] = useState({
    fullname: null,
    phonenumber: null,
    email: null,
  })
  const [confirmPassword, setConfirmPassword] = useState(null)
  const [account, setAccount] = useState({
    username: null,
    password: null,
  })

  const [checkCondition, setCheckCondition] = useState({
    email: true,
    re_password: true,
  })
  const emailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
  )

  const handleEmail = (e) => {
    if (emailRegex.test(e.target.value)) {
      setCheckCondition({ ...checkCondition, email: true })
      setUser({ ...user, email: e.target.value })
    } else {
      setUser({ ...user, email: null })
      setCheckCondition({ ...checkCondition, email: false })
    }
  }
  const handleConfirmPassword = (e) => {
    if (e.target.value != account.password) {
      setCheckCondition({ ...checkCondition, re_password: false })
    } else {
      setCheckCondition({ ...checkCondition, re_password: true })
    }
  }

  const handleSubmit = () => {
  }
  return (
    <div className="container p-3 form-submit">
      <h3 className="text-center  fs-4 text">Register</h3>
      <label className="mt-4 ms-2 col-sm-2 col-form-label">Fullname</label>
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={(e) => setUser({ ...user, fullname: e.target.value })}
          className="input-field fst-italic form-control lg shadow p-3 rounded-pill"
          placeholder="Fullname"
          aria-label="Fullname"
          aria-describedby="basic-addon1"
        ></input>
      </div>

      <label className="mt-2 ms-2 col-sm-2 col-form-label">Username</label>
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={(e) => setAccount({ ...account, username: e.target.value })}
          className="input-field fst-italic form-control lg shadow p-3 rounded-pill"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div>
        <label className="mt-2 ms-2 col-sm-2 col-form-label">Email</label>
        <div className="input-group mb-3">
          <input
            type="email"
            onChange={handleEmail}
            className="input-field fst-italic form-control lg shadow p-3 rounded-pill"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </div>
        {!checkCondition.email ? (
          <small className="text-danger ms-2">Email is invalid! </small>
        ) : (
          ''
        )}
      </div>
      <label className="mt-2 ms-2 col-sm-2 col-form-label">Password</label>
      <div className="input-group mb-3">
        <input
          type="password"
          onChange={(e) => setAccount({ ...account, password: e.target.value })}
          className="input-field fst-italic form-control lg shadow p-3  rounded-pill"
          placeholder="Password"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>

      <label className="mt-2 ms-2 col-form-label">Confirm password</label>
      <div className="input-group mb-3">
        <input
          type="password"
          onChange={handleConfirmPassword}
          className="input-field fst-italic form-control lg shadow p-3 rounded-pill"
          placeholder="Confirm password"
          aria-label="Confirm password"
          aria-describedby="basic-addon1"
        />
      </div>
      {!checkCondition.re_password ? (
        <small className="text-danger ms-2">
          The confirm password you entered is not the same!{' '}
        </small>
      ) : (
        ''
      )}
      <div className="row">
        <div class="d-grid gap-2 ps-5 col-6 mx-auto mt-5 ">
          <button class="btn btn-outline-dark rounded-pill" type="button">
            Cancel
          </button>
        </div>
        <div class="d-grid gap-2 pe-5  col-6 mx-auto mt-5">
          <button
            onClick={handleSubmit}
            class="btn btn-primary rounded-pill"
            type="button"
          >
            Register
          </button>
        </div>
      </div>

      <div className="mt-5">
        <p className="fst-italic text-center fw-normal">
          Already have an account?{' '}
          <a href="/" className=" text-decoration-none">
            Login{' '}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Register

/** @format */

import axios from 'utils/services/axios'
const prefix = 'users'

class AuthServices {
  LoginService = (data) => {
    return axios.request({
      method: 'POST',
      url: `auth/login`,
      data,
    })
  }

  ProfileService = (id) =>{
    return axios.request({
      method: 'GET',
      url: `${prefix}/${id}`,
    })
}
}


export default AuthServices
/** @format */

import Cookies from 'js-cookie'
const CookiesService = (() => {
  const setToken = (tokenObj) => {
    Cookies.set('access_token', tokenObj.access_token)
    if (tokenObj.refresh_token)
      Cookies.set('refresh_token', tokenObj.refresh_token)
  }

  const getAccessToken = () => {
    return Cookies.get('access_token')
  }

  const getRefreshToken = () => {
    return Cookies.get('refresh_token')
  }

  const clearToken = () => {
    Cookies.remove('access_token')
    Cookies.remove('refresh_token')
  }

  return {
    setToken,
    getAccessToken,
    getRefreshToken,
    clearToken,
  }
})()

export default CookiesService

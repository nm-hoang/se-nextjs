/** @format */

import '../styles/globals.scss'

import App from 'next/app'
import PropTypes from 'prop-types'
import configStore from '../store'
import { Provider } from 'react-redux'
import GlobalProvider from '../components/common/context/GlobalContext'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastProvider } from 'react-toast-notifications'
const store = configStore()

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <ToastProvider autoDismiss={true} autoDismissTimeout="3000">
          <Component {...pageProps} />
        </ToastProvider>
      </GlobalProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp

MyApp.propTypes = {
  router: PropTypes.objectOf(PropTypes.any),
  Component: PropTypes.func,
  pageProps: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

/** @format */

import MasterLayout from 'components/layout/MasterLayout'
import Navbar from 'components/layout/Navbar'
import Footer from 'components/layout/Footer'

const MainLayout = (props) => {
  const content = props.content ? props.content : null

  const listItems = [
    {
      id: 1,
      name: 'My Booking',
      to: '/',
      icon: 'archive',
    },
    {
      id: 2,
      name: 'Profile',
      to: '/login',
      icon: 'person-fill',
    },
  ]

  const header = <Navbar listItems={listItems} />
  const footer = <Footer />

  return <MasterLayout header={header} content={content} footer={footer} />
}

export default MainLayout

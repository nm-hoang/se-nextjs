/** @format */

import MainLayout from 'components/MainLayout'
import AddHotel from 'components/admin/AddHotel'

export default function HomePage() {
  const content = <AddHotel />

  return (
    <div>
      <MainLayout content={content} />
    </div>
  )
}

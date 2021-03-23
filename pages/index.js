/** @format */

import MainLayout from 'components/MainLayout'
import Home from 'components/Home'

export default function HomePage() {
  const content = <Home />

  return (
    <div>
      <MainLayout content={content} />
    </div>
  )
}

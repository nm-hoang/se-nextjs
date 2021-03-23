/** @format */

import useChangeMeta from 'components/common/hooks/useChangeMeta'
import MainLayout from 'components/MainLayout'
import FormCheckout from 'components/checkout/FormCheckout'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const checkout = () => {
  // useChangeMeta('Hotel')
  const router = useRouter()
  const { id } = router.query
  const [timeStay, setTimeStay] = useState()

  useEffect(() => {
    if (Cookies.get('timeStay')) {
      setTimeStay(JSON.parse(Cookies.get('timeStay')))
    }
  }, [])

  const content = (
    <div>
      {timeStay ? (
        <FormCheckout roomId={id} timeStay={timeStay} />
      ) : null}
    </div>
  )

  return (
    <div>
      <MainLayout content={content} />
      {/* {content} */}
    </div>
  )
}

export default checkout

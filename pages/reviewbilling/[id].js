/** @format */

import useChangeMeta from 'components/common/hooks/useChangeMeta'
import MainLayout from 'components/MainLayout'
import ReviewBilling from 'components/checkout/ReviewBilling'
import { useRouter } from 'next/router'

const reviewbilling = () => {
  // useChangeMeta('Hotel')
  const router = useRouter()
  const { id } = router.query
  const content = (
    <div>
      <ReviewBilling idBill={id} />
    </div>
  )

  return (
    <div>
      {/* <MainLayout content={content} /> */}
      {content}
    </div>
  )
}

export default reviewbilling

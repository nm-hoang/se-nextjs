/** @format */

import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { OrderActions } from 'actions/paymentActions'
import { useToasts } from 'react-toast-notifications'
import Cookies from 'js-cookie'
import Button from 'components/UIKit/Button'
import Utils from 'components/UIKit/Utils'
import MainLayout from 'components/MainLayout'

const details = Cookies.get('bookingDetail')

const VnpayReturn = (props) => {
  const Router = useRouter()
  const dispatch = useDispatch()
  const { addToast } = useToasts()
  const [bookingDetail, setBookingDetail] = useState({})

  const query = Router.query
  // console.log(query)

  const order = query

  useEffect(() => {
    const details_json = JSON.parse(details)
    setBookingDetail(JSON.parse(Cookies.get('bookingDetail')))

    try {
      dispatch(
        OrderActions({
          order: {
            user_id: details_json.user_id ? details_json.user_id : null,
            room_id: details_json.roomId,
            user_name: details_json.name,
            email: details_json.email,
            phone_number: details_json.phonenumber,
            checkin: details_json.checkin,
            no_nights: details_json.duration,
            no_user: details_json.noGuest,
            no_room: details_json.noRoom,
            price: details_json.total,
          },
        })
      )
        .then((res) => {
          if (!res.error) {
            addToast('Order saved', { appearance: 'success' })
          } else {
            addToast('Order saved', { appearance: 'warning' })
          }
        })
        .catch((error) => {
          addToast(error, { appearance: 'danger' })
        })
    } catch (error) {
      addToast(error, { appearance: 'danger' })
    }
  }, [])

  const content = (
    <>
      <div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <Utils.Card
              body={
                <div className="row justify-content-center">
                  <p className="text-center">Payment Successfully</p>

                  <div className="col-8">
                    <Button
                      block
                      text="Home"
                      onClick={() => Router.push({ pathname: '/' })}
                    />
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <MainLayout content={content} />
    </>
  )
}

export default VnpayReturn

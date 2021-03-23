/** @format */

import { useState, useEffect } from 'react'
import Icon from '../Icon'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { RoomDetailActions } from 'actions/roomActions'
import { HotelDetailActions } from 'actions/hotelActions'
import { PaymentActions } from 'actions/paymentActions'
import Router from 'next/router'
import Button from 'components/UIKit/Button'
import { useToasts } from 'react-toast-notifications'

const FormCheckout = (props) => {
  const { addToast } = useToasts()
  const [bookingDetail, setBookingDetail] = useState({})
  const [room, setRoom] = useState({})
  const [hotel, setHotel] = useState({})
  const [tempRoom, setTempRoom] = useState()

  const roomId = props.roomId ? props.roomId : null
  const timeStay = props.timeStay ? props.timeStay : null

  const dispatch = useDispatch()
  useEffect(() => {
    //if not have data in timeStay
    if (!timeStay) {
      Router.push('/404')
    }

    setBookingDetail(JSON.parse(Cookies.get('bookingDetail')))

    dispatch(RoomDetailActions(roomId)).then((res) => {
      if (!res.error) {
        setRoom(res.data)
        const idHotel = res.data.hotel_id
        dispatch(HotelDetailActions(idHotel)).then((res) => {
          if (!res.error) {
            setHotel(res.data)
          }
        })
      } else {
        addToast(res.error, { appearance: 'danger' })
      }
    })
  }, [])

  const priceRooms =
    room && hotel
      ? parseFloat(timeStay.noRoom) *
        parseFloat(timeStay.duration) *
        (room.price * (1 - hotel.discount / 100))
      : null

  const total =
    hotel && room
      ? hotel.tax
        ? parseFloat(priceRooms + hotel.tax)
        : parseFloat(priceRooms)
      : null
  const handleSubmit = () => {
    dispatch(PaymentActions({ amount: total * 1000 })).then((res) => {
      if (!res.error) {
        Router.push(res.data.data)
      } else {
        addToast(res.error, { appearance: 'danger' })
      }
      // window.open(res.data.data, '_blank')
    })
  }
  return (
    <div
      className="container card shadow my-5 p-1 border-0 card-checkout"
      style={{ borderRadius: '10px' }}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-lg-8">
            <p className="fs-4">Price detail</p>
            <div className="bg-white p-3 rounded-form">
              <div className="border-bottom mb-2">
                <div className="row">
                  <div className="col-10">
                    <p className="fw-bold">Total</p>
                  </div>
                  <div className="col-2">
                    <p className="fw-bold float-end">${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <div className="ms-1">
                <div className="row">
                  <div className="col-10">
                    <span>
                      ({timeStay.noRoom}x) {room.name}({timeStay.duration}{' '}
                      {timeStay.duration > 1 ? (
                        <span>nights</span>
                      ) : (
                        <span>night</span>
                      )}
                      )
                    </span>
                  </div>
                  <div className="col-2">
                    <span className="float-end">${priceRooms.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="ms-1 mt-2">
                <div className="row">
                  <div className="col-10">
                    <span>Tax</span>
                  </div>
                  <div className="col-2">
                    <span className="float-end">
                      ${hotel.tax ? hotel.tax : ' 0'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="warning"
              text="Continue booking"
              customClass="my-4 d-flex mx-auto"
              onClick={handleSubmit}
            />
          </div>
          <div className="col-lg-4 col-sm-12 mt-5">
            <div className="bg-white p-3 rounded-form">
              <div className="text-primary">
                <Icon icon="hotel" customClass="pt-1" />
                <span className="fs-5 ms-1 text-dark">{hotel.name}</span>
              </div>

              <div className="bg-light rounded-form p-2 mt-3 mb-1">
                <div className="row">
                  <div className="col-5">
                    <span className="fw-bold text-muted">Check-in: </span>
                  </div>
                  <div className="col-7">
                    <span>{timeStay.checkin}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <span className="fw-bold text-muted">Check-out: </span>
                  </div>
                  <div className="col-7">
                    <span>{timeStay.checkout}</span>
                  </div>
                </div>
              </div>

              <span className="fs-5  ">
                ({timeStay.noRoom}x) {room.name}
              </span>
              <br />
              <div className="row">
                <div className="col-6">
                  <span className="text-muted">Guest/room: </span>
                </div>
                <div className="col-6">
                  <span>{room.no_guest} guests</span>
                </div>
              </div>
              <div className="row">
                <div className="col-5">
                  <span className="text-muted">Bed type: </span>
                </div>
                <div className="col-7">
                  <div>
                    <span>
                      {room.no_bunk ? room.no_bunk.single : ''} single bed(s)
                    </span>
                  </div>
                  <div>
                    <span>
                      {room.no_bunk ? room.no_bunk.double : ''} double bed(s)
                    </span>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-4">
                  <img
                    className="sm-room"
                    src="https://media.vibehotels.com/media/filer_public/fc/3c/fc3c38f5-16d8-46d2-a10f-f13c4cd538e2/vibe-hotel-sydney-executive-room-bedroom-king-02-2018-323x424.jpg"
                    // src={room.images[0]}
                    alt="..."
                    style={{ width: '100%' }}
                  />
                </div>
                <div className="col-8">
                  {tempRoom
                    ? Object.entries(tempRoom.facilities).map(
                        ([key, value]) => {
                          if (key === 'freeWifi' || key === 'freeBreakfast') {
                            return (
                              <div key={value} className="text-primary">
                                <Icon icon={key} />
                                <span className="ms-1 fw-normal"> {value}</span>
                                <br />
                              </div>
                            )
                          }
                        }
                      )
                    : null}
                </div>
              </div>

              <div className="mt-3">
                {tempRoom
                  ? Object.entries(tempRoom.policy).map(([key, value]) => {
                      if (key === 'nonRefundable' || key === 'nonCancel') {
                        return (
                          <div key={value} className="text-muted">
                            <Icon icon={key} customClass="pt-0" />
                            <span className="ms-1 fw-normal"> {value}</span>
                            <br />
                          </div>
                        )
                      }
                    })
                  : null}
              </div>
            </div>
            <div className="row mt-2 mx-auto">
              <div className="my-auto bg-white p-3 rounded-form w-100  fs-5 ">
                <div className="border-bottom">
                  <span className="text-dark">Your Information</span>
                </div>
                <div>
                  <span className="text-muted">{bookingDetail.name}</span>
                  <br />
                  <span className="text-muted">
                    {bookingDetail.phonenumber}
                  </span>
                  <br />
                  <span className="text-muted">{bookingDetail.email}</span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormCheckout

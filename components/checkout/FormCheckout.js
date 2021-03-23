/** @format */

import { useState, useEffect } from 'react'
import Icon from '../Icon'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { RoomDetailActions } from 'actions/roomActions'
import { HotelDetailActions } from 'actions/hotelActions'
import Router from 'next/router'
import Button from 'components/UIKit/Button'
import Input from 'components/UIKit/Input'
import { useToasts } from 'react-toast-notifications'

const FormCheckout = (props) => {
  const { addToast } = useToasts()

  const [bookingDetail, setBookingDetail] = useState({
    name: null,
    phonenumber: null,
    email: null,
  })

  const roomId = props.roomId ? props.roomId : null
  const timeStay = props.timeStay ? props.timeStay : null

  const [room, setRoom] = useState({})
  const [hotel, setHotel] = useState({})
  const [tempRoom, setTempRoom] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    //if not have data in timeStay
    if (!timeStay) {
      Router.push('/404')
    }

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

  const [checkCondition, setCheckCondition] = useState({
    email: true,
    phone: true,
  })
  const emailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
  )
  const phoneRegex = RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g)
  const handleEmail = (e) => {
    if (emailRegex.test(e.target.value)) {
      setCheckCondition({ ...checkCondition, email: true })
      setBookingDetail({ ...bookingDetail, email: e.target.value })
    } else {
      setBookingDetail({ ...bookingDetail, email: null })
      setCheckCondition({ ...checkCondition, email: false })
    }
  }

  const handlePhone = (e) => {
    if (phoneRegex.test(e.target.value)) {
      setCheckCondition({ ...checkCondition, phone: true })
      setBookingDetail({ ...bookingDetail, phonenumber: e.target.value })
    } else {
      setBookingDetail({ ...bookingDetail, phonenumber: null })
      setCheckCondition({ ...checkCondition, phone: false })
    }
  }

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

  useEffect(() => {
    const room_id = { roomId }
    const price = { total }
    // setBookingDetail({ ...bookingDetail, ...room_id })
    setBookingDetail({ ...bookingDetail, ...timeStay, ...room_id, ...price })
  }, [total])

  const handleSubmit = () => {
    if (
      bookingDetail.name &&
      bookingDetail.phonenumber &&
      bookingDetail.email
    ) {
      Router.push({
        pathname: `${Router.route}/review`,
        query: { id: roomId },
      })
      Cookies.set('bookingDetail', JSON.stringify(bookingDetail))
    } else {
      addToast('Please fill all the feilds!', { appearance: 'warning' })
    }
  }
  return (
    <div
      className="container card shadow my-5 p-1 border-0 card-checkout"
      style={{ borderRadius: '10px' }}
    >
      <div className="card-body">
        <div className="row">
          <div className="col-lg-8">
            <p className="fs-4">Your Information</p>
            <div className="bg-white p-3 rounded-form">
              <Input
                type="text"
                autoComplete="name"
                onChange={(e) =>
                  setBookingDetail({ ...bookingDetail, name: e.target.value })
                }
                placeholder="Contact name"
              />
              <span>
                <small className="text-muted ms-2" style={{ fontSize: '12px' }}>
                  As in Passport/Official ID Card (without title/special
                  characters)
                </small>
              </span>
              <div className="row mt-2">
                <div className="col-6">
                  <Input
                    type="tel"
                    autoComplete="tel"
                    onChange={handlePhone}
                    placeholder="Phone number"
                  />

                  {!checkCondition.phone ? (
                    <small className="text-danger ms-2">
                      Phone number is invalid!{' '}
                    </small>
                  ) : (
                    ''
                  )}
                </div>
                <div className="col-6">
                  <Input
                    type="email"
                    autoComplete="email"
                    onChange={handleEmail}
                    placeholder="Email address"
                  />

                  {!checkCondition.email ? (
                    <small className="text-danger ms-2">
                      Email is invalid!{' '}
                    </small>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
            {tempRoom ? (
              Object.keys(tempRoom.policy).length > 0 ? (
                <div>
                  <p className="mt-5 fs-4">Cancellation policy</p>
                  <div className="bg-white p-3 rounded-form">
                    <div className="border-bottom">
                      <p className="fw-bold">Cancellation policy</p>
                    </div>
                    <p className="mt-2 ms-1">
                      This reservation is
                      {Object.entries(tempRoom.policy).map(([key, value]) => (
                        <span key={value}> {value}, </span>
                      ))}
                      ...
                    </p>
                  </div>
                </div>
              ) : (
                ''
              )
            ) : null}

            <p className="mt-5 fs-4">Price detail</p>
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
                    <span className="float-end">
                      ${priceRooms ? priceRooms.toFixed(2) : null}
                    </span>
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
                            <Icon icon={key} />
                            <span className="ms-1 fw-normal"> {value}</span>
                            <br />
                          </div>
                        )
                      }
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormCheckout

/** @format */

import { useState, useEffect } from 'react'
import Icon from '../Icon'
import { useDispatch, useSelector } from 'react-redux'
import { GetOrderActions } from 'actions/orderActions'
import { RoomDetailActions } from 'actions/roomActions'
import { HotelDetailActions } from 'actions/hotelActions'
import Utils from '../UIKit/Utils'
const ReviewBilling = (props) => {
  const dispatch = useDispatch()
  // props.idBill
  const id = props.idBill
  const [bill, setBill] = useState({})
  const tempBill = {
    id: 123123,
    checkin: '2021-02-02',
    no_nights: 3,
    name: 'Nguyen Minh',
    email: 'nmhoang@gmail.com',
    phonenumber: '0929129292',
    card_number: '123123',
    no_user: 5,
    no_room: 1233,
    price: 800.5,
  }
  const [hotelName, setHotelName] = useState()
  const [location, setLocation] = useState()
  useEffect(() => {
    // dispatch(GetOrderActions(id)).then((res) => {
    //     if (!res.error) {
    //         console.log(res);
    //         setBill(res.data);

    //     }
    // })

    const idroom = '601fc3e92e4f610023202c9b'
    const hotelid = '601fadbb7035ab0023ec60ce'
    dispatch(RoomDetailActions(idroom)).then((res) => {
      if (!res.error) {
        const idHotel = res.data.hotel_id

        dispatch(HotelDetailActions(hotelid)).then((res) => {
          if (!res.error) {
            setHotelName(res.data.name)
            setLocation(res.data.location)
          }
        })
      }
    })
  }, [])

  return (
    <div className="container card shadow my-5 p-1 border-0 card-checkout">
      <div className="card-body">
        <div className="row">
          <div className="bg-white p-3 rounded-form w-50 mx-auto form-billing">
            <div className="text-success">
              <Icon icon="check" customClass="mt-0"  />
              <span className="fs-4"> Booking successful!</span>
            </div>
            <div className="row">
              <div className="col-4 fw-bold text-muted">
                <span> Check-in:</span>
                <br />
                <span> Durations: </span>
                <br />
              </div>
              <div className="col-8">
                <span>{tempBill.checkin}</span>
                <br />
                <span>{tempBill.no_nights} night</span>
                {tempBill.no_nights > 1 ? 's' : ''}
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4 fw-bold text-muted">
                <span>Name:</span>
                <br />
              </div>
              <div className="col-8">
                <span>{tempBill.name.toUpperCase()}</span>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-4 fw-bold text-muted">
                <span>Phone number:</span>
                <br />
              </div>
              <div className="col-8">
                <span>{tempBill.phonenumber}</span>
                <br />
              </div>
            </div>
            <div className="row">
              <div className="col-4 fw-bold text-muted">
                <span>Email:</span>
                <br />
              </div>
              <div className="col-8">
                <span>{tempBill.email}</span>
                <br />
              </div>
            </div>
            <p className="text-primary fw-bold mt-4 border-bottom">
              Intinerary ID #{tempBill.id}
            </p>

            <div>
              <p className="fw-bold">{hotelName}</p>
              {/* {location ? (
                <p className="text-muted">
                  {location.no_address}, {location.street}, Ward {location.ward}
                  {location.district ? (
                    <span>, District {location.district}</span>
                  ) : (
                    ''
                  )}
                  , {location.city}
                </p>
              ) : (
                ''
              )} */}
              {location ? <>
              {Utils.Address({  text :<p className="text-muted">
                  {location.no_address}, {location.street}, Ward {location.ward}
                  {location.district ? (
                    <span>, District {location.district}</span>
                    ) : (
                      ''
                      )}
                  , {location.city}
                </p>})} </>
                : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewBilling

/** @format */

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HotelDetailActions } from 'actions/hotelActions'
import { ListRoomActions } from 'actions/roomActions'
import Hotel from '../UIKit/components/Hotel'
import Room from '../UIKit/components/Room'
import Utils from 'components/UIKit/Utils'
import Button from 'components/UIKit/Button'
import { useRouter } from 'next/router'

function HotelView(props) {
  // const HotelView = (props) => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.hotelReducers)
  const Router = useRouter()

  const photel = props.hotel ? props.hotel : null
  const prooms = props.rooms ? props.rooms : null
  const id = props.id ? props.id : null

  const [hotel, setHotel] = useState(photel)
  const [rooms, setRooms] = useState(prooms)

  useEffect(() => {
    // dispatch(HotelDetailActions(props.id)).then((res) => {
    //   if (!res.error) {
    //     setHotel(res.data)

    //   }
    // })

    dispatch(ListRoomActions(id)).then((res) => {
      setRooms(res.data.data)
      // console.log(res.data.data)
    })
  }, [])

  const overview = hotel ? Hotel.Overview({ data: hotel }) : null

  const body = (room) => (
    <div key={room._id} className="">
      <div className="row d-grid gap-3">
        {/* Room name */}
        <div className="row">
          {Utils.TextTitle({ text: room ? room.name : '', textSize: 24 })}
        </div>

        {/* Room specific */}
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            {Utils.TextWithIcon({
              text: '2 Single Bed',
              icon: 'bookshelf',
            })}
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {Utils.TextWithIcon({ text: '2 Guest', icon: 'people-fill' })}
          </div>
          {/* <div className="col-lg-4 col-md-4 col-sm-12">
        {availableRoom
          ? Utils.Text({
              text: `(${availableRoom} room(s) available)`,
              color: 'text-danger',
              customClass: 'm-0 d-inline float-end',
            })
          : null}
      </div> */}
        </div>

        <hr />
        {/* Room details */}
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            {hotel.facility
              ? Object.entries(hotel.facility).map(([key, value]) => {
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
          <hr className="d-none d-sm-block d-md-none" />
          <div className="col-lg-4 col-md-4 col-sm-12">
            {hotel.policy
              ? Object.entries(hotel.policy).map(([key, value]) => {
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
          <hr className="d-none d-sm-block d-md-none" />
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="row d-flex align-items-end flex-column gap-2">
              {hotel.discount ? (
                <div className="col-auto">
                  {Utils.Text({
                    text: `$${room.price}`,
                    color: 'text-muted fs-4',
                    customClass: 'text-decoration-line-through m-0 d-inline',
                  })}
                </div>
              ) : null}
              {room.price ? (
                <div className="col-auto">
                  {Utils.Text({
                    text: `$${(room.price * (100 - hotel.discount)) / 100}`,
                    color: 'text-warning fw-bold',
                    customClass: 'm-0 d-inline',
                  })}
                </div>
              ) : null}
              {/* {price ? <div className="col-auto">{price}</div> : null} */}
              <div className="col-auto">
                {Utils.Text({
                  text: '/room/night',
                  color: 'text-muted',
                  customClass: 'm-0 d-inline text-body-18',
                })}
              </div>
              <div className="col-auto">
                {Utils.Text({
                  text: 'Taxes included',
                  color: 'text-primary',
                  customClass: 'm-0 d-inline text-body-18',
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Book now button */}
        <div className="row justify-content-end">
          <div className="col-auto">
            <Button
              variant="warning"
              text="Book now"
              onClick={(e) =>
                Router.push({ pathname: `/checkout`, query: { id: room._id } })
              }
            />
          </div>
        </div>
      </div>
    </div>
  )

  const roomGroup =
    // null
    rooms
      ? rooms.map((room) => (
          <Utils.Card
            key={room._id}
            body={body(room)}
            animation
            bodyClass="p-4"
          />
        ))
      : null

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-8">{overview}</div>
        {rooms ? <div className="col-8">{roomGroup}</div> : null}
      </div>
    </>
  )
}

export default HotelView

/** @format */

import useChangeMeta from 'components/common/hooks/useChangeMeta'
import MainLayout from 'components/MainLayout'
import HotelView from 'components/hotel'
import { useRouter } from 'next/router'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HotelDetailActions } from 'actions/hotelActions'
import { ListRoomActions } from 'actions/roomActions'

const hotel = () => {
  // useChangeMeta('Hotel')
  const router = useRouter()
  const { id } = router.query

  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.hotelReducers)
  const [hotel, setHotel] = useState()
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    dispatch(HotelDetailActions(id)).then((res) => {
      if (!res.error) {
        setHotel(res.data)

        dispatch(ListRoomActions(res.data._id)).then(async (res) => {
          await setRooms(res.data.data)
          // console.log(res.data.data)
        })
      }
    })
  }, [])

  const content = (
    <div>
      <h1>
        {hotel ? <HotelView id={id} hotel={hotel} rooms={rooms} /> : null}
      </h1>
    </div>
  )

  return (
    <div>
      <MainLayout content={content} />
      {/* {content} */}
    </div>
  )
}

export default hotel

/** @format */

import Utils from 'components/UIKit/Utils'
import Input from 'components/UIKit/Input'
import Button from 'components/UIKit/Button'
import { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import Router from 'next/router'
import Cookies from 'js-cookie'

function addDate(start, step) {
  const date = new Date(start)
  date.setDate(date.getDate() + Number(step))
  return date
}

function formatDate(date) {
  const formatted = date.toISOString().substring(0, 10)
  return formatted
}

const SearchEngine = (props) => {
  const { addToast } = useToasts()

  const searchInput = {
    label: 'Hotel name, destination or city',
    placeholder: 'Enter hotel name, destination or city',
  }

  const todayPure = new Date(Date.now())
  const today = formatDate(todayPure)

  // State
  const [search, setSearch] = useState('')
  const [duration, setDuration] = useState(1)
  const [checkin, setCheckin] = useState(today)
  const [checkout, setCheckout] = useState()

  const [noGuest, setNoGuest] = useState(1)
  const [noRoom, setNoRoom] = useState(1)

  // Check when change check-in or duration
  useEffect(() => {
    const co = addDate(checkin, duration)
    setCheckout(formatDate(co))
  }, [checkin, duration])

  // Handle Click
  const handleClick = () => {
    if (!search) {
      addToast('Please enter your destination', { appearance: 'warning' })
    } else {
      const query = { checkin, checkout, duration, noGuest, noRoom, search }
      // Save cookies
      Cookies.set('timeStay', JSON.stringify(query))

      const page = Router.query.page
      const limit = Router.query.limit

      Router.push({
        pathname: '/hotels/search',
        query: {
          query: search,
          page: page ? page : 1,
          limit: limit ? limit : 10,
        },
      })
    }
  }

  const body = (
    <>
      <div className="mb-3">
        {/* Search */}
        <Input
          label={searchInput.label}
          placeholder={searchInput.placeholder}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* Check-in */}
            <Input
              label="Check-in"
              type="date"
              defaultValue={checkin}
              min={today}
              onChange={(e) => setCheckin(e.target.value)}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* Duration */}
            <Input
              label="Duration"
              placeholder="Duration"
              type="number"
              min={1}
              defaultValue={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* Check-out */}
            <Input
              label="Check-out"
              type="date"
              defaultValue={checkout}
              disabled={true}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* NO_Guest */}
            <Input
              label="Guest"
              type="number"
              defaultValue={noGuest}
              min={1}
              onChange={(e) => setNoGuest(e.target.value)}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            {/* NO_Room */}
            <Input
              label="Room"
              type="number"
              defaultValue={noRoom}
              min={1}
              onChange={(e) => setNoRoom(e.target.value)}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 align-self-end">
            <Button
              text="Search"
              block
              customClass="mb-3"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12">
          <Utils.Card body={body} shadow={true} bodyClass="p-4" />
        </div>
      </div>
    </>
  )
}

export default SearchEngine

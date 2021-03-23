/** @format */

// import Hotel from 'components/UIKit/components/Hotel'
// import Room from 'components/UIKit/components/Room'
// import SearchFeild from 'components/SearchFeild'
import SearchEngine from 'components/searchEngine'

const Home = (props) => {
  // const data = [
  //   {
  //     id: 1,
  //     name: 'Hotel de Paris',
  //     oldPrice: 56.13,
  //     price: 41.54,
  //     tag: 'Hotels',
  //     address: 'Ward 1, Dalat',
  //     review: 1235,
  //     discount: 12,
  //     src:
  //       'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  //   },
  //   {
  //     id: 2,
  //     price: 12.34,
  //     src:
  //       'https://images.unsplash.com/photo-1613929906219-a2173ecec511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
  //   },
  //   {
  //     id: 3,
  //     src:
  //       'https://images.unsplash.com/photo-1613967250754-e2145aa389c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
  //   },
  // ]

  // const rooms = {
  //   square: '15',
  //   images: [
  //     'https://images.unsplash.com/photo-1613967250754-e2145aa389c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80',
  //     'https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  //     'https://images.unsplash.com/photo-1613929906219-a2173ecec511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
  //     'https://images.unsplash.com/photo-1613929906219-a2173ecec511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
  //     'https://images.unsplash.com/photo-1613929906219-a2173ecec511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
  //     'https://images.unsplash.com/photo-1613929906219-a2173ecec511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
  //   ],
  //   rooms: [
  //     {
  //       id: 1,
  //       name: 'Superior Double Room',
  //       no_bunk: {
  //         single: 0,
  //         double: 1,
  //       },
  //       no_guest: 2,
  //       policy: ['Non-reschedulable'],
  //       facilities: ['free_wifi', 'free_breakfast'],
  //       price: 60.55,
  //       discount: 12,
  //     },
  //     {
  //       id: 2,
  //       name: 'Superior Double Room',
  //       no_bunk: {
  //         single: 0,
  //         double: 1,
  //       },
  //       no_guest: 2,
  //       policy: null,
  //       facilities: null,
  //       price: 23.55,
  //     },
  //     {
  //       id: 3,
  //       name: 'Superior Double Room',
  //       no_bunk: {
  //         single: 0,
  //         double: 1,
  //       },
  //       no_guest: 2,
  //       policy: null,
  //       facilities: null,
  //       price: 54,
  //     },
  //   ],
  // }

  // const overview = Hotel.Overview({ data: data[0] })
  // const hotels = data.map((hotel) => (
  //   <div key={hotel.id}>{Hotel.Single({ data: hotel })}</div>
  // ))
  // const roomGroup = Room.Group({ data: rooms }) // Data is rooms that are same type

  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-8">
          <SearchEngine />
        </div>
      </div>
      {/* <div className="row justify-content-center mt-5">
        <div className="col-10">{overview}</div>

        <div className="col-10">{roomGroup}</div>
        <div className="col-10">{roomGroup}</div>
        <div className="col-10">{roomGroup}</div>
        <div className="col-10">{roomGroup}</div>
      </div> */}
    </>
  )
}

export default Home

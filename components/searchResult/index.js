/** @format */

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListHotelsActions } from 'actions/hotelActions'
import { Router, useRouter } from 'next/router'
import Hotel from 'components/UIKit/components/Hotel'
// import './ListSearch.css';

const ListSearch = (props) => {
  const dispatch = useDispatch()
  const Router = useRouter()
  const query = Router.query

  const { isLoading } = useSelector((state) => state.hotelReducers)

  const [listHotels, setListHotels] = useState()
  const [loadingShow, setLoadingShow] = useState(false)
  const [nextPage, setNextPage] = useState(2)

  useEffect(() => {
    dispatch(ListHotelsActions({ query })).then((res) => {
      if (!res.error) {
        setListHotels(res.data.result)
      }
    })
  }, [])

  const handleShowMore = () => {
    setLoadingShow(true)
    setTimeout(() => {
      query.page = nextPage
      console.log(Router)

      dispatch(ListHotelsActions({ query })).then((res) => {
        if (!res.error) {
          const newList = listHotels.concat(res.data.result)
          setListHotels(newList)
        }
      })

      Router.push({
        pathname: Router.pathname,
        query,
      })
      setLoadingShow(false)
    }, 1000)

    setNextPage(nextPage + 1)
  }

  const hotels = listHotels
    ? listHotels.map((hotel) => (
        <div key={hotel._id}>{Hotel.Single({ data: hotel })}</div>
      ))
    : null

  return (
    <div>
      <div className="container form-search p-3 ">
        <p className="fs-5 search-title">Result for '{query.query}'</p>
        {isLoading ? (
          <div className="d-flex justify-content-center text-primary mb-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : null}

        <div>
          {/* {listHotels
            ? listHotels.slice(0, limit).map((item) => {
                Hotel.Single({ data: item })
              })
            : null} */}
          {hotels}

          {loadingShow ? (
            <div className="d-flex justify-content-center text-primary mb-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            ''
          )}
          <button
            onClick={(e) => handleShowMore()}
            type="button"
            className="d-grid rounded-pill btn btn-outline-primary border border-white mx-auto loadmore"
          >
            Load more
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListSearch

/** @format */

import Price from './Price'
import Utils from '../Utils'
import Rating from '../Rating'
import Link from 'next/link'

const Hotel = {
  Addition(props) {
    const data = props.data ? props.data : null
    const href = props.href ? props.href : null
    const clickable = props.clickable ? props.clickable : false

    let location = ''

    for (const field in data.location) {
      if (data.location[field]) {
        location += `${data.location[field]}, `
      }
    }

    const addition = (
      <>
        {/* Hotel name */}
        <div className="row">
          {clickable ? (
            <Link href={`/${href}`}>
              <a
                className="text-main-title mb-2 link-dark text-decoration-none stretched-link"
                // href={`/${href}`}
              >
                {data.name ? data.name : 'Hotel name is required'}
              </a>
            </Link>
          ) : (
            <p className="text-main-title mb-2 text-dark">
              {data.name ? data.name : 'Hotel name is required'}
            </p>
          )}
        </div>

        {/* Tag and Rating */}
        <div className="row gx-3 mb-2">
          <div className="col-auto align-self-center">
            <div className="d-flex">
              <Utils.Tag text={data.tag ? data.tag : 'Tag'} />
            </div>
          </div>
          <div className="col-auto align-self-center">
            <div className="d-flex">
              <Rating valueRating={data.rating} />
            </div>
          </div>
        </div>

        {/* Address */}
        {Utils.Address({
          text: location ? location : null,
        })}

        {/* Reviews */}
        {Utils.Review({
          text: data.review ? data.review : null,
        })}
      </>
    )
    return <>{addition}</>
  },

  Overview(props) {
    const data = props.data ? props.data : null

    // Hotel name, location, rating ...
    const addition = this.Addition({ data })

    const currentPrice = data.lowest_price
    // data.discount > 0
    //   ? ((100 - data.discount) / 100) * data.lowest_price
    //   : data.lowest_price

    const price = Price.Type2({
      discount: data.discount ? data.discount : null,
      currentPrice: currentPrice.toFixed(2),
    })
    const x_image = (
      <img
        src={data.images ? data.images : null}
        className="img-fluid"
        style={{
          // height: '250px',
          // width: '200px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
    )

    const overview = (
      <>
        <div className="card my-4 shadow-md border-10">
          <div className="card-body">
            {addition}

            <hr />

            {/* Images */}
            <div className="row">
              <div className="col-9">{x_image}</div>
              <div className="col-3">
                <div className="row d-grid gap-3">
                  <div className="col-12">{x_image}</div>
                  {/* </div>
                <div className="row"> */}
                  <div className="col-12">{x_image}</div>
                  {/* </div>
                <div className="row"> */}
                  <div className="col-12">{x_image}</div>
                </div>
              </div>
            </div>

            {/* Brand and Price */}
            <div className="row mt-5">
              <div className="col-lg-6 col-md-12">
                <div className="row mb-2">
                  <div className="col-auto">{Utils.Brand({})}</div>
                </div>
                <div className="row mb-2">
                  <div className="col-auto">
                    {Utils.Review({
                      text: data.review ? data.review : null,
                      customClass: 'text-dark',
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">{price}</div>
            </div>
          </div>
        </div>
      </>
    )

    return <>{overview}</>
  },

  Single(props) {
    const data = props.data ? props.data : null

    // Hotel name, location, rating ...
    const addition = this.Addition({
      data,
      clickable: true,
      href: `hotels/${data._id}`,
    })
    const currentPrice =
      data.discount > 0
        ? ((100 - data.discount) / 100) * data.lowest_price
        : data.lowest_price
    const price = Price.Type1({
      oldPrice: data.discount
        ? data.lowest_price
          ? data.lowest_price.toFixed(2)
          : null
        : null,
      currentPrice: currentPrice.toFixed(2),
    })

    const hotel = (
      <div className="card my-4 card-hover border-10">
        <div className="row g-0 justify-content-around">
          {!data ? (
            <div className="row justify-content-center">
              <div className="col-auto">No hotel</div>
            </div>
          ) : (
            <>
              {/* Thumbnail */}
              <div className="col-auto">
                <img
                  src={data.images ? data.images[0] : null}
                  className="card-img-left mh-100 mx-100"
                  style={{
                    height: '250px',
                    width: '200px',
                    objectFit: 'cover',
                    borderRadius: '10px 0 0 10px',
                  }}
                />
              </div>
              {/* Info block */}
              <div className="col p-3">{addition}</div>
              {/* Devider */}
              <div style={{ width: '1px', backgroundColor: '#c8c8c8' }}></div>
              {/* Price */}
              <div className="col-3 p-3">
                <div className="row h-100">
                  <div className="col-12">
                    {data
                      ? data.discount
                        ? Utils.Saving({
                            text: data.discount ? data.discount : null,
                          })
                        : null
                      : null}
                  </div>
                  <div className="col-12 align-self-end">{price}</div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )

    return <>{hotel}</>
  },
}

export default Hotel

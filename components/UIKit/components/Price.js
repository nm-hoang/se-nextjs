/** @format */

import Utils from '../Utils'

const Price = {
  CurrentPriceText(props) {
    const currentPrice = props.currentPrice ? props.currentPrice : null

    return (
      <>
        {currentPrice ? (
          <p className="my-0 text-main-title fw-bold text-warning d-inline">
            ${currentPrice}
          </p>
        ) : null}
      </>
    )
  },

  Type1(props) {
    const oldPrice = props.oldPrice ? props.oldPrice : null
    const currentPrice = props.currentPrice
      ? props.currentPrice
      : 'Current Price is required'
    const tax = props.tax ? props.tax : 'Taxes included'
    const customClass = props.customClass ? props.customClass : ''

    const price = this.CurrentPriceText({ currentPrice })

    return (
      <>
        <div className={'row ' + customClass}>
          <div className="col-12">
            {/* Old Price */}
            {oldPrice ? (
              <div className="row">
                <p className="my-0 text-muted text-decoration-line-through">
                  ${oldPrice}
                </p>
              </div>
            ) : null}

            {/* Current Price */}
            {currentPrice ? <div className="row">{price}</div> : null}

            {/* Taxes */}
            {tax ? (
              <div className="row">
                <p className="my-0 text-details text-muted">{tax}</p>
              </div>
            ) : null}
          </div>
        </div>
      </>
    )
  },

  Type2(props) {
    const discount = props.discount ? props.discount : null
    const currentPrice = props.currentPrice ? props.currentPrice : null

    const price = this.CurrentPriceText({ currentPrice })

    return (
      <>
        <div className="row justify-content-end">
          <div className="col-auto d-grid gap-2">
            {discount ? (
              <div className="row justify-content-end">
                <div className="col-auto">{Utils.Saving({ text: discount })}</div>
              </div>
            ) : null}
            <div className="row justify-content-end">
              <div className="col-auto">
                <p className="mb-2 text-dark text-body-18">Price/room/night starts from</p>
              </div>
            </div>
            {currentPrice ? (
              <div className="row justify-content-end">
                <div className="col-auto">{price}</div>
              </div>
            ) : null}
          </div>
        </div>
      </>
    )
  },

  Type3(props) {
    const data = props.data ? props.data : null

    const price = data
      ? this.CurrentPriceText({ currentPrice: data.price })
      : null

    const oldPrice = data
      ? data.discount
        ? (data.price * (100 - data.discount)) / 100
        : null
      : null

    return (
      <>
        {data ? (
          <div className="row d-flex align-items-end flex-column gap-2">
            {oldPrice ? (
              <div className="col-auto">
                {Utils.Text({
                  text: `$${oldPrice}`,
                  color: 'text-muted',
                  customClass: 'text-decoration-line-through m-0 d-inline',
                })}
              </div>
            ) : null}
            {price ? <div className="col-auto">{price}</div> : null}
            <div className="col-auto">
              {Utils.Text({
                text: '/room/night',
                color: 'text-muted',
                customClass: 'm-0 d-inline',
              })}
            </div>
            <div className="col-auto">
              {Utils.Text({
                text: 'Taxes included',
                color: 'text-primary',
                customClass: 'm-0 d-inline',
              })}
            </div>
          </div>
        ) : (
          <div className="row justify-content-center">
            <div className="col-6">Empty</div>
          </div>
        )}
      </>
    )
  },
}

export default Price

/** @format */

import Button from '../Button'
import Utils from '../Utils'
import Price from './Price'

const Room = {
  Group(props) {
    const data = props.data ? props.data : null
    const images = data ? (data.images ? data.images : null) : null

    console.log(data)
    // Render Overview
    const Overview = this.Overview({
      images,
      square: data.square ? data.square : null,
    })
    // Single room template
    const Room = (data) => this.Single({ data })
    // Render all rooms that are same type
    const Rooms = data
      ? data.rooms
        ? data.rooms.map((room) => <div key={room.id}>{Room(room)}</div>)
        : null
      : null

    const body = (
      <>
        {/* Fixing responsive in small size */}
        <div className="row vh-100">
          <div className="col-lg-4">{Overview}</div>
          <div className="col-lg-8 col-sm-12 h-100 overflow-auto">{Rooms}</div>
        </div>
      </>
    )

    return (
      <>
        {data ? (
          <>
            <Utils.Card
              bodyClass={'py-0'}
              body={body}
              bg="bg-dim-light"
              animation={true}
            />
          </>
        ) : null}
      </>
    )
  },

  Overview(props) {
    const images = props.images ? props.images : null
    const square = props.square ? props.square : null

    // Limited render
    images ? images.splice(3, images.length - 1) : undefined

    // Render single image
    const Image = (src) => (
      <img
        src={src ? src : null}
        className="img-fluid w-100 h-100"
        style={{
          // height: '200px',
          // width: '400px',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
      />
    )

    // Render 3 images in second row
    const secondRow = images
      ? images.map((src) => (
          <div key={src} className="col-4 h-100">
            {Image(src)}
          </div>
        ))
      : null

    const body = (
      <>
        <div className="row d-grid gap-2">
          {/* Room name */}
          <div className="col-12">
            {Utils.TextTitle({ text: 'Superior Double', textSize: 28 })}
          </div>

          {/* Images */}
          <div className="col-12 d-grid gap-3">
            <div className="row" style={{ height: '200px' }}>
              <div className="col-12 h-100">
                {images ? Image(images[0]) : null}
              </div>
            </div>
            <div className="row" style={{ height: '100px' }}>
              {secondRow}
            </div>
          </div>
          {/* Square */}
          {square ? (
            <div className="col-12">
              {Utils.Text({ text: square + ' sqm' })}
            </div>
          ) : null}
          {/* Button */}
          <div className="col-12">
            <Button
              text="Room details"
              block="true"
              isOutline="true"
              customClass="border-0"
              onClick={() => console.log('clicked')}
            />
          </div>
        </div>
      </>
    )

    return <>{images ? <Utils.Card body={body} /> : null}</>
  },

  Single(props) {
    const data = props.data ? props.data : null
    const availableRoom = props.availableRoom ? props.availableRoom : null

    // Get icon by facility - Undone yet
    const facilities = null
    // data.facilities
    //   ? data.facilities.map((facility) => (
    //       <div key={facility}>
    //         {Utils.TextWithIcon({
    //           text: facility,
    //           icon: 'cup-straw',
    //           color: 'text-primary',
    //         })}
    //       </div>
    //     ))
    //   : null
    // Get icon by policy - Undone yet
    const policy = null
    // data.policy
    //   ? data.policy.map((p) => (
    //       <div key={p}>
    //         {Utils.TextWithIcon({
    //           text: p,
    //           icon: 'calendar-x',
    //           color: 'text-muted',
    //         })}
    //       </div>
    //     ))
    //   : null

    const price = <>{data ? Price.Type3({ data }) : null}</>

    const body = (
      <>
        {data ? (
          <div className="row d-grid gap-3">
            {/* Room name */}
            <div className="row">
              {Utils.TextTitle({ text: data ? data.name : '', textSize: 24 })}
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
              <div className="col-lg-4 col-md-4 col-sm-12">
                {availableRoom
                  ? Utils.Text({
                      text: `(${availableRoom} room(s) available)`,
                      color: 'text-danger',
                      customClass: 'm-0 d-inline float-end',
                    })
                  : null}
              </div>
            </div>

            <hr />
            {/* Room details */}
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">{facilities}</div>
              <hr className="d-none d-sm-block d-md-none" />
              <div className="col-lg-4 col-md-4 col-sm-12">{policy}</div>
              <hr className="d-none d-sm-block d-md-none" />
              <div className="col-lg-4 col-md-4 col-sm-12">{price}</div>
            </div>

            {/* Book now button */}
            <div className="row justify-content-end">
              <div className="col-auto">
                <Button variant="warning" text="Book now" />
              </div>
            </div>
          </div>
        ) : null}
      </>
    )

    return (
      <>
        {data ? (
          <>
            <Utils.Card body={body} />
          </>
        ) : (
          <>Empty</>
        )}
      </>
    )
  },
}

export default Room

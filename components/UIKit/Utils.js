/** @format */

import Input from 'components/UIKit/Input'
import Button from 'components/UIKit/Button'

const Utils = {
  Tag(props) {
    const text = props.text ? props.text : 'Tag'

    return (
      <>
        <span className="badge rounded-pill border border-primary text-primary px-3 py-1 fw-medium text-details">
          {text}
        </span>
      </>
    )
  },

  Card(props) {
    const body = props.body ? props.body : 'No body'
    const shadow = props.shadow ? props.shadow : false
    const bg = props.bg ? props.bg : ''
    const space = props.space ? props.space : 'my-4'
    const bodyClass = props.bodyClass ? props.bodyClass : ''
    const animation = props.animation ? props.animation : false
    const title = props.title ? props.title : null

    return (
      <>
        <div
          className={`card ${space} ${bg} ${shadow ? 'shadow-md' : ''} ${
            animation ? 'card-hover' : ''
          } border-10`}
        >
          <div className={`card-body ${bodyClass}`}>
            {title ? <h5 className="card-title text-center">{title}</h5> : ''}
            {body}
          </div>
        </div>
      </>
    )
  },

  CardForm(props) {
    const items = props.items ? props.items : []
    const title = props.title ? props.title : null
    const customBody = props.customBody ? props.customBody : null

    const body = (
      <>
        {items.inputs.map((item) => (
          <Input
            key={item.id}
            label={item.label}
            type={item.type}
            placeholder={item.placeholder}
            onChange={item.onChange}
            name={item.label.toLowerCase()}
          />
        ))}
        <div className="row justify-content-center mt-5">
          {items.actions.map((item) => (
            <div className="col-auto" key={item.id}>
              <Button
                onClick={item.onClick}
                text={item.text}
                isOutline={item.isOutline}
                variant={item.variant}
                isLoading={item.isLoading}
              />
            </div>
          ))}
        </div>
        {customBody}
      </>
    )

    return <>{this.Card({ body, title })}</>
  },

  Text(props) {
    const text = props.text ? props.text : null
    const textSize = props.textSize === 18 ? 'text-body-18' : ''
    const color = props.color ? props.color : 'text-dark'
    const customClass = props.customClass ? props.customClass : ''

    return (
      <>
        <p className={`${textSize} ${color} ${customClass}`}>{text}</p>
      </>
    )
  },

  TextTitle(props) {
    const url = props.url ? props.url : null
    const text = props.text ? props.text : null
    const textSize = props.textSize ? props.textSize : 32
    const customClass = props.customClass
      ? props.customClass
      : `${textSize === 32 ? 'text-main-title' : 'text-title-24'} mb-2 ${
          url ? 'link-dark' : 'text-dark'
        }`

    return (
      <>
        {url ? (
          <a href={`${url}`} className={customClass}>
            {text}
          </a>
        ) : (
          <p className={customClass}>{text}</p>
        )}
      </>
    )
  },

  TextWithIcon(props) {
    const icon = props.icon ? props.icon : null
    const text = props.text ? props.text : 'Empty'
    const color = props.color ? props.color : ''
    const customClass = props.customClass ? props.customClass : ''

    return (
      <>
        <div className={`row gx-2 mb-2 ${color} ` + customClass}>
          <div className="col-auto align-content-center">
            <div className="d-flex">
              <i className={`bi bi-${icon}`}></i>
            </div>
          </div>
          <div className="col-auto align-content-center">
            <div className="d-flex">
              <p className="mb-0 pt-1 text-body-18">{text}</p>
            </div>
          </div>
        </div>
      </>
    )
  },

  Address(props) {
    const icon = props.icon ? props.icon : 'geo-alt-fill'
    const text = props.text ? props.text : 'Address is required'
    const customClass = props.customClass ? props.customClass : 'text-muted text-details'

    const address = this.TextWithIcon({
      icon,
      text,
      customClass,
    })

    return <>{address}</>
  },

  Review(props) {
    const icon = props.icon ? props.icon : 'chat-square-text-fill'
    const text = props.text ? props.text : null
    const customClass = props.customClass ? props.customClass : 'text-primary'

    const review = text ? this.TextWithIcon({
      icon,
      text: text + ' review(s)',
      customClass,
    }) : null

    return <>{review}</>
  },

  Saving(props) {
    const icon = props.icon ? props.icon : 'receipt'
    const text = props.text ? props.text : ''
    const customClass = props.customClass ? props.customClass : 'text-success'

    const saving = this.TextWithIcon({
      icon,
      text: 'Save ' + text + '%',
      customClass,
    })

    return <>{saving}</>
  },

  Brand(props) {
    const brand = props.brand ? props.brand : 'Brandy'
    const customClass = props.customClass
      ? props.customClass
      : 'navbar-brand fw-bold text-dark fst-italic fs-4'
    const url = props.url ? props.url : ''

    return (
      <a className={customClass} href={`${url}`}>
        {brand}
      </a>
    )
  },
}

// Usage

// <Utils.Tag text="Hotels" />
// {Utils.Address({})}
// {Utils.Review({})}

export default Utils

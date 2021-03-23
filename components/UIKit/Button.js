/** @format */

const Button = (props) => {
  const text = props.text ? props.text : 'Button'
  const type = props.type ? props.type : 'button'
  const block = props.block ? props.block : false
  const isOutline = props.isOutline ? props.isOutline : false
  const variant = props.variant ? props.variant : 'primary'
  const disabled = props.disabled ? props.disabled : false
  const rounded = props.rounded ? props.rounded : false
  const onClick = props.onClick ? props.onClick : null
  const customClass = props.customClass ? props.customClass : ''
  const isLoading = props.isLoading ? props.isLoading : false

  const buttonClasses = {
    btn: 'btn',
    outline: isOutline ? 'btn-outline-' + variant : '',
    variant: !isOutline ? 'btn-' + variant : '',
    disabled: disabled ? 'disabled' : '',
    rounded: rounded ? '' : 'rounded-pill',
    p: 'px-4 py-2',
  }

  const elements = Object.values(buttonClasses)
  let buttonStyle = ''

  elements.forEach((key) => {
    if (key !== '') {
      buttonStyle += ` ${key}`
    }
  })

  buttonStyle = buttonStyle.trim()

  const defaultButton = (
    <button
      onClick={onClick}
      type={type}
      className={buttonStyle + ` ${customClass}`}
      disabled={isLoading ? 'disabled' : ''}
    >
      {isLoading ? (
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
      ) : null}
      {text}
    </button>
  )

  const blockButton = <div className="d-grid">{defaultButton}</div>

  return <>{block ? blockButton : defaultButton}</>
}

// Usage

// <Button
//   text="Search"
//   variant=""
//   block={false}
//   isOutline={false}
//   disabled={false}
//   rounded={true}
// />

export default Button

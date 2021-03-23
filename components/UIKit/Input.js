/** @format */

const Input = (props) => {
  const placeholder = props.placeholder
    ? props.placeholder
    : 'Type your text here'
  const label = props.label ? props.label : placeholder
  const type = props.type ? props.type : 'text'
  const disabled = props.disabled ? 'disabled' : ''
  const onChange = props.onChange ? props.onChange : undefined
  const name = props.name ? props.name : undefined
  const defaultValue = props.defaultValue ? props.defaultValue : undefined
  const min = props.min ? props.min : undefined
  const autoComplete = props.autoComplete ? props.autoComplete : undefined
  // const isValid = props.isValid ? true : null

  return (
    <>
      <div className="mb-3">
        <label className="form-label">{label}</label>
        <input
          className={`form-control rounded-pill`}
          type={type}
          name={name}
          placeholder={placeholder}
          aria-label="Default input"
          disabled={disabled}
          onChange={onChange}
          defaultValue={defaultValue}
          min={min}
          autoComplete={autoComplete}
        />
        {/* {isValid ? (
          <div class="valid-feedback">Looks good!</div>
        ) : (
          <div id="validating" className="invalid-feedback">
            Invalid
          </div>
        )} */}
      </div>
    </>
  )
}

// Usage
// <Input type="text" disabled={false} label="Email" />
export default Input

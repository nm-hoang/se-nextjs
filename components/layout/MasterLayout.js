/** @format */

const MasterLayout = (props) => {
  return (
    <>
      <div className="container-fluid">
        {props.header ?? props.header}
        {props.content ?? props.content}
        {props.footer ?? props.footer}
      </div>
    </>
  )
}

export default MasterLayout

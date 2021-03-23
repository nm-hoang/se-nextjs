/** @format */

// import { useRouter } from 'next/router'
import Utils from 'components/UIKit/Utils'

const Navbar = (props) => {
  // const router = useRouter()
  const listItems = props.listItems ? props.listItems : []
  const navItems = listItems.map((item) => (
    <li className="nav-item" key={item.id}>
      <a className="nav-link" href={`${item.to}`}>
        {item.icon ? (
          <i
            className={`bi bi-${item.icon}`}
            style={{ fontSize: '1.5rem', paddingRight: '0.5rem' }}
          />
        ) : null}
        {item.name}
      </a>
    </li>
  ))

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          {/* Logo */}
          {Utils.Brand({})}

          {/* Collapsed */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {/* Functions - NavItems */}
            <div className="me-auto"></div>
            <ul className="navbar-nav d-flex">{navItems}</ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

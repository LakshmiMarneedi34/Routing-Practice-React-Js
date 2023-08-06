// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="wave-container">
      <img
        className="logo-icon"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
      />
      <p className="wave-text">Wave</p>
    </div>
    <ul className="wave-container">
      <li>
        <Link to="/" className="wave-text">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="wave-text">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="wave-text">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header

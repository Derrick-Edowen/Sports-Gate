import './index.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faBasketball,
  faHockeyPuck,
  faSoccerBall,
  faBaseballBatBall,
  faMedal,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink 
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faMedal} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          exact="true"
          activeclassname="active-basket"
          className="basketball-link"
          to="/Basketball"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faBasketball} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active-cricket"
          className="cricket-link"
          to="/Cricket"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faBaseballBatBall} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active-hockey"
          className="hockey-link"
          to="/Hockey"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHockeyPuck} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active-soccer"
          className="soccer-link"
          to="/Soccer"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSoccerBall} color="#4d4d4e" />
        </NavLink>
      </nav>
 
      <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
  )
}

export default Sidebar

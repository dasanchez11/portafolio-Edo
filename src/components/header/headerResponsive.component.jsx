import React from 'react'
import './headerResponsive.styles.css'
import {Link} from 'react-router-dom'

import{connect} from 'react-redux';
import{toggleMenu} from '../../redux/menu/menu.actions';

const HeaderResponsive = ({toggleMenu}) => {

  return(
  <div className="head flex-row">
    <div className="empty">

    </div>
    <div className="log">
      <Link className="logoLink" to="/">
        <img className="imagenedo"  alt='imagen-edo' src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/b790fb71-ddf5-412e-b445-35d18636b2ae/592fe2bb-4a80-421c-9b73-899686dc634b_rwc_0x0x1558x1480x4096.png?h=ef740fe188fbf769c8ff99e4a17ff68e"/>
      </Link>
    </div>
    <div className='hamburger' onClick={toggleMenu}>
      <div className ='list'>
        <i></i>
        <i></i>
        <i></i>
      </div>
    </div>
  </div>
  )};

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
})

export default connect(
  null,
  mapDispatchToProps
)(HeaderResponsive)

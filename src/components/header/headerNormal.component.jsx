import React from 'react'
import './header.styles.css'
import {Link} from 'react-router-dom';

const HeaderNormal = () =>(
  <div className="Header flex-row">
    <div className="options">
      <Link className="option" to="/">
        TRABAJO
      </Link>
      <Link className="option" to="/contact">
        CONTACTO
      </Link>
    </div>
    <Link className="logoEdo" to="/">
      <img className="imagenedo" src="https://pro2-bar-s3-cdn-cf4.myportfolio.com/b790fb71-ddf5-412e-b445-35d18636b2ae/592fe2bb-4a80-421c-9b73-899686dc634b_rwc_0x0x1558x1480x4096.png?h=ef740fe188fbf769c8ff99e4a17ff68e"/>
    </Link>
    <div className="social">
      <div className="icono" onClick={()=> {window.open('https://www.behance.net/Eduardo29')}}><img className="icon" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-behance-1.png&r=255&g=255&b=255"/></div>
      <div className="icono" onClick={()=> {window.open('http://linkedin.com/in/eduardo-s%C3%A1nchez-90a451100')}}><img className="icon" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-linkedin-1.png&r=255&g=255&b=255"/></div>
      <div className="icono" onClick={()=> {window.open('mailto:eduardosanchezr89@gmail.com')}}><img className="icon" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-email-3.png&r=255&g=255&b=255"/></div>

    </div>
  </div>
)


export default HeaderNormal

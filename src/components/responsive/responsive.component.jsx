import React from 'react';
import './responsive.styles.css';
import {Link} from 'react-router-dom';

import{connect} from 'react-redux';
import{toggleMenu} from '../../redux/menu/menu.actions';

const Responsive = ({toggleMenu}) => {

  return(
  <div className="responsivePage">
      <div className="close" onClick={toggleMenu}><i className="ex">X</i></div>
      <div className="responsiveContainer">
        <Link className="responsiveWork" to="/" onClick={toggleMenu}>TRABAJO</Link>
        <Link className="responsiveContact" to="/contact" onClick={toggleMenu}>CONTACTO</Link>
      </div>
      <div className="socialResponsive">
        <div className="responsiveIcon" onClick={()=> {window.open('https://www.behance.net/Eduardo29')}}><img className="rIcon" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-behance-1.png&r=255&g=255&b=255"/></div>
        <div className="responsiveIcon" onClick={()=> {window.open('http://linkedin.com/in/eduardo-s%C3%A1nchez-90a451100')}}><img className="rIcon" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-linkedin-1.png&r=255&g=255&b=255"/></div>
        <div className="responsiveIcon" onClick={()=> {window.open('mailto:eduardosanchezr89@gmail.com')}}><img className="rIcon" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-email-3.png&r=255&g=255&b=255"/></div>
      </div>
  </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
})
export default connect(null,mapDispatchToProps)(Responsive)

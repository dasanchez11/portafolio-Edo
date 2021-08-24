import React from 'react';
import {withRouter} from 'react-router-dom';
import './contact-form.styles.css'

const Contact = () => {
  return (
  <div className="form">
    <div className="pageHeader headerTitle">
      Contacto
    </div>
    <div className="contactForm">
      <div className="formModules">
        <form className='form-input'>
          <div className="formTitle" >Nombre</div>
          <input className = "formName" placeholder="Tu Nombre..." name="Nombre"></input>
        </form>
        <form className='form-input'>
          <div className="formTitle">Correo Electrónico</div>
          <input className = "formName" name="email" placeholder="Tu email..."></input>
        </form>
        <form className='form-input'>
          <div className="formTitle">Mensaje</div>
          <input className = "formName message" name="message" placeholder="Tu mensaje..."></input>
        </form>
        <div className="but">
          <div className="submit">
            <span className="submitText">Enviar</span>
          </div>
        </div>
      </div>
    </div>
    <div className="socialResponsiveForm">
      <div className="responsiveIcon" onClick={()=> {window.open('https://www.behance.net/Eduardo29')}}><img className="rIcon"  alt="imagen-1" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-behance-1.png&r=255&g=255&b=255"/></div>
      <div className="responsiveIcon" onClick={()=> {window.open('http://linkedin.com/in/eduardo-s%C3%A1nchez-90a451100')}}><img className="rIcon" alt="imagen-2" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-linkedin-1.png&r=255&g=255&b=255"/></div>
      <div className="responsiveIcon" onClick={()=> {window.open('mailto:eduardosanchezr89@gmail.com')}}><img className="rIcon" alt="imagen-3" src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-email-3.png&r=255&g=255&b=255"/></div>
    </div>
  </div>

)};

export default withRouter(Contact);

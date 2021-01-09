import React from 'react';

import Contact from '../../components/contact/contact-form.component';
import Header from '../../components/header/header.component';
import Responsive from '../../components/responsive/responsive.component'

import {useDispatch, useSelector} from 'react-redux';

const ContactForm = () => {
  const hidden = useSelector(state => state.menu.hidden)
  return(
    <div>
    {
       hidden ? (<div><Header/> <Contact/> </div>) : (<Responsive/>)

    }
    </div>
  )
}

export default ContactForm;

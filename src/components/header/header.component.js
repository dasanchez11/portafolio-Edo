import React ,{useState,useEffect} from 'react';
import './header.styles.css';
import HeaderNormal from './headerNormal.component';
import HeaderResponsive from './headerResponsive.component';
import GoToTop from '../goToTop/goToTop.component';

const Header = () =>{
  const [view,setView] = useState();
  useEffect(()=> {
    window.visualViewport.width<=920 ? setView(true) : setView(false)
  },[])



  useEffect(()=> {
    window.addEventListener("resize",handle)

    return () => window.removeEventListener("resize",handle)
  })

  function handle() {
  window.visualViewport.width<=920 ? setView(true) : setView(false)

  }


return (
  <div>
    { view ? (<HeaderResponsive/>) : (<div><HeaderNormal/> <GoToTop/></div>)



    }
  </div>
)}


export default Header

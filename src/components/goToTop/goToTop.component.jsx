import React from 'react';
import './goToTop.styles.css'

const GoToTop = () => {
  const scrollTop = () =>{
   window.scrollTo({top: 0, behavior: 'smooth'});
};
  return (
  <div className="button" title="Go to top" onClick={scrollTop}>&#8593;</div>
)}

export default GoToTop

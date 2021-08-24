import React from 'react';
import './project-specific.styles.css';
import { useSelector } from 'react-redux';

const ProjectSpecific = () => {
  const selector = useSelector(state => state.projectState)
  
  const {title,posts} = selector;
  
 
  return (
    <div className="specificContainer">
      <div className="titulo">
        {title}
      </div>
      <div className="posts">
        {
          <div className="projects">
            <img className="images"  alt={`${title}`} widht='80%' src={posts}/>
          </div>
        }
      </div>

    </div>
  )
}

export default ProjectSpecific;

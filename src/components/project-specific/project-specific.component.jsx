import React from 'react';
import './project-specific.styles.css';
import {withRouter} from 'react-router-dom';

const ProjectSpecific = ({location}) => {
  console.log(location)
  const {title,posts} = location.state
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

export default withRouter(ProjectSpecific);

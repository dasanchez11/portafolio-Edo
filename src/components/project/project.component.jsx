import React from 'react';
import './project.styles.css';
import {withRouter} from 'react-router-dom';

const Project = ({imageUrl, title, year,history,routeName,match,posts}) => {

  return(

    <div className='project-item' style={{
          backgroundImage: `url(${imageUrl})`
        }}
        onClick={()=> {
          history.push(`/work${match.url}${routeName}`,{title:title,
          posts:posts})
        }}
        >
    <div className="titleContainer">
      <div className = "title">
        <div className="projectName">
          {title}
        </div>
        <div className="year">
          {year}
        </div>
      </div>
      </div>
    </div>

)}

export default withRouter(Project);

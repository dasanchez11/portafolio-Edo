import React from 'react';
import './project.styles.css';
import {useHistory, withRouter, Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setStateProject } from '../../redux/state/state.actions';

const Project = ({imageUrl, title, year,routeName,match,posts}) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (e) =>{
    e.preventDefault()
    dispatch(setStateProject(title,posts))
    history.push(`/work${match.url}${routeName}`)
  }

  return(
      <div className='project-item' style={{
            backgroundImage: `url(${imageUrl})`
          }}
          onClick={handleClick}
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

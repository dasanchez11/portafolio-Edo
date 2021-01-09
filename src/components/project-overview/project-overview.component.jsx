import React,{useEffect,useState} from 'react';
// import ProjectData from './project.data';
import Project from '../project/project.component';
import './project-overview.styles.css';
import ProjectData from '../../pages/homepage/project.data';


const ProjectOverview =() => {
    const[initial,setInitial] = useState([])
    useEffect(()=>{
      setInitial(ProjectData)
    },[]);

    return (
      <div className="projectContainer">
        {

          initial.map(project => {
            return(
              <Project
                key={project.id}
                imageUrl={project.preview}
                title={project.title}
                year={project.year}
                routeName={project.routeName}
                posts={project.posts}
              />
            )
          })}


      </div>
)};


export default ProjectOverview;

// onClick={()=> history.push(`${match.url}/${project.routeName}`)}

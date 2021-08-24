import React from 'react';
import Header from '../../components/header/header.component';
import ProjectOverview from '../../components/project-overview/project-overview.component';
// import ProjectData from './project.data';
import Responsive from '../../components/responsive/responsive.component'

import{connect} from 'react-redux';



const HomePage = ({hidden}) => {
  // const[initial,setInitial] = useState([])

  // useEffect(()=>{
  //   setInitial(ProjectData)

  // },[]);

  return (
  <div className="homepage">
  { hidden ? (<div><Header/> <ProjectOverview/> </div>) : (<Responsive/>)
  }


  </div>
)}

const mapStateToProps = ({menu:{hidden}})=>({
  hidden,
});

export default connect(mapStateToProps)(HomePage);

import React from 'react';
import ProjectSpecific from '../../components/project-specific/project-specific.component';
import Header from '../../components/header/header.component';
import Responsive from '../../components/responsive/responsive.component'

import{connect} from 'react-redux';


const SpecificProject = ({hidden}) =>{
  return(
    <div className="specificProject">

      { hidden ? (<div> <Header/> <ProjectSpecific/> </div>) :(<Responsive/>)
      }


    </div>
    )}

const mapStateToProps = ({menu:{hidden}})=>({
  hidden,
});


export default connect(mapStateToProps)(SpecificProject)

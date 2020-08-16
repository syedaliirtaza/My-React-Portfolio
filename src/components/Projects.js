// import React, { Component } from 'react';
// as we don't have any class component so we can get rid of this import
// so we can now only write
import React from 'react';
import PROJECTS from '../data/projects';

// class Project extends Component {
//     render(){
//         const {title, image, description, link} = this.props.project;
//         // this is same as saying
//         // const title = this.props.project.title;
//         // const image = this.props.project.image;
//         // and so on  and this is called destructuring syntax
//         return(
//             <div style={{ display: "inline-block", width: 300, margin: 10}}>
//                 <h3>{title}</h3>
//                 <img src={image} alt='projects' style={{width:200, height: 150}}/>
//                 <p>{description}</p>
//                 <a href={link}>{link}</a>
//             </div>
//         );
//     }
// }

//now we can write it as stateless functional component where we don't have to use render method as below

const Project = (props) => {

        const {title, image, description, link} = props.project;
       

        return(
            <div style={{ display: "inline-block", width: 300, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} alt='projects' style={{width:200, height: 150}}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        );
}

// functional Component dosn't have state so we can also write this below component in to statless functional component 

// class Projects extends Component {
//     render(){
//         return(
//             <div>
//                 <h2>Highlighted Projects</h2>
//                 <div>
//                     {
//                         PROJECTS.map(PROJECT => {
//                             return(
//                               <Project key={PROJECT.id} project={PROJECT}/>   
//                             );
//                         })
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

// as  this below


const Projects = () => {
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                              <Project key={PROJECT.id} project={PROJECT}/>   
                            );
                        })
                    }
                </div>
            </div>
        );
}
export default Projects;
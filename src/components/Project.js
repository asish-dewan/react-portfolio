import React from "react";
import { projects} from './Portfolio';

const Projects = () => {
    if (!projects.length) return null
    
    return (
    <section id='projects'>
        <h2>Projects</h2>

        <div className='projects__grid'>
        {projects.map((project) => (
            <ProjectContainer key={uniqid()} project={project} />
        ))}
        </div>
    </section>
    )
}
    
    export default Projects;
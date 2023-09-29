
import { projects } from '../data';
import '../pages/css/media.css'

const Projects = () => {
    return (
        <>
        <hr className='featurette-divider my-6'/>
        <h2 className='h1-responsive font-weight-bold text-center my-3 landing-text fs-1'>
                My recent projects
        </h2>
        <div className='container position-static d-flex flex-wrap' id='projects'>
            {projects.map((project) => (
                
                <div className='card'key={project.id} >
                    <a href={project.link} target='_blank' rel='noreferrer'  style={{textDecoration: 'none', color: 'black'}}>
                        <img className='card-img-top' src={project.image} alt='img' />
                        <div className='card-body'>
                            <h5 className='card-title'>{project.title}</h5>
                            <h6 className='card-title fw-light'>{project.subtitle}</h6>
                            <p className='card-text'>{project.description}</p>
                        </div>
                    </a>
                </div>
            ))}
    </div>
        <hr className='featurette-divider'/>
    </>
    )
}

export default Projects;
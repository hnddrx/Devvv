
import { skills } from '../skill';
const Skills = () => {
    return (
        <>
       {/*  <hr className='featurette-divider'/> */}
        <h2 className='h1-responsive font-weight-bold text-center my-3 landing-text fs-1'>
          Skills
        </h2>
        <div className='justify-content-center text-center position-static d-flex flex-wrap container'  style={{ marginTop: '20px' }} >
            {skills.map((skill) => (
          <div className='skill-container' key={skill.id}>
            <img className='card-img-top' src={skill.image} alt='img' style={{   margin: '23px auto', width: '50%' }} />
            <div className='card-body'>
                <h5 className='card-title'>{skill.title}</h5>
                <p className='card-text'>{skill.description}</p>
            </div>
          </div>
          ))}
        </div>
        <hr className='featurette-divider'/>
      </>
    )
}

export default Skills;
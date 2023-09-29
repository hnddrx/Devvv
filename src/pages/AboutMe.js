
import wren from '../assets/homepage_images/Wren.jfif';
import Navbar from '../components/Navbar';
import ContactUs from '../components/ContactMe';
import Skills from '../components/Skills'
const AboutMe = () => {
    return (
        <>
        <div>
            <Navbar />
            <div className='container text-center justify-content-center' id='about'>
               {/*  <div className='fs-2 m-4 fw-bold'>About Me</div> */}
                      {/*  <img className='about-me' alt='wren' src={wren}/> */}
                <div className='d-block'>
                    <div className=' '>
                        
                      {/*   <h2 className='fw-2 text-center'>Wren Macayan</h2> */}
                        {/* <p className='paragraph'>Uplift Code Camp Student <br/>DICT Batch 1 - 2022 </p> */}
                            {/* <a className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#wren' rel='noreferrer' href='https://bit.ly/3cd3luC' target='_blank'>More Info &raquo;</a> */}
                            <div className='modal fade mt-1' id='wren' data-bs-backdrop='static' data-bs-keyboard='false' tabIndex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
                            <div className='modal-dialog about-modal'>
                                <div className='modal-content'>
                                {/* <div className='modal-header'>
                                    <span className='modal-title fs-5' id='staticBackdropLabel'>More Info</span>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div> */}
                                {/* <div className='modal-body'>
                                <br/>
                                <p>
                                I am Wren Macayan, I graduated bachelor of science in information technology at Pangasinan State University, last August 31, 2022. My passion is building and designing websites that would help us innovate.

                                I am currently working at Direcbusiness Technologies as an Technical Consultant of HR Solution Department    
                                </p>  
                                I believe that you should never stop learning and you must constantly seek for ways to advance in a world where technology is constantly being developed and we should never stop chasing our goals and be the best version of ourselves        
                                </div> */}
                                <div className='modal-footer'>
                                <a  className='link' href={require('../assets/WrenMacayan_FullStackDev_MERN_2022.pdf')} download='WrenMacayan_Resume' target='_blank' rel='noreferrer'>Download my Résumé</a>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        
        </div>
            <Skills />
             <ContactUs />
             </>
    )
};

export default AboutMe;

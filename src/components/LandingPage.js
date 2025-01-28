import { useLottie } from 'lottie-react';
import groovyWalkAnimation from '../assets/homepage_images/hero-portfolio.json';
import Projects from './Projects';
import './LandingPage.css'; // Ensure the path is correct

import { useEffect, useState } from 'react';

const LandingPage = () => {
  const options = {
    animationData: groovyWalkAnimation,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  // State for managing typing effect
  const [typedText, setTypedText] = useState("");
  const fullText = "Hello, I'm Wren – a seasoned full-stack web developer with a passion for creating powerful, seamless digital experiences. With expertise in PostgreSQL, Python, XML, Odoo, MongoDB, ReactJS, ExpressJS, and NodeJS, I bring a comprehensive skill set to the table. Let’s collaborate and turn your innovative ideas into cutting-edge solutions!";
    
  /* use effect to set type text */
  useEffect(() => {
    let index = 0;
    const typeEffect = setInterval(() => {
      setTypedText((prev) => (prev || "") + fullText[index-1]);
      index++;
      if (index === fullText.length) clearInterval(typeEffect);
    }, 50); // Adjust the speed of typing effect here

    return () => clearInterval(typeEffect); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <section id='landing'>
        <div className='px-4 py-5 my-5 text-center'>
          <div className='lottie-container d-flex justify-content-center'>
            <div className='lottie'>
              {View}
            </div>
          </div>

          <h2 className='display-6 lead fs-3'>
            Wren Macayan
          </h2>

          <h1 className='display-5 fw-bold landing-text'>
            Web Developer
          </h1>

          <div className='col-lg-5 mx-auto'>
            <p className='lead mb-3 fs-6'>
              {typedText}
            </p>

            <div className='d-grid gap-2 d-sm-flex justify-content-center'>
              <a className='View' href='#projects'>
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      <Projects id='projects' />
    </>
  );
};

export default LandingPage;

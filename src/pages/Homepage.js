import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import Skills  from '../components/Skills';
import ContactUs from '../components/ContactMe';
import Map from  '../components/Map';
//import LeafletMap from '../components/Leaflet';


import Particles from "react-particles";


const Homepage = () => {
    
    return (
        <div data-aos="fade-up">
             <Particles
                style={{ position: "absolute" }}
                height="95%"
                width="95%"
                params={{
                particles: {
                    color: {
                    value: "#000000"
                    },
                    line_linked: {
                    color: {
                        value: "#000000"
                    }
                    },
                    number: {
                    value: 50
                    },
                    size: {
                    value: 3
                    }
                }
                }}
            />
            <Navbar />
            <LandingPage />
            <Skills />
            <ContactUs />
           {/*  <Map /> */}
        </div>
    )
};

export default Homepage;
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import Skills  from '../components/Skills';
import ContactUs from '../components/ContactMe';
import Map from  '../components/Map';
//import LeafletMap from '../components/Leaflet';


const Homepage = () => {
    
    return (
        <div data-aos="fade-up">
             
            <Navbar />
            <LandingPage />
            <Skills />
            <ContactUs />
           {/*  <Map /> */}
        </div>
    )
};

export default Homepage;

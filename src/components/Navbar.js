import nav_logo from '../assets/logo/WMLogoNav.jpg';


const Navbar = () => {

  return (
    <header className='p-3 navigation mb-3'>
          <div className='d-block align-items-center justify-content-center justify-content-lg-end'>
            <a href='/' className='d-flex align-items-center mb-2 mb-lg-0'>
              <img
                className='bi me-2'
                alt='navbar-logo'
                src={nav_logo}
                width='90'
              />
            </a>           
          </div>
    </header>
  );
};

export default Navbar;

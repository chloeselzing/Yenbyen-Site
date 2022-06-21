import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpeg'



const Header = () => {
    return(
        <div className='Header'>
          <nav class="navbar navbar-expand-lg head">
          <div class="container">
          <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
     <strong>Yenbyen</strong> <br />Fellowship
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse others" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to='/'>
        <li class="nav-link" aria-current="page">Home</li>
        </Link>
        <Link to='/about'>
        <li class="nav-link">About</li>
        </Link>
        {/* <Link to='/contact'>
        <li class="nav-link">Contact Us</li>
        </Link> */}
        <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSeXNb8Y7qdfPc-PltDrDc5WLcOabUsCT4r4XG6DTVW4HeJGkQ/viewform?usp=sf_link'>
        <li class="nav-link">Join Us</li>
        </a>

      </div>
    </div> 
  </div> 
</nav> 


  </div>
    );
}

export default Header;

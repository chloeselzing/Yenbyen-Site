import './Header.css';
import students from '../Images/IMG-20211218-WA0019.jpg'
import { Link } from 'react-router-dom';


const Header = () => {
    return(
        <div className='Header'>
          <nav class="navbar navbar-expand-lg head">
          <div class="container">
          <a class="navbar-brand" href="#">
      <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"/>
     <strong>Yenbyen</strong> <br />Fellowship
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse others" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to='/'>
        <li class="nav-link" aria-current="page">Our Program</li>
        </Link>
        <Link to='/contact'>
        <li class="nav-link">Contact Us</li>
        </Link>
        <Link to='/about'>
        <li class="nav-link">About</li>
        </Link>
        <Link to='/join'>
        <li class="nav-link">Join Us</li>
        </Link>

      </div>
    </div> 
  </div> 
</nav> 
<p>
    <h1>Yenbyen Fellowship</h1>
    <h5>Every woman has a creative skill. </h5>
</p>
<button type="button" class="btn">Join Us</button><br/>

<div className='img'>
<img src={students} class="img-fluid" alt=""></img>

</div>


  </div>
    );
}

export default Header;

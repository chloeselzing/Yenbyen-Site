import becky from '../Images/becky.jpeg'
import nother from '../Images/nother.jpg'
import students from '../Images/IMG-20211218-WA0019.jpg'
import vicky from '../Images/vicky.jpeg'
import react from '../Images/react.jpeg'
import divide from '../Images/divide.jpeg'
import approach from '../Images/approach.png'

import './About.css'



const About = () => {
    return(
        <div className='About'> 
        <h1 className='text-dark mt-5 title'>Who are we ?</h1>

        <div className="wwa container mt-5">
        <div className='row'>
        <div className="col-lg-6 col-md-12 col-sm-12">
                     <p>
                     Yenbyen fellowship is a tech community that gives free three months training to young ladies to empower them with the skills needed for secure and decent future through trainings in computer programming and basic life skills. 
                     </p>
                     
                     
                     
                     <p>
                         You can register by clicking the JOIN US button.
                     </p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeXNb8Y7qdfPc-PltDrDc5WLcOabUsCT4r4XG6DTVW4HeJGkQ/viewform?usp=sf_link">
                      <button type="button" class="btn">Join Us</button><br/>
                     </a>


</div>
<div className="row col-lg-6 col-md-12 col-sm-12  background">
   
<div id="carouselExampleControls" class="carousel slide mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={students} class="d-block w-100 images" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={becky} class="d-block w-100 images" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={vicky} class="d-block w-100 images" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={nother} class="d-block w-100 images " alt="..."/>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="image mt-5">
<div className="col pic1">
    <img src={students} className='imgs dd' alt="" />
    <img src={becky} className='imgs ' alt="" />

  </div>
  <div className="col pic2">
  <img src={vicky} className='imgs ' alt="" />
  <img src={nother} className='imgs yen' alt="" />

  </div>

</div>
</div>

</div>
</div>

<div className='Program'>
<div className="container">

            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col-lg-4 ">
    <div class="card">
      <img src={react} class="cmage card-img-top" alt="..."/>
      <div class="card-body cd">
        <h5 class="card-title">Challenge</h5>
        <p class="card-text">Women represent only 3% of technology graduates globally. With Skills for Their Future, Yenbyen fellowship works to empower girls and young women by helping them gain next-generation digital, coding, and entrepreneurship skills.
</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4">
    <div class="card">
      <img src={approach} class="cmage card-img-top" alt="..."/>
      <div class="card-body cd">
        <h5 class="card-title">Approach</h5>
        <p class="card-text">Yenbyen Fellowship partners with local organizations and government in Plateau State to help girls learn digital skills, schools deliver quality education and local companies offer work opportunities.
</p>
      </div>
    </div>
  </div>
  <div class="col-lg-4 ">
    <div class="card">
      <img src={divide} class="cmage card-img-top" alt="..."/>
      <div class="card-body cd">
        <h5 class="card-title">Narrowing the divide</h5>
        <p class="card-text">By 2030, more than half of all young people will lack the basic skills necessary for the workforce. Girls and young women will be particularly left behind.

A gender divide persists that means education isn't always available to young females, and they suffer as a result of stereotypical attitudes towards a female’s place in society. Generations of women have missed out on the options available to their male peers. 

Yenbyen Fellowship partners with local community organizations to work on bridging this divide.</p>
      </div>
    </div>
  </div>
  </div>
</div>

        </div>



        </div>
    );
}
export default About;
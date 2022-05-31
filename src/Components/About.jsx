import dd from '../Images/dd.jpg'
import emma from '../Images/emma.jpg'
import yen from '../Images/yen.jpeg'
import nother from '../Images/nother.jpg'
import './About.css'



const About = () => {
    return(
        <div className='About'> 
        <h1 className='text-dark mt-5 title'>Who are we ?</h1>

        <div className="wwa container mt-5">
        <div className='row'>
        <div className="col-6-lg col-12-md col-sm-12 ">
        <p>
                     Yenbyen fellowship is a community that gives a free three months training to young ladies on tech related skills. 
                     </p>
                     <p>
                     Within these three months, these ladies are taught the basics of programming, how to upskill themselves and other tech and life related skills.
                     </p>
                     <p>
                    This initiative started up in the year 2021 and to God's glory it has been a beautiful one.
                     </p>
                     <p>
                         You could register to join us by clicking the JOIN US button below and afterwards filling the required information at the appropriate places
                     </p>
                     <button type="button" class="btn">Join Us</button><br/>

</div>
<div className="row col-6-lg col-12-md col-sm-12 background">

  <div className="col-6 down">
    <img src={dd} className='imgs' alt="" />
    <img src={emma} className='imgs' alt="" />

  </div>
  <div className="col-6">
  <img src={nother} className='imgs' alt="" />
  <img src={yen} className='imgs' alt="" />

  </div>
</div>

</div>
</div>

<div className='Program'>
            <h1 className=' text-dark'>Girls who know us say</h1>
            <div className='ppl container'>
            <div className="one container">"Yenbyen is a community  that trains ladies to upskill themselves in different tech fields"</div>
            <div className="two container">you</div>
            <div className="three container">we</div>

            </div>
        </div>



        </div>
    );
}
export default About;
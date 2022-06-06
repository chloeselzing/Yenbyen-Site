import students from '../Images/IMG-20211218-WA0019.jpg'

import './Home.css';

const Home = () => {
    return(
        <div className='Home'>
        <div className='homemain '>
          <div className='hometop'>
          <p>
    <h1>Yenbyen Fellowship</h1>
    {/* <h5>Every woman has a creative skill. </h5> */}
    <h5>Ladies in tech and basic life skills</h5>
</p>
<button type="button" class="btn">Join Us</button><br/>

<div className='img'>
<img src={students} class="img-fluid" alt=""></img>

</div>
          </div>
          
         

 </div>

        </div>

    );
}

export default Home;


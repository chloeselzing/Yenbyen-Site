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
    <h5> <em>Raising young ladies in tech</em> </h5>
</p>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSeXNb8Y7qdfPc-PltDrDc5WLcOabUsCT4r4XG6DTVW4HeJGkQ/viewform?usp=sf_link">
<button type="button" class="btn">Join Us</button><br/>
</a>
<div className='img'>
<img src={students} class="img-fluid" alt=""></img>

</div>
          </div>
          
         

 </div>

        </div>

    );
}

export default Home;


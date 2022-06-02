import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
       <div className='box container'>
         <form>
          
           <br />
           <label for="formGroupExampleInput" class="form-label">Name:</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Name"/>

  <label for="formGroupExampleInput" class="form-label">Email:</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your Email"/>

  <label for="formGroupExampleInput" class="form-label">Comment:</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter your comment"></input>

         </form>

         <button type="button" className="btn last ">Submit</button><br/>

       </div>
    </div>
  )
}

export default Contact
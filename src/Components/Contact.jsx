import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='Contact'>
       <div className='box container'>
         <form>
          
           <br />
           <label for="formGroupExampleInput" class="form-label">Name:</label>
  <input type="text" class="form-control" name='name' placeholder="Enter your Name"/><br />

  <label for="formGroupExampleInput" class="form-label">Email:</label>
  <input type="email" class="form-control" name='email' placeholder="Enter your Email"/><br />

  <label for="formGroupExampleInput" class="form-label">Message:</label>
  <input type="text" class="form-control" name='text' /><br />

         </form>

         <button type="button" className="btn last ">Submit</button><br/>

       </div>
    </div>
  )
}

export default Contact
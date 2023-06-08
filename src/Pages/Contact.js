import React, { useState } from 'react';
import { validateEmail } from "../utils/helpers";
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }
    
    // if (!name) {
    //   setErrorMessage('Please enter a name');
    //   return;
    // }

    setName('');
    setEmail('');
    setMessage('');
  };

  
  return (
    <div>
      <h1 className='title'> Contact Me </h1>
      <form className="contact-form">
        
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" value={name} name='name' onChange={handleInputChange} />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" name='email' onChange={handleInputChange} value={email} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" rows="5" value={message} name="message" onChange={handleInputChange} type="text" />   
        </div>

        <button type="button" className='button' onClick={handleFormSubmit}>Submit</button>
      </form>
      
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

      <p className='bottom-text'> Currently the email form does not work because this portfolio is not connected to a back-end yet. Please refer to my email or phone number in the pdf of my resume on the resume page to contact me. </p>
      <p className='thank-you'> Thank you! </p>  
    </div>
  )
}

export default Contact
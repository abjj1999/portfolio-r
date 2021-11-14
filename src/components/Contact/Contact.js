import React, {useState} from 'react'
import './contact.css';
function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          setFormState({ [e.target.name]: e.target.value });
          console.log('Form', formState);
        }
    };
    
    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = e.target.value;
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
    };    
    
    return (
        <section className = 'main-c'>
            <h1>Contact Me</h1>
            <div className=" card card--container">

            <form id="contact-form" className=' m-2'>
            <div className = 'form-group w-75' >
                <label htmlFor="name">Name:</label>
                <input type="text" className='form-control' name="name" onBlur={handleChange} defaultValue={name}/>
            </div>
            <div className = 'form-group w-75'>
                <label htmlFor="email">Email address:</label>
                <input className='form-control' type="email" name="email" onBlur={handleChange} defaultValue={email}/>
            </div>
            <div className = ' w-75'>
                <label htmlFor="message">Message:</label>
                <textarea className='form-control mb-2' name="message" rows="5" onBlur={handleChange}  defaultValue={message}/>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type='submit' className='btn btn-primary' onClick = {handleSubmit}>Submit</button>
            </form>
            </div>
        </section>
    )
}

export default Contact

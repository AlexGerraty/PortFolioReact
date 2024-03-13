import React, { useState } from 'react';
import styles from './Contact.module.css'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError(true);
    } else if (!email) {
      setEmailError(true);
    } else {
      // Send the form data to the server
      console.log({ name, email, message });
      // Reset the form fields
      setName('');
      setEmail('');
      setMessage('');
      setNameError(false);
      setEmailError(false);
    }
  };

  return (
    <div className={styles.contact}>
      <h2>Contact Me!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p>Name is required</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p>Email is required</p>}

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
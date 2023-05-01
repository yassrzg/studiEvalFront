import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {

    const [state, handleSubmit] = useForm("xjvdlyye");
      if (state.succeeded) {
          return <p className='alert alert-success position-absolute bottom-0 end-0'>Thanks for joining!</p>;
      }

  return (
     <form onSubmit={handleSubmit} className='form'>
        <div className='form-content'>
      <label htmlFor="email" className='text-center'>Email Address</label>
      <input
        id="email"
        type="email" 
        name="email"
        className='email-text'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label className='text-center'>Your Message</label>
      <textarea
        id="message"
        name="message"
        className='message-text'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='button' type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
  );
}

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import useForm from './useForm';
// import { StyledSlideMenu, CloseMenuIcon, FaGithubIcon } from '../Styled/';

init(process.env.REACT_APP_USER_ID);
const Contact = () => {
const formState = useRef();
const { handleChange, values, errors } = useForm();
const [formResult , setResult] = useState({formResult: ''});
const [formData, setFormData] = useState({
firstname: '',
lastname: '',
company: '',
phone: '',
email: '',
message: '',
});

const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, formState.current,
`${process.env.REACT_APP_USER_ID}`)
.then((result) => {
// console.log('formResult', formState);
(result.text === 'OK') ? setResult(result.text): alert('Message failed to send');
}, (error) => {
console.log(error.text);
});
};

const successHTML = <div className="success">
  <h5 id="detail-header">Thank you.</h5>Your message has been sent. I will get back to you as soon as possible.
</div>;

const formHTML = (
<>
  <h5 id="detail-header">Interested in working with me?</h5>
  <p className="margin-bottom">Send me a message.</p>
  <div className="connect-form">
    <form id="email" ref={formState} onSubmit={sendEmail}>
      <div>
        <input className="input-box" type="text" name="firstname" onChange={setFormData} placeholder={'First Name:'} />
        <input className="input-box margin-left" type="text" name="lastname" placeholder="Last Name:" onChange={setFormData} />
      </div>
      <div>
        <input className="input-box" type="text" name="company" placeholder="Company" onChange={setFormData} />
        <input className="input-box margin-left" type="email" name="email" placeholder="Email Address:"
          onChange={setFormData} />
      </div>
      <div>
        <input className="subject" type="text" name="phone" placeholder="phone - optional" onChange={setFormData} />
      </div>
      <div>
        <textarea className="comment-area" name="message" placeholder="Message: " onChange={setFormData}></textarea>
      </div>

      <div>
        <button className="connect-submit" type="submit" value={formData}>
          Send
        </button>
      </div>
    </form>
  </div>
</>
);
return (
<>
  <div className="con-h">
    {formResult === 'OK' ? successHTML : formHTML}
  </div>
</>
);
}

export default Contact;

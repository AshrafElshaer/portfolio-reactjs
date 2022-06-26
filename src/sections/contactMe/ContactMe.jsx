import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import "./contactMe.scss";

import { IoIosSend } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import ScrollIcon from "../../components/scrollIcon/ScrollIcon";

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  let sectionRef = useRef(null);
  let titleRef = useRef(null);
  let subTitleRef = useRef(null);
  let iconRef = useRef(null);
  let formRef = useRef(null);
  let nameRef = useRef(null);
  let emailRef = useRef(null);
  let subjectRef = useRef(null);
  let messageRef = useRef(null);
  let btnRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const subjectHandler = (e) => {
    setSubject(e.target.value);
  };
  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitMessage = (e) => {
    e.preventDefault();

    const params = {
      name,
      email,
      subject,
      message,
    };

    emailjs.send(
      "service_yvfjzli",
      "template_yy9bxny",
      params,
      "7l6cQR3Wju2ZMkMC8"
    );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  useEffect(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef,
        start: "7% center",
      },
    });
    tl
            .fromTo(
              titleRef,
              { y: -20 },
              { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
            )
            .fromTo(
              [subTitleRef, iconRef],
              { y: 20 },
              { y: 0, opacity: 1, stagger: 0.3 }
            ).to(
              formRef, 
              {opacity : 1, duration : 0.4  }
            )
            .fromTo(
              [nameRef,emailRef,subjectRef,messageRef,btnRef], 
              { x : -150 },
              { x : 0 , opacity : 1, duration : 1 , stagger: 0.3 }
            )

   
  }, []);

  return (
    <footer className='contact' ref={(el) => (sectionRef = el)} id='contact'>
      <div className='contact__text'>
        <h1 className='contact__text--title' ref={(el) => (titleRef = el)}>
          Have a project idea to collaborate with?
        </h1>
        <h3
          className='contact__text--subTitle'
          ref={(el) => (subTitleRef = el)}>
          Let's get in touch .
        </h3>
        <ScrollIcon forwardRef={(el) => (iconRef = el)} />
      </div>
      <div className='contact__me' ref={(el) => (formRef = el)}>
        <form className='contact__me__form' onSubmit={submitMessage}>
          <div ref={(el) => (nameRef = el)}>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              id='name'
              placeholder='Full Name'
              value={name}
              onChange={nameHandler}
              required
            />
          </div>
          <div ref={(el) => (emailRef = el)}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              placeholder='Example@gmail.com'
              value={email}
              onChange={emailHandler}
              required
            />
          </div>
          <div ref={(el) => (subjectRef = el)}>
            <label htmlFor='subject'>Subject</label>
            <input
              type='text'
              id='subject'
              placeholder='Subject (Optional)'
              onChange={subjectHandler}
            />
          </div>
          <div ref={(el) => (messageRef = el)}>
            <label>Message</label>
            <textarea
              name='message'
              rows='7'
              placeholder='Your Message Here'
              value={message}
              onChange={messageHandler}
              required></textarea>
          </div>

          <button className='btn' type='submit' ref={(el) => (btnRef = el)}>
            <IoIosSend className='btn--icon' />
            <BsCheckLg className='btn--check' />
            <span className='btn--text'>Send Message</span>
          </button>
        </form>
      </div>
      <div className="contact__copyRight">Copyright © 2022 <span>Ashraf Elshaer</span> - All Rights Reserved.</div>
    </footer>
  );
};

export default ContactMe;

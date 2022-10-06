import React, { useRef, useEffect, useState } from "react";
import emailjs from "emailjs-com";

import { IoIosSend } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
// import ScrollIcon from "../../components/scrollIcon/ScrollIcon";

import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  let sectionRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef,
        start: "7% center",
      },
    });
  }, []);

  return (
    <footer className='contact' ref={(el) => (sectionRef = el)} id='contact'>
      <h2 className='contact__title'>Get In Touch </h2>
      <h1 className='contact__subtitle'>
        I love to hear from you. Whether you have a question or just want to
        chat about design, tech & art — shoot me a message.{" "}
      </h1>
    </footer>
  );
};

export default ContactMe;

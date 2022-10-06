import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { Link } from "../../components";
import { socialMediaLinks } from "../../assets/constants";
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
      <div>
        <nav className='contact__nav'>
          <ul>
            <li><h3>Social</h3></li>
            {socialMediaLinks.map((link) => {
              return (
                <li
                  key={link.title}
                  className='contact__nav__item'
                  >
                  <a
                    href={link.path}
                    rel='noreferrer noopener'
                    className='contact__nav__item--link'>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link
          text='Say Hello !'
          btnType='primary'
          link='mailto:ashrafelshaer98@icloud.com'
        />
      </div>
      <div className="copyRight">
      Copyright © 2022  <span>Ashraf Elshaer</span>  - All Rights Reserved.
      </div>
    </footer>
  );
};

export default ContactMe;

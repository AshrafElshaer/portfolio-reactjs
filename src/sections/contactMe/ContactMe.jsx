import { useRef, useEffect } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { Link } from "../../components";
import { socialMediaLinks } from "../../assets/constants";
gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const sectionRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const navRef = useRef([]);

  const addToNavRef = (el) => {
    if (el && !navRef.current.includes(el)) navRef.current.push(el);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "25% center",
     
      },
    });

    tl.from(titleRef.current, { y: -20, alpha: 0, duration: 0.4 })
      .from(subtitleRef.current, { y: 20, alpha: 0, duration: 0.4 }, "-=50%")
      .from(navRef.current, { y: 20, alpha: 0, duration: 0.6, stagger: 0.2 });
  }, []);

  return (
    <footer className='contact' ref={sectionRef} id='contact'>
      <h2 className='contact__title' ref={titleRef}>
        Get In Touch{" "}
      </h2>
      <h1 className='contact__subtitle' ref={subtitleRef}>
        I love to hear from you. Whether you have a question or just want to
        chat about tech — shoot me a message.
      </h1>
      <div>
        <nav className='contact__nav'>
          <ul>
            <li>
              <h3 ref={addToNavRef}>Reach me on !</h3>
            </li>
            {socialMediaLinks.map((link) => {
              return (
                <li
                  key={link.title}
                  className='contact__nav__item'
                  ref={addToNavRef}>
                  <a
                    href={link.path}
                    rel='noreferrer noopener'
                    className='contact__nav__item--link'
                    target='_blank'>
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <p ref={addToNavRef}> Or </p>
        <Link
          text='Say Hello !'
          btnType='primary'
          link='mailto:ashrafelshaer98@icloud.com'
          refer={addToNavRef}
        />
      </div>
      <div className='copyRight' ref={addToNavRef}>
        Copyright © 2022 <strong>Ashraf Elshaer</strong> - All Rights Reserved.
      </div>
    </footer>
  );
};

export default ContactMe;

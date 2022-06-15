import Navbar from "../../components/navbar/Navbar";
import Button from "../../components/button/Button";
import headerSVG from "../../images/header.svg";
import "./header.scss";

import { useRef, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
import { Power3, gsap, TweenMax } from "gsap";
const Header = () => {
  let headerRef = useRef(null);
  let navbarRef = useRef(null);
  let socialNavbarRef = useRef(null);
  let greetRef = useRef(null);
  let nameRef = useRef(null);
  let jobRef = useRef(null);
  let btnRef = useRef(null);
  let imgRef = useRef(null);

  useEffect(() => {
    TweenMax.to(headerRef, { css: { visibility: "visible" } });

    gsap.fromTo(
      navbarRef,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.6, delay: 0.1 }
    );


    gsap.fromTo(
      socialNavbarRef,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.6, delay: 0.2 }
    );
    gsap.fromTo(
      greetRef,
      {
        css: {
          transform: "rotate(-45deg)",
          transformOrigin: "left bottom",
          opacity: 0,
        },
      },
      { rotation: 0, duration: 1.2, opacity: 1, delay: 0.6, ease: "elastic" }
    );
    gsap.fromTo(
      nameRef,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: Power3.easeInOut }
    );
    gsap.fromTo(
      jobRef,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }
    );
    gsap.fromTo(
      btnRef,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: Power3.easeInOut }
    );

    gsap.fromTo(
      imgRef,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }
    );
  }, []);

  return (
    <header className='header' id='home' ref={(el) => (headerRef = el)}>
      <Navbar />
      <div className='header__container'>
        <div className='header-left'>
          <nav>
            <ul
              className='header__container__social-navbar'
              ref={(el) => (socialNavbarRef = el)}>
              <li className='header__container__social-navbar__list'>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  <FaLinkedin />
                </a>
              </li>
              <li className='header__container__social-navbar__list'>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  <FaGithub />
                </a>
              </li>
              <li className='header__container__social-navbar__list'>
                <a href='http://' target='_blank' rel='noopener noreferrer'>
                  <FaTwitterSquare />
                </a>
              </li>
            </ul>
          </nav>
          <div className='header__container__text'>
            <h1 className='header__container__text--title'>
              <span ref={(el) => (greetRef = el)}>Hello , I'm </span>
              <span ref={(el) => (nameRef = el)}>Ashraf Elshaer</span>
              <span ref={(el) => (jobRef = el)}>frontEnd web Developer</span>
            </h1>
            <div ref={(el) => (btnRef = el)}>
              <Button link='#' text='view my resume' />
            </div>
          </div>
        </div>
        <div className='header-right'>
          <img src={headerSVG} alt='header svg' ref={(el) => (imgRef = el)} />
        </div>
      </div>
    </header>
  );
};

export default Header;

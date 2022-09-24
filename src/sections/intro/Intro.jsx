import { useRef, useEffect } from "react";

import headerSVG from "../../images/header.svg";
import { Link } from "../../components";

import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Power3, gsap, TweenMax } from "gsap";
import { introTitle, socialMediaLinks } from "../../assets/constants";

const intro = () => {
  // let headerRef = useRef(null);
  // let socialNavbarRef = useRef(null);

  // let greetRef = useRef(null);
  // let nameRef = useRef(null);
  // let jobRef = useRef(null);
  // let btnRef = useRef(null);
  // let imgRef = useRef(null);
  // let iconRef = useRef(null)

  // useEffect(() => {
  //   TweenMax.to(headerRef, { css: { visibility: "visible" } });

  //   gsap.fromTo(
  //     socialNavbarRef,
  //     { x: -50, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 1.6, ease: Power3.easeInOut, delay: 0.2 }
  //   );
  //   gsap.fromTo(
  //     greetRef,
  //     {
  //       css: {
  //         transform: "rotate(-45deg)",
  //         transformOrigin: "left bottom",
  //         opacity: 0,
  //       },
  //     },
  //     { rotation: 0, duration: 1.2, opacity: 1, delay: 0.6, ease: "elastic" }
  //   );
  //   gsap.fromTo(
  //     nameRef,
  //     { y: 20, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: Power3.easeInOut }
  //   );
  //   gsap.fromTo(
  //     jobRef,
  //     { y: 20, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }
  //   );
  //   gsap.fromTo(
  //     btnRef,
  //     { y: 20, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: Power3.easeInOut }
  //   );

  //   gsap.fromTo(
  //     imgRef,
  //     { x: 100, opacity: 0 },
  //     { x: 0, opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }
  //   );
  //   gsap.fromTo(
  //     iconRef,
  //     { y: -30},
  //     { x: 0, opacity: 1, duration: 0.6, delay: 2, ease: Power3.easeInOut }
  //   );
  // }, []);

  return (
    <header className='intro' id='intro'>
      <div className='intro__text'>
        <p>Hello World I'm</p>
        <h1 className='intro__text--title'>
          {introTitle.map((word) => (
            <div key={word}>
              <span>{word}</span>
            </div>
          ))}
        </h1>
      </div>
      <nav className='intro__nav'>
        <ul>
          {socialMediaLinks.map((link) => {
            return (
              <li key={link.title} className='intro__nav__item'>
                <a
                  href={link.path}
                  rrel='noreferrer noopener'
                  className='intro__nav__item--link'>
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className='intro__circles'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default intro;

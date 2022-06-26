import { useRef, useEffect } from "react";
import "./header.scss";

import Navbar from "../../components/navbar/Navbar";
import Link from "../../components/link/Link";
import headerSVG from "../../images/header.svg";

import { BsFileEarmarkPdfFill } from 'react-icons/bs'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { AiFillInstagram } from 'react-icons/ai'
import { Power3, gsap, TweenMax } from "gsap";
import ScrollIcon from "../../components/scrollIcon/ScrollIcon";

const Header = () => {
  let headerRef = useRef(null);
  let socialNavbarRef = useRef(null);

  let greetRef = useRef(null);
  let nameRef = useRef(null);
  let jobRef = useRef(null);
  let btnRef = useRef(null);
  let imgRef = useRef(null);
  let iconRef = useRef(null)

  useEffect(() => {
    TweenMax.to(headerRef, { css: { visibility: "visible" } });

    gsap.fromTo(
      socialNavbarRef, 
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.6, ease: Power3.easeInOut, delay: 0.2 }
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
    gsap.fromTo(
      iconRef,
      { y: -30},
      { x: 0, opacity: 1, duration: 0.6, delay: 2, ease: Power3.easeInOut }
    );
  }, []);

  return (
    <header className='header' id='home' ref={(el) => (headerRef = el)}>
      <Navbar />
      <div className='header__container'>
        <div className='header-left'>
          <nav ref={(el) => (socialNavbarRef = el)}>
            <ul className='header__container__social-navbar'>
              <li
                className='header__container__social-navbar__list'
                >
                <a href='https://www.linkedin.com/in/ashrafelshaer/' target='_blank' rel='noopener noreferrer' aria-label="linkedin profile">
                  <FaLinkedin />
                </a>
              </li>
              <li
                className='header__container__social-navbar__list'
                >
                <a href='https://github.com/AshrafElshaer' target='_blank' rel='noopener noreferrer'  aria-label="github profile">
                  <FaGithub />
                </a>
              </li>
              <li
                className='header__container__social-navbar__list'
               >
                <a href='https://www.instagram.com/ashraf.elsha3er/' target='_blank' rel='noopener noreferrer' aria-label="instagram profile">
                  <AiFillInstagram />
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
              <Link link='https://drive.google.com/file/d/12b_lRrlHKFtorTi7fiDjpQ1v_iEFs_mn/view' text='view my resume' icon={<BsFileEarmarkPdfFill/>} />
            </div>
          </div>
        </div>
        <div className='header-right'>
          <img src={headerSVG} alt='header svg' ref={(el) => (imgRef = el)} />
        </div>
      </div>
      <ScrollIcon  forwardRef={el => iconRef = el}/>
    </header>
  );
};

export default Header;

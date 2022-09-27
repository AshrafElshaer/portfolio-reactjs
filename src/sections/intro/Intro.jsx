import { useRef, useEffect } from "react";

import headerSVG from "../../images/header.svg";
import { Link } from "../../components";

import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Power3, gsap } from "gsap";
import { introTitle, socialMediaLinks } from "../../assets/constants";

const Intro = () => {
  const tl = gsap.timeline();
  const headerRef = useRef(null);
  const greetRef = useRef(null);
  const titleRefs = useRef([]);
  const introNavRef = useRef([]);
  const circlesRef = useRef([]);

  const addToTitleRef = (el) => {
    if (el && !titleRefs.current.includes(el)) titleRefs.current.push(el);
  };
  const addIntroNavRef = (el) => {
    if (el && !introNavRef.current.includes(el)) introNavRef.current.push(el);
  };
  const addCirclesRef = (el) => {
    if (el && !circlesRef.current.includes(el)) circlesRef.current.push(el);
  };

  useEffect(() => {
    console.log(circlesRef.current);
    gsap.to(headerRef.current, { alpha: 1 });
    tl.from(greetRef.current, { y: -50, alpha: 0, duration: 1, delay: 1 })
      .from(
        titleRefs.current,
        {
          alpha: 0,
          y: 25,
          rotate: 15,
          duration: 1,
          stagger: 0.5,
          ease: "back.out(2.5)",
        },
        "-=25%"
      )
      .from(
        introNavRef.current,
        { y: 100, alpha: 0, duration: 0.6, stagger: 0.2 },
        "-=25%"
      )
      .to(
        circlesRef.current,
        { alpha: 1, duration: 0.4, stagger: 0.2 },
        "-=25%"
      ).to(
        circlesRef.current,
        { alpha: 0.3, duration: 0.4, stagger: 0.2 },
        "-=35%"
      );
  }, [tl]);
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
    <header className='intro' id='intro' ref={headerRef}>
      <div className='intro__text'>
        <p ref={greetRef}>Hey there ! , I'm</p>
        <h1 className='intro__text--title'>
          {introTitle.map((word) => (
            <div key={word}>
              <span ref={addToTitleRef}>{word}</span>
            </div>
          ))}
        </h1>
      </div>
      <nav className='intro__nav'>
        <ul>
          {socialMediaLinks.map((link) => {
            return (
              <li
                key={link.title}
                className='intro__nav__item'
                ref={addIntroNavRef}>
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
        <span ref={addCirclesRef}></span>
        <span ref={addCirclesRef}></span>
        <span ref={addCirclesRef}></span>
        <span ref={addCirclesRef}></span>
        <span ref={addCirclesRef}></span>
      </div>
    </header>
  );
};

export default Intro;

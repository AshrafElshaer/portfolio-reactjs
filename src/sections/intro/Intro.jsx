import { useRef, useEffect } from "react";
import { Power3, gsap } from "gsap";
import { introTitle, socialMediaLinks } from "../../assets/constants";
import { BsArrowDown } from "react-icons/bs";

const Intro = () => {
  const tl = gsap.timeline();
  const headerRef = useRef();
  const greetRef = useRef();
  const titleRefs = useRef([]);
  const introNavRef = useRef([]);
  const circlesRef = useRef([]);
  const scrollIconRef = useRef();

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
        {
          y: 100,
          alpha: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: Power3.easeInOut,
        },
        "-=25%"
      )
      .to(
        circlesRef.current,
        { alpha: 1, duration: 0.4, stagger: 0.2 },
        "-=25%"
      )
      .to(
        circlesRef.current,
        { alpha: 0.3, duration: 0.4, stagger: 0.2 },
        "-=35%"
      )
      .from(scrollIconRef.current, { y: 50, alpha: 0, duration: 0.5 }, "-=55%");
  }, [tl]);

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
                  rel='noreferrer noopener'
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
      <div className='intro__ScrollIcon' ref={scrollIconRef}>
        <a
          href='#about'
          className='intro__ScrollIcon--link'
          rel='noopener noreferrer'
          aria-label='scroll down'>
          <BsArrowDown />
        </a>
      </div>
    </header>
  );
};

export default Intro;

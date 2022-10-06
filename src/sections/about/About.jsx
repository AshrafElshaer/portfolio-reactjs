import { useRef, useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Accordion } from "../../components";
import { technologies, aboutMe } from "../../assets/constants";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const windowSize = useWindowSize();
  const [selectedAccrodion, setSelectedAccordion] = useState(0);
  const [animationTrigger, setAnimationTrigger] = useState(
    windowSize.width <= 768 ? "20% center" : "35% center"
  );
  const { about, mission, vision } = aboutMe;
  const sectionRef = useRef();
  const sectionTitleRef = useRef();
  const skillsBoxRef = useRef();
  const accordionRef = useRef([]);

  let contentTitleRef = useRef(null);
  let descRef1 = useRef(null);
  let descRef2 = useRef(null);
  let descRef3 = useRef(null);

  const toggleAccordio = (idx) => {
    if (selectedAccrodion === idx) return setSelectedAccordion(null);

    setSelectedAccordion(idx);
  };
  const addAccordionToRef = (el) => {
    if (el && !accordionRef.current.includes(el)) accordionRef.current.push(el);
  };

  useEffect(() => {
    setAnimationTrigger(windowSize.width <= 768 ? "20% center" : "35% center");
  }, [windowSize]);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: animationTrigger,
      },
    });
    tl.fromTo(
      sectionTitleRef.current,
      { x: -50 },
      { x: 0, opacity: 1, duration: 0.8, delay: 0 }
    )
      .fromTo(
        skillsBoxRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=60%"
      )
      .from(
        accordionRef.current,
        { y: 50, alpha: 0, duration: 0.8, stagger: 0.4 },
        "-=60%"
      )
      .fromTo(
        contentTitleRef.current,
        { y: -30 },
        { y: 0, opacity: 1, duration: 0.6 },
        "<50%"
      )
      .fromTo(
        [descRef1, descRef2, descRef3],
        { y: 30 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.25 },
        "<50%"
      );
  }, []);

  return (
    <section className='about' id='about' ref={sectionRef}>
      <div className='about__left'>
        <h2 className='about__left--title' ref={sectionTitleRef}>
          About Me
        </h2>
        <div className='about__left__skills' ref={skillsBoxRef}>
          <div className='about__left__skills--title'>
            <h3>Technologies I working with </h3>
          </div>
          {technologies.map((tech, idx) => (
            <Accordion
              tech={tech}
              idx={idx}
              key={idx}
              onToggle={toggleAccordio}
              selectedAccrodion={selectedAccrodion}
              reffer={addAccordionToRef}
            />
          ))}
        </div>
      </div>
      <div className='about__right'>
        <h2 className='about__right--title' ref={contentTitleRef}>
          Learn a little bit about me...
        </h2>
        <div className='about__right__content'>
          <p
            className='about__right__content--description'
            ref={(el) => (descRef1 = el)}>
            {about}
          </p>
          <div
            className='about__right__content--description'
            ref={(el) => (descRef2 = el)}>
            <h3>- {mission.title}</h3>
            {mission.text}
          </div>

          <div
            className='about__right__content--description'
            ref={(el) => (descRef3 = el)}>
            <h3>- {vision.title}</h3>
            {vision.text}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;

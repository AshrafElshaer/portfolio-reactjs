import { useRef, useEffect , useState } from "react";
import SkillCard from "../../components/skillCard/SkillCard";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3Full,
  DiReact,
  DiGitBranch,
  DiSass,
  DiJavascript1,
} from "react-icons/di";
import { Accordion } from "../../components";
import { technologies } from "../../assets/constants";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [selectedAccrodion , setSelectedAccordion] = useState(null)
  let sectionRef = useRef(null);
  let sectionTitleRef = useRef(null);
  let skillsBoxRef = useRef(null);

  let contentTitleRef = useRef(null);
  let descRef1 = useRef(null);
  let descRef2 = useRef(null);
  let descRef3 = useRef(null);

  const toggleAccordio = idx => {
    if(selectedAccrodion === idx) return setSelectedAccordion(null);

    setSelectedAccordion(idx)
  }

  // const scrollTriggerStart = () =>(
  //   window.innerWidth <= 768 ? '20% center' : "35% center")

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef,
  //       start: scrollTriggerStart(),
  //       onEnter: () => {
  //         tl
  //           .fromTo(
  //             sectionTitleRef,
  //             { x: -50 },
  //             { x: 0, opacity: 1, duration: 0.8, delay: 0 }
  //           )
  //           .fromTo(
  //             skillsBoxRef,
  //             { y: 100, opacity: 0 },
  //             { y: 0, opacity: 1, duration: 0.8 },
  //             "-=60%"
  //           ).fromTo(
  //               contentTitleRef,
  //               { y: -30 },
  //               { y: 0, opacity: 1, duration: 0.6 },
  //               "<50%"
  //             ).fromTo(
  //               [descRef1, descRef2, descRef3],
  //               { y: 30 },
  //               { y: 0, opacity: 1, duration: 0.5, stagger: 0.25 },
  //               "<50%"
  //             );
  //       },

  //       onLeaveBack: () => {
  //         tl
  //           .to(sectionTitleRef, { x: -50, opacity: 0 })
  //           .to(skillsBoxRef, { y: 100, opacity: 0 }, "-=60%")
  //           .to(
  //               contentTitleRef,
  //               { y: -30 , opacity: 0 },

  //               "<50%"
  //             ).to(
  //               [descRef1, descRef2, descRef3],

  //               { y: 0, opacity: 0, duration: 0.5, stagger: 0.25 },
  //               "<50%"
  //             );
  //       },

  //     },
  //   });

  // });

  return (
    <section className='about' id='about' ref={(el) => (sectionRef = el)}>
      <div className='about__left'>
        <h2 className='about__left--title' ref={(el) => (sectionTitleRef = el)}>
          About Me
        </h2>
        <div className='about__left__skills' ref={(el) => (skillsBoxRef = el)}>
          <div className='about__left__skills--title'>
            <h3>Technologies I working with </h3>
          </div>
          {technologies.map((tech, idx) => (
            <Accordion tech={tech} idx={idx} key={idx} onToggle={toggleAccordio} selectedAccrodion={selectedAccrodion}/>
          ))}
        </div>
      </div>
      <div className='about__right'>
        <h2
          className='about__right--title'
          ref={(el) => (contentTitleRef = el)}>
          Learn a little bit about me...
        </h2>
        <div className='about__right__content'>
          <p
            className='about__right__content--description'
            ref={(el) => (descRef1 = el)}>
            My friends like to call me Ash , a self-taught junior web developer
            focused on creating interactive digital experiences on the web ,
            based in The United States.
          </p>
          <p
            className='about__right__content--description'
            ref={(el) => (descRef2 = el)}>
            November 2021 is when I began to self-teach web development Started
            with the basics of HTML, CSS and then dived into the world of
            JavaScript.
          </p>

          <p
            className='about__right__content--description'
            ref={(el) => (descRef3 = el)}>
            From the moment I produced Hello World" in the console of my first
            application, I knew I was hooked into the world of software
            development.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

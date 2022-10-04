import ProjectShowCase from "../../components/projectShowCase/ProjectShowCase";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, CSSRulePlugin } from "gsap/all";
import { projects } from "../../assets/constants";
gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

const Portfolio = () => {
  const titleRef = useRef([]);
  const addToTitleRef = (el) => {
    if (el && !titleRef.current.includes(el)) titleRef.current.push(el);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 60%",
        onEnter: () => {
          tl.to(CSSRulePlugin.getRule(".portfolio__title::before"), {
            cssRule: { width: "0%" },
            duration: 1,
          }).to(CSSRulePlugin.getRule(".portfolio__subtitle::before"), {
            cssRule: { width: "0%" },
            duration: 1,
          },'-=50%');
        },
      },
    });
  }, []);

  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='portfolio__title' ref={addToTitleRef}>
        Recent Works
      </h2>
      <h1 className='portfolio__subtitle'>
        Here are some of my favorite projects I have done lately. Feel free to
        check them out.
      </h1>
      {projects.map((project) => (
        <ProjectShowCase key={project.title} project={project} />
      ))}
    </section>
  );
};

export default Portfolio;

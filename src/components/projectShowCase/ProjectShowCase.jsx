import { FaGithub } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Link } from "../index";
// import amoreDesktop from "../../assets/portfolio-images/mediamodifier_image(2).png";
// import amoreMobil from "../../assets/portfolio-images/mediamodifier_image-removebg-preview.png";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowCase = ({ project }) => {
  const windowSize = useWindowSize();
  const sectionRef = useRef();
  const imgsRef = useRef([]);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const stackRef = useRef();
  const stackListRef = useRef([]);
  const btnsRef = useRef();

  const addToImgsRef = (el) => {
    if (el && !imgsRef.current.includes(el)) imgsRef.current.push(el);
  };
  const addToStackListRef = (el) => {
    if (el && !stackListRef.current.includes(el)) stackListRef.current.push(el);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: windowSize.width <= 768 ? "top 20%" : "center 60%",
      },
    });
    tl.fromTo(
      imgsRef.current,
      { y: -50, alpha: 0 },
      { y: 0, alpha: 1, duration: 0.6, stagger: 0.2 }
    )
      .fromTo(
        titleRef.current,
        { x: -50, alpha: 0 },
        { x: 0, alpha: 1, duration: 0.4 }, '-=20%'
      )
      .fromTo(
        descriptionRef.current,
        { y: 30, alpha: 0 },
        { y: 0, alpha: 1, duration: 0.6 },
        "-=50%"
      )
      .fromTo(
        stackRef.current,
        { y: 30, alpha: 0 },
        { y: 0, alpha: 1, duration: 0.6 },
        "-=50%"
      )
      .fromTo(
        stackListRef.current,
        { y: 30, alpha: 0 },
        { y: 0, alpha: 1, duration: 0.6, stagger: 0.2 },
        "-=50%"
      )
      .fromTo(
        btnsRef.current,
        { y: 30, alpha: 0 },
        { y: 0, alpha: 1, duration: 0.4},
        "-=50%"
      )
  }, []);

  return (
    <div className='showCase' ref={sectionRef}>
      <div className='showCase__content'>
        <h2 className='showCase__content--title' ref={titleRef}>
          {project.title}
        </h2>
        <p className='showCase__content--description' ref={descriptionRef}>
          {project.subTitle}
        </p>
        <ul className='showCase__content__stack' ref={stackRef}>
          <h4 className='showCase__content__stack--title'>Tech Stack</h4>
          {project.techStack.map((tech) => (
            <li
              key={tech}
              ref={addToStackListRef}
              className='showCase__content__stack--list'>
              {tech}
            </li>
          ))}
        </ul>
        <div className='showCase__content__btns' ref={btnsRef}>
          <Link
            btnType='primary'
            text='GitHub'
            icon={<FaGithub />}
            link={project.github}
          />
          <Link
            btnType='outline'
            text='Live'
            icon={<MdRemoveRedEye />}
            link={project.live}
          />
          
        </div>
      </div>
      <div className='showCase__imgs'>
        {project.images.map((img, idx) => (
          <img key={idx} src={img} alt={img} ref={addToImgsRef} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowCase;

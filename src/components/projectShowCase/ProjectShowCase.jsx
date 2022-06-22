import "./projectShowCase.scss";
import Link from "../link/Link";
import { FaGithub } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef ,useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectShowCase = ({ project }) => {
  let sectionRef = useRef(null);
  let imgsRef = useRef(null);
  let titleRef = useRef(null);
  let subTittleRef = useRef(null);
  let btnsRef = useRef(null);
  const windowWidth = useState(window.innerWidth);
  

  
  
  let scrollTriggerStart = () =>(
    windowWidth <= 768 ? "top 5%"  : "center center" )
   
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger : titleRef,
        start: 'top center',
        
        onEnter: ()=>{
          tl.fromTo([titleRef , subTittleRef , btnsRef],{ y : -20 },{ y : 0 , opacity: 1, duration: 1 , stagger: 0.3  })
        },
        onLeaveBack: ()=>{
          tl.to([titleRef , subTittleRef , btnsRef],{y : -20 , opacity : 0 , stagger: 0.3 })
        },
      }
    });
  
    
    tl.fromTo(imgsRef, { y: 300, opacity: 0 }, { y: 0, opacity: 1 , scrollTrigger:{
      trigger: sectionRef,
      start: scrollTriggerStart(), 
      end: "+=500px", 
      pin: true, 
      pinSpacing: false,
      scrub: 0.5,

    }});
  });

  return (
    <div className='showCase' ref={(el) => (sectionRef = el)}>
      <div className='portfolio__content'>
        <h3 className='portfolio__content--title'  ref={(el) => (titleRef = el)} >{project.title}</h3>
        <p className='portfolio__content--subTitle' ref={(el) => (subTittleRef = el)}>{project.subTitle}</p>
        <div className='portfolio__content--btns'ref={(el) => (btnsRef = el)} >
          <Link link={project.github} text={"Github"} icon={<FaGithub />} />
          <Link link={project.live} text={"Live"} icon={<MdRemoveRedEye />} />
        </div>
      </div>
      <div className='portfolio__images' ref={(el) => (imgsRef = el)}>
        {project.images.map((src) => (
          <img src={src} alt='project screenshot' key={src} />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowCase;

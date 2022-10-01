import ProjectShowCase from "../../components/projectShowCase/ProjectShowCase";
import Images from "../../assets/images";

import { useRef , useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);



const projects = [
  
  {
    title: "Clock App",
    subTitle: "A fully function clock app provide Worldwide local Time  , CRUD alarms , timer , stop watch  .",
    images: [Images.clockApp1,Images.clockApp2,Images.clockApp3,Images.clockApp4],
    github: "https://github.com/AshrafElshaer/clock-app",
    live: "https://ashrafelshaer.github.io/clock-app/",
  },
  {
    title: "Todo app",
    subTitle: "add , edit , delete , check & uncheck todos .",
    images: [Images.todoApp1, Images.todoApp2,Images.todoApp3],
    github: "https://github.com/AshrafElshaer/todo-app",
    live: "https://ashrafelshaer.github.io/todo-app/",
  },
  {
    title: "amore hookah & cafe landing page",
    subTitle: "a landing page for a local hookah & coffee lounge. ( React Js , SCSS) ",
    images: [Images.amore1, Images.amore2],
    github: "https://github.com/AshrafElshaer/amore-lounge-reactJS",
    live: "https://ashrafelshaer.github.io/amore-lounge-reactJS/",
  },
];


const Portfolio = () => {

  let titleRef = useRef(null);


  useEffect(()=>{

    const tl = gsap.timeline({
      scrollTrigger : {
      trigger : titleRef,
      start: 'top 60%',
      
      onEnter: ()=>{
        tl.fromTo(titleRef,{ y : -30 },{ y : 0 , opacity: 1, duration: 1 ,   delay : 0.2})
      },
      onLeaveBack: ()=>{
        tl.to(titleRef, {y : -30 , opacity : 0})
      },
      }
    })
  },[])

  return (
    <section className='portfolio' id='portfolio'>
      <h2 className='portfolio__title' ref={el => titleRef = el}>Latest Work's</h2>
      {
        projects.map(project => (
          <ProjectShowCase key={project.title} project={project}/>
        ))
      }
    </section>
  );
};

export default Portfolio;

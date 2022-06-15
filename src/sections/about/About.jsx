import SkillCard from "../../components/skillCard/SkillCard";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact, DiGitBranch, DiSass } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

import "./about.scss";

const About = () => {
  const skills = [
    {
      id: 1,
      icon: <AiFillHtml5 />,
      title: "HTML5",
    },
    {
      id: 2,
      icon: <DiCss3 />,
      title: "CSS3",
    },
    {
      id: 3,
      icon: <SiJavascript />,
      title: "JS",
    },
    {
      id: 4,
      icon: <DiReact />,
      title: "REACT JS",
    },
    {
      id: 5,
      icon: <DiGitBranch />,
      title: "GIT",
    },
    {
      id: 6,
      icon: <DiSass />,
      title: "SCSS",
    },
  ];
  return (
    <section className='about' id='about'>
      <div className='about__left'>
        <h1 className='about__title'>About Me</h1>
        <div className='about__skills'>
          {skills.map(({ title, icon, id }) => (
            <SkillCard icon={icon} title={title} key={id} />
          ))}
        </div>
      </div>
      <div className="about__right">
          
      </div>
    </section>
  );
};
export default About;

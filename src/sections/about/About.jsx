import SkillCard from "../../components/skillCard/SkillCard"
import { AiFillHtml5 } from 'react-icons/ai'
import {  DiCss3  } from 'react-icons/di'

import './about.scss';

const About = () => {

    const skills = [
        {
            icon: <AiFillHtml5 />,
            title : "HTML5"
        }
        ,
        {
            icon: <DiCss3 />,
            title : "CSS3"
        }
    ]
  return (
    <section className="about" id="about">
        <h1 className="about__title">About Me</h1>
        <div className="about__skills">
            {
            skills.map(({title , icon })  => <SkillCard icon={icon} title={title} key={title} />)}
            {/* <SkillCard icon={<AiFillHtml5 />} title='HTML 5'/> */}
        </div>
    </section>
  )
}

export default About
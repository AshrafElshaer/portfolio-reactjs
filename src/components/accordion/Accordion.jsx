import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import SkillCard from "../skillCard/SkillCard";

const Accordion = ({ tech , onToggle , idx , selectedAccrodion , reffer}) => {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => setisOpen(!isOpen);
  return (
    <div className={`accordion ${ selectedAccrodion === idx && "open"}`} ref={reffer}>
      <h5 className='accordion__title' onClick={()=> onToggle(idx)}>
        {tech.title} <AiFillCaretDown />
      </h5>
      <div className='accordion__menu'>
        {tech.skills.map((obj, idx) => (
          <SkillCard obj={obj} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;

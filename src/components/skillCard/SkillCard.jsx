import React from "react";

const SkillCard = ({ icon, title }) => {
  return (
    <div className='about__skills__item'>
      <div className='about__skills__item--icon'>{icon}</div>
      <p className='about__skills__item--title'>{title}</p>
    </div>
  );
};

export default SkillCard;

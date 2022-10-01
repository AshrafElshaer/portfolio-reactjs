import React from "react";

const SkillCard = ({ obj }) => {
  const { icon, name, color } = obj;
  return (
    <div className='skillCard'>
      <div className='skillCard--icon' style={{ color: `${color}` }}>
        {icon}
      </div>
      <p className='skillCard--title'>{name}</p>
    </div>
  );
};

export default SkillCard;

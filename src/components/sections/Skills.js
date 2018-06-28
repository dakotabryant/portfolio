import React from 'react';
import SkillsTitle from '../../assets/titles/skills-title.svg';
import skillsIcons from '../../content/skills-icons';

const Skills = () => {
  return (
    <div className="section skills">
      <img src={SkillsTitle} alt="" className="title-image" />
      <div className="skill-icons">
        {skillsIcons.map(icon => {
          return (
            <div className="icon" key={icon.text}>
              <img src={icon.path} alt={icon.text} />
              <p>{icon.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

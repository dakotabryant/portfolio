import React from 'react';
import SkillsTitle from '../../assets/titles/skills-title.svg';
import skillsIcons from '../../content/skills-icons';

const Skills = () => {
  return (
    <div className="section skills">
      <object data={SkillsTitle} type="image/svg+xml" className="title-image" />
      <div className="skill-icons">
        {skillsIcons.map(icon => {
          return (
            <div className="icon" key={icon.text}>
              <object data={icon.path} type="image/svg+xml" />
              <p>{icon.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

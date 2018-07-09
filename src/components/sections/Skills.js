import React from 'react';
import SkillsTitle from '../../assets/titles/skills-title.svg';
import skillsIcons from '../../content/skills-icons';

const Skills = () => {
  return (
    <div className="section skills">
      <div className="content-wrapper">
        <object
          aria-label="Skills"
          data={SkillsTitle}
          type="image/svg+xml"
          className="title-image"
        />
        <div className="skill-icons">
          {skillsIcons.map(icon => {
            return (
              <div className="icon" key={icon.text}>
                <object
                  aria-label={icon.path}
                  data={icon.path}
                  type="image/svg+xml"
                />
                <p>{icon.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;

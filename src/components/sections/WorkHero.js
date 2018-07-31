import React from 'react';
import WorkHorizontal from '../../assets/titles/work-title.svg';
const WorkHero = () => {
  return (
    <React.Fragment>
      <object
        aria-label="Work"
        data={WorkHorizontal}
        type="image/svg+xml"
        className="hero-image"
      />
    </React.Fragment>
  );
};

export default WorkHero;

import React from 'react';
import WorkTitle from '../../assets/titles/work-vertical.svg';

const Work = () => {
  return (
    <div className="work section">
      <object data={WorkTitle} type="image/svg+xml" className="title-image" />
    </div>
  );
};

export default Work;

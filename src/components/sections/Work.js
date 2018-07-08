import React from 'react';
import WorkTitle from '../../assets/titles/work-vertical.svg';
import workTiles from '../../content/workTiles';

const Work = () => {
  return (
    <div className="work section">
      <div className="content-wrapper">
        <object data={WorkTitle} type="image/svg+xml" className="title-image" />
        <div className="tile-wrapper">
          {workTiles.map(site => {
            return (
              <div
                className="tile"
                style={{ backgroundImage: `url(${site.image})` }}
              />
            );
          })}
          <button>See all Projects</button>
        </div>
      </div>
    </div>
  );
};

export default Work;

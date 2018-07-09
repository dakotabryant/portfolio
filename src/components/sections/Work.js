import React from 'react';
import WorkTitle from '../../assets/titles/work-vertical.svg';
import workTiles from '../../content/workTiles';

const Work = () => {
  return (
    <div className="work section">
      <div className="separator full" />
      <div className="separator full bottom" />
      <div className="content-wrapper">
        <object
          aria-label="Work"
          data={WorkTitle}
          type="image/svg+xml"
          className="title-image"
        />
        <div className="tile-wrapper">
          {workTiles.map(site => {
            return (
              <div
                key={site.hoverText}
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

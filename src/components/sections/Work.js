import React from 'react';
import WorkTitle from '../../assets/titles/work-vertical.svg';
import workTiles from '../../content/workTiles';
import { Link } from 'gatsby';

const Work = () => {
  return (
    <section className="work section">
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
          <Link to="/work">
            <button>More Info</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;

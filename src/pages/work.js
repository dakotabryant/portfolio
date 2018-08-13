import React from 'react';
import Layout from '../components/layout';
import WorkHero from '../components/sections/WorkHero';
import workTiles from '../content/workTiles';
import Tile from '../components/Tile';

const Work = () => {
  return (
    <Layout className="work-page">
      <section className="work-page">
        <WorkHero />
        <div className="content-wrapper">
          <p>
            My capabilities range from one-off website solutions, to complex
            native applications for mobile devices. I love being able to dig in
            to any technology stack and come up with creative and impactful
            solutions.
          </p>
          <p>
            While I can't publicly share most of the projects I've worked on,
            I'm happy to share a private portfolio on request.
          </p>
          <div className="tile-wrapper">
            {workTiles.map(work => {
              return (
                <Tile
                  image={work.image}
                  hoverText={work.hoverText}
                  key={work.hoverText}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;

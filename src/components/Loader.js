import React from 'react';
import LoaderImage from '../assets/images/loader.gif';

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderImage} alt="" />
    </div>
  );
};

export default Loader;

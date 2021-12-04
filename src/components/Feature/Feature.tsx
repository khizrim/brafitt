import React from 'react';

import './Feature.css';

const Feature = ({ icon, caption }: FeatureProps) => {
  return (
    <div className="feature">
      <img className="feature__icon" src={icon} alt="" />
      <p className="feature__caption">{caption}</p>
    </div>
  );
};

type FeatureProps = {
  icon: string;
  caption: string;
};

export default Feature;

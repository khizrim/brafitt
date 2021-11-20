import React from 'react';

const Feature = ({ icon, caption }: FeatureProps) => {
  return (
    <div className="feature">
      {icon}
      <p className="feature__caption">{caption}</p>
    </div>
  );
};

type FeatureProps = {
  icon: JSX.Element;
  caption: string;
};

export default Feature;

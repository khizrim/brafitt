import React from 'react';

import Section from '../Section/Section';
import Feature from '../Feature/Feature';

import './Features.css';

const Features = ({ data }: FeaturesProps) => {
  const { title, subtitle, features } = data;

  return <Section sectionTitle="features">
    <h2 className="features__title">{title}</h2>
    {subtitle && <p className="features__subtitle">{subtitle}</p>}
    <div className="features__list">
      {features.map((feature) => {
        return (
          <Feature
            key={feature._id}
            icon={feature.icon}
            caption={feature.caption}
          />
        );
      })}
    </div>
  </Section>;
};

type FeaturesProps = {
  data: {
    title: string;
    subtitle?: string;
    features: Array<{
      _id: number;
      icon: string;
      caption: string;
    }>;
  };
};

export default Features;

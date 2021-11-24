import React from 'react';

import './Section.css';

const Section = ({ sectionTitle, children }: SectionProps) => {
  return (
    <section className={`${sectionTitle} section`}>
      <div className={`${sectionTitle + '__container'} section__container`}>{children}</div>
    </section>
  );
};

type SectionProps = {
  sectionTitle: string;
  children: React.ReactNode;
};

export default Section;

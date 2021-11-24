import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Section from '../Section/Section';
import Button from '../Button/Button';

import './About.css';

const About = () => {
  return (
    <Section sectionTitle="about">
      <div className="about__content">
        <div className="about__heading">
          <h2 className="about__brafitter-name">Ниса Сантемирова</h2>
          <p className="about__brafitter-about">Сертифицированный брафиттер</p>
        </div>
        <p className="about__text">
          Определит точные размеры, диагностирует проблемы, связанные с посадкой
          и порекомендует конкретные модели, которые подходят под ваши размеры,
          форму и потребности.
        </p>
        <div className="about__cta">
          <Button cta={'Записаться на консультацию'} />
          <Button cta={'Читать отзывы'} isSecondary />
        </div>
      </div>
      <div className="about__image">
        <StaticImage
          src="../../images/brafitter.webp"
          alt={'Ниса Сантемирова'}
        />
      </div>
    </Section>
  );
};

export default About;

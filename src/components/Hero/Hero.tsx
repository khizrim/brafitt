import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Section from '../Section/Section';

import './Hero.css';

const Hero = () => {
  return (
    <Section sectionTitle="hero">
      <h1 className="hero__title">
        Знаем всё о том, как должен сидеть
        <span className="hero__title-highlight"> бюстгальтер</span>
      </h1>
      <div className="hero__bottom">
        <p className="hero__text">
          Первый в Дагестане брафиттинг-сервис, который помогает правильно
          подобрать бельё, избавиться от проблем, связанных с неправильной
          посадкой и учит, как избежать ошибок в дальнейшем.
        </p>
        <div className="hero__image-container">
          <StaticImage
            className="hero__image"
            src="../../images/hero.png"
            alt="Первый брафиттинг в Дагестане"
          />
        </div>
        <StaticImage
          className="hero__ellipse"
          src="../../images/ellipse.png"
          alt="Эллипс"
        />
      </div>
    </Section>
  );
};

export default Hero;

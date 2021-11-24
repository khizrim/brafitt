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
            src="../../images/hero.webp"
            alt="Первый брафиттинг в Дагестане"
          />
        </div>
        <svg
          className="hero__ellipse"
          width="686"
          height="345"
          viewBox="0 0 686 345"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M609.593 3.07812C645.593 13.5781 675.093 36.5781 682.219 81.4955C686.889 110.933 672.35 144.502 642.552 178.052C612.78 211.571 568.105 243.618 513.423 270.545C458.758 297.464 396.347 318.155 333.164 330.297C269.975 342.44 208.574 345.54 155.816 339.295C103.012 333.044 61.1896 317.709 34.7557 295.276C8.45592 272.956 -1.64362 244.462 5.30745 212.757C12.3038 180.846 36.3701 146.647 75.3085 114.073"
            stroke="#006C43"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </Section>
  );
};

export default Hero;

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { CheckCircleIcon } from '@heroicons/react/outline';

import Section from '../Section/Section';

import './Issues.css';

const Issues = () => {
  return (
    <Section sectionTitle='issues'>
      <div className="issues__content">
        <h2 className="issues__title">Какие проблемы решает брафиттинг</h2>
        <ul className="issues__list">
          <li className="issues__item">
            <CheckCircleIcon className="issues__bullet" />
            <p className="issues__text">
              Вы не знаете своего точного размера и вам во всём неудобно
            </p>
          </li>
          <li className="issues__item">
            <CheckCircleIcon className="issues__bullet" />
            <p className="issues__text">
              У вас необычный размер и такой сложно найти в обычном магазине
            </p>
          </li>
          <li className="issues__item">
            <CheckCircleIcon className="issues__bullet" />
            <p className="issues__text">
              Вы беременны, у вас повышена чувствительность и бельё доставляет
              неудобства
            </p>
          </li>
          <li className="issues__item">
            <CheckCircleIcon className="issues__bullet" />
            <p className="issues__text">
              У вас недавно появился малыш и вы боитесь потерять форму после
              родов
            </p>
          </li>
          <li className="issues__item">
            <CheckCircleIcon className="issues__bullet" />
            <p className="issues__text">
              Постоянные боли в спине и в области шеи из-за неправильной
              нагрузки
            </p>
          </li>
        </ul>
      </div>
      <div className="issues__image">
        <StaticImage
          src="../../images/issues.png"
          alt="Какие проблемы решает брафиттинг"
        />
      </div>
    </Section>
  );
};

export default Issues;

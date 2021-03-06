import React from 'react';

import Section from '../Section/Section';

import { firstStep, secondStep, thirdStep, fourthStep, fifthStep } from '../../utils/constants';

import './Steps.css';

const Steps = () => {
  return (
    <Section sectionTitle="steps">
      <h2 className="steps__title">Как проходит консультация</h2>
      <ul className="steps__list">
        <li className="steps__item">
          <p className="steps__counter">1</p>
          <img className="steps__icon" src={firstStep} alt="Шаг 1" />
          <p className="steps__text">
            Ниса узнает, что вы любите, как вы выбирали бельё раньше,
            какой размер носили и как себя в нём чувствовали.
          </p>
        </li>
        <li className="steps__item">
          <p className="steps__counter">2</p>
          <img className="steps__icon" src={secondStep} alt="Шаг 2" />
          <p className="steps__text">
            Проанализирует, правильно ли оно подобрано и расскажет, как улучшить
            посадку и исправить ошибки.
          </p>
        </li>
        <li className="steps__item">
          <p className="steps__counter">3</p>
          <img className="steps__icon" src={thirdStep} alt="Шаг 3" />
          <p className="steps__text">
            Снимет ваши точные размеры. Во время процедуры брафиттер будет
            в перчатках и маске, а измерительная лента будет продезинфицирована.
          </p>
        </li>
        <li className="steps__item">
          <p className="steps__counter">4</p>
          <img className="steps__icon" src={fourthStep} alt="Шаг 4" />
          <p className="steps__text">
            В 90% случаев размер приходится менять. Брафиттер укажет ваш точный
            размер и расскажет, на что обращать внимание при выборе.
          </p>
        </li>
        <li className="steps__item">
          <p className="steps__counter">5</p>
          <img className="steps__icon" src={fifthStep} alt="Шаг 5" />
          <p className="steps__text">
            Даст советы по уходу за бельём, как его стирать, сушить и хранить,
            чтобы оно дольше прослужило.
          </p>
        </li>
      </ul>
    </Section>
  );
};

export default Steps;

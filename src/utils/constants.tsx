import firstStep from '../images/steps/step-1.svg';
import secondStep from '../images/steps/step-2.svg';
import thirdStep from '../images/steps/step-3.svg';
import fourthStep from '../images/steps/step-4.svg';
import fifthStep from '../images/steps/step-5.svg';


import firstBenefit from '../images/benefits/benefits-1.svg';
import secondBenefit from '../images/benefits/benefits-2.svg';
import thirdBenefit from '../images/benefits/benefits-3.svg';

export const BENEFITS = {
  title: 'Что вы получаете',
  features: [
    {
      _id: 1,
      icon: firstBenefit,
      caption: 'Время один на один с личным экспертом по подбору белья.',
    },
    {
      _id: 2,
      icon: secondBenefit,
      caption:
        'Идеальную посадку белья. Вернём деньги если что-то не понравится',
    },
    {
      _id: 3,
      icon: thirdBenefit,
      caption:
        'Комфортную процедуру. Во время процедуры можно оставаться в одежде',
    },
  ],
};

import firstSafety from '../images/safety/safety-1.svg';
import secondSafety from '../images/safety/safety-2.svg';
import thirdSafety from '../images/safety/safety-3.svg';

export const SAFETY = {
  title: 'Соблюдаем все меры безопасности',
  features: [
    {
      _id: 1,
      icon: firstSafety,
      caption: 'Обрабатываем и убираем примерочные после каждого приёма',
    },
    {
      _id: 2,
      icon: secondSafety,
      caption:
        'Брафиттер работает в маске и перчатках. Дезинфицируем измерительную ленту',
    },
    {
      _id: 3,
      icon: thirdSafety,
      caption:
        'Предложим вам санитайзер, чтобы вы могли продезинфицировать руки',
    },
  ],
};

export {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep
}

import React from 'react';

import { StaticImage } from 'gatsby-plugin-image';

export const BENEFITS = {
  title: 'Что вы получаете',
  features: [
    {
      _id: 1,
      icon: (
        <StaticImage
          src="../images/benefits/benefits-1.png"
          alt={''}
          height={96}
        />
      ),
      caption: 'Время один на один с личным экспертом по подбору белья.',
    },
    {
      _id: 2,
      icon: (
        <StaticImage
          src="../images/benefits/benefits-2.png"
          alt={''}
          height={96}
        />
      ),
      caption:
        'Идеальную посадку белья. Вернём деньги если что-то не понравится',
    },
    {
      _id: 3,
      icon: (
        <StaticImage
          src="../images/benefits/benefits-3.png"
          alt={''}
          height={96}
        />
      ),
      caption:
        'Комфортную процедуру. Во время процедуры можно оставаться в одежде',
    },
  ],
};


export const SAFETY = {
  title: 'Соблюдаем все меры безопасности',
  features: [
    {
      _id: 1,
      icon: (
        <StaticImage
          src="../images/safety/safety-1.png"
          alt={''}
          height={96}
        />
      ),
      caption: 'Обрабатываем и убираем примерочные после каждого приёма',
    },
    {
      _id: 2,
      icon: (
        <StaticImage
          src="../images/safety/safety-2.png"
          alt={''}
          height={96}
        />
      ),
      caption:
        'Брафиттер работает в маске и перчатках. Дезинфицируем измерительную ленту',
    },
    {
      _id: 3,
      icon: (
        <StaticImage
          src="../images/safety/safety-3.png"
          alt={''}
          height={96}
        />
      ),
      caption:
        'Предложим вам санитайзер, чтобы вы могли продезинфицировать руки',
    },
  ],
};

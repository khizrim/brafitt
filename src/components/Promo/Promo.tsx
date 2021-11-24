import React from 'react';

import Section from '../Section/Section';
import Button from '../Button/Button';

import './Promo.css';

const Promo = () => {
  return (
    <Section sectionTitle="promo">
      <div className="promo__content">
        <h2 className="promo__title">Не выбирайте между сексуальностью и комфортом</h2>
        <p className="promo__subtitle">
          Перейдите по ссылке и выберите удобное время для консультации.
          Она займёт не больше часа.
        </p>
        <Button cta="Записаться на консультацию" />
      </div>
    </Section>
  );
};

export default Promo;

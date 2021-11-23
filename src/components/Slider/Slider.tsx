import React from 'react';
import SwiperCore, { Mousewheel, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImage } from 'gatsby-plugin-image';

import Section from '../Section/Section';

SwiperCore.use([Navigation, Pagination, Mousewheel]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';

import './Slider.css';

const Slider = () => {
  return (
    <Section sectionTitle={'slider'}>
      <h2 className="slider__title">Сравните посадку до и после</h2>
      <Swiper mousewheel pagination className="slider__frame">
        <SwiperSlide className="slider__slide">
          <StaticImage
            className="slider__image"
            src={'../../images/slider/before-1.jpg'}
            alt={'До'}
          />
          <StaticImage
            className="slider__image"
            src={'../../images/slider/after-1.jpg'}
            alt={'После'}
          />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <StaticImage
            className="slider__image"
            src={'../../images/slider/before-2.jpg'}
            alt={'До'}
          />
          <StaticImage
            className="slider__image"
            src={'../../images/slider/after-2.jpg'}
            alt={'После'}
          />
        </SwiperSlide>
        <SwiperSlide className="slider__slide">
          <StaticImage
            className="slider__image"
            src={'../../images/slider/before-3.jpg'}
            alt={'До'}
          />
          <StaticImage
            className="slider__image"
            src={'../../images/slider/after-3.jpg'}
            alt={'После'}
          />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default Slider;

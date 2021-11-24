import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StaticImage } from 'gatsby-plugin-image';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/outline';

import Section from '../Section/Section';

SwiperCore.use([Navigation, Pagination]);

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

const Slider = () => {
  const swiperRef = React.useRef(null);

  return (
    <Section sectionTitle={'slider'}>
      <h2 className="slider__title">Сравните посадку до и после</h2>
      <div className="slider__frame">
        <div
          className="slider__button"
          id="previousButton"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <ArrowLeftIcon />
        </div>
        <Swiper
          //@ts-ignore
          ref={swiperRef}
          pagination={{ clickable: true }}
          className="slider__content"
        >
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
        <div
          className="slider__button"
          id="nextButton"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <ArrowRightIcon />
        </div>
      </div>
    </Section>
  );
};

export default Slider;

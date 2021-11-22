import React from 'react';

import Section from '../Section/Section';

import './Video.css';

const Video = ({ videoSrcURL, videoTitle }) => {
  return (
    <Section sectionTitle="video">
      <h2 className="video__title">Главные ошибки <br /> при выборе бюстгальтера</h2>
      <p className="video__subtitle">
        Посмотрите наше видео о том, какие основные ошибки при выборе белья
        допускают наши клиенты и как мы помогаем их решить
      </p>
      <div className="video__frame">
        <iframe
          className="video__player"
          width="100%"
          height="100%"
          src={videoSrcURL}
          title={videoTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
};

export default Video;

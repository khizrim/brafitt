import React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import ExternalLink from '../ExternalLink/ExternalLink';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__nav">
            <div className="footer__column">
              <p className="footer__nav-title">Соцсети</p>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <ExternalLink
                    url="https://instagram.com/brafitt.ru"
                    text="Instagram"
                  />
                </li>
                <li className="footer__nav-item">
                  <ExternalLink url="https://t.me/brafitt.ru" text="Telegram" />
                </li>
              </ul>
            </div>
            <div className="footer__column">
              <p className="footer__nav-title">Контакты</p>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <ExternalLink
                    url="https://goo.gl/maps/1YZs8yyvTdGq9m6CA"
                    text="«Ардар», г. Махачкала, ул. Малыгина, 35"
                  />
                </li>
                <li className="footer__nav-item">
                  <ExternalLink
                    url="tel:8-989-466-29-29"
                    text="+7 989 466 29 29"
                  />
                </li>
              </ul>
            </div>
          </div>
          <Link className="footer__logo" to="#top">
            <StaticImage
              src="../../images/logo-h.png"
              alt="Brafitt"
              height={24}
            />
          </Link>
        </div>
        <p className="footer__copyright">
          &copy; 2021 Brafitt. Все права защищены
        </p>
      </div>
    </footer>
  );
};

export default Footer;

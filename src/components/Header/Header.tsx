import React from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { PhoneIcon, PencilAltIcon } from '@heroicons/react/outline';

import ExternalLink from '../ExternalLink/ExternalLink';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          <StaticImage
            src="../../images/logo-v.png"
            alt="Brafitt"
            height={72}
            placeholder="none"
            backgroundColor="transparent"
            layout="fixed"
          />
        </Link>
        <div className="header__link header__link_side_left">
          <ExternalLink url="tel:8-989-466-29-29" text="+7 989 466 29 29" />
          <PhoneIcon className="header__link-icon" />
        </div>
        <div className="header__link header__link_side_right">
          <PencilAltIcon className="header__link-icon" />
          <ExternalLink url="https://google.com" text="Записаться онлайн" />
        </div>
      </div>
    </header>
  );
};

export default Header;

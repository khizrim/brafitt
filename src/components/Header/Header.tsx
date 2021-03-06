import React from 'react';

import { Link } from 'gatsby';
import { PhoneIcon, PencilAltIcon } from '@heroicons/react/outline';
import logoMain from '../../images/logo-v.svg';

import ExternalLink from '../ExternalLink/ExternalLink';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo" to="/">
          <img src={logoMain} alt="Brafitt" />
        </Link>
        <div className="header__link header__link_side_left">
          <ExternalLink iconPosition={'end'} url="tel:8-989-466-29-29" text="+7 989 466 29 29">
            <PhoneIcon className="header__link-icon" />
          </ExternalLink>
        </div>
        <div className="header__link header__link_side_right">
          <ExternalLink iconPosition={'start'} url="https://google.com" text="Записаться онлайн">
            <PencilAltIcon className="header__link-icon" />
          </ExternalLink>
        </div>
      </div>
    </header>
  );
};

export default Header;

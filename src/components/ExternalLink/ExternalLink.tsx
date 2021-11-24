import React from 'react';

import './ExternalLink.css';

const ExternalLink = ({
  url,
  text,
  iconPosition,
  children,
}: ExternalLinkProps) => {
  return (
    <a className="external-link" href={url} target="_blank" rel="noreferrer">
      {children && (
        <span
          className={`external-link__icon ${
            iconPosition === 'end' ? 'external-link__icon_pos_end' : ''
          }`}
        >
          {children}
        </span>
      )}
      {text}
    </a>
  );
};

type ExternalLinkProps = {
  url: string;
  text: string;
  iconPosition?: string;
  children?: React.ReactNode;
};

export default ExternalLink;

import React from 'react';

const ExternalLink = ({
  url,
  text,
  iconPosition,
  children,
}: ExternalLinkProps) => {
  return (
    <a
      className={`flex items-center gap-2 ${
        iconPosition && iconPosition === 'end' ? 'flex-row-reverse' : 'flex-row'
      }`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {text}
      {children}
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

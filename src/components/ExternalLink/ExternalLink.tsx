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
        iconPosition && iconPosition === 'end' ? 'flex-row' : 'md:flex-row-reverse'
      }`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {children}
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

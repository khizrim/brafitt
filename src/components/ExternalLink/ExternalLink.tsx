import React from 'react';

const ExternalLink = ({ url, text }: ExternalLinkProps) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};

type ExternalLinkProps = {
  url: string;
  text: string;
};

export default ExternalLink;

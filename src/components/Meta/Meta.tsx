import React from 'react';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title = '', description = '', lang = 'ru' }: SEOProps) => {
  const { site } = useStaticQuery<QueryTypes>(query);

  const defaultTitle = title || site.siteMetadata.title;
  const defaultDescription = description || site.siteMetadata.description;
  const siteUrl = site.siteMetadata.siteUrl;

  return (
    <Helmet htmlAttributes={{ lang }} title={defaultTitle}>
      <meta charSet="utf-8" />
      <meta name="description" content={defaultDescription} />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:url" content={siteUrl} />
    </Helmet>
  );
};

export default SEO;

type SEOProps = {
  title?: string;
  description?: string;
  lang?: string;
  siteUrl?: string;
};

type QueryTypes = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
    };
  };
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;

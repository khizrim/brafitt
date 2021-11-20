import React from 'react';

import Meta from '../components/Meta/Meta';
import Layout from '../components/Layout/Layout';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Meta />
        <p className="container">
          There will be the landing page for the first brafitting service in
          Makhachkala, Russia! See you soon! &#128521;
        </p>
      </Layout>
    </>
  );
};

export default IndexPage;

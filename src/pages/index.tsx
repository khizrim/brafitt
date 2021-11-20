import React from 'react';

import Meta from '../components/Meta/Meta';
import Layout from '../components/Layout/Layout';

import Header from '../components/Header/Header';

const IndexPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <Layout>
        <p className="container">
          There will be the landing page for the first brafitting service in
          Makhachkala, Russia! See you soon! &#128521;
        </p>
      </Layout>
    </>
  );
};

export default IndexPage;

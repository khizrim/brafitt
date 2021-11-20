import React from 'react';

import Meta from '../components/Meta/Meta';
import Layout from '../components/Layout/Layout';

import Header from '../components/Header/Header';
import Promo from '../components/Promo/Promo';
import Footer from '../components/Footer/Footer';

const IndexPage = () => {
  return (
    <>x
      <Meta />
      <Header />
      <Layout>
        <p className="container">
          There will be the landing page for the first brafitting service in
          Makhachkala, Russia! See you soon! &#128521;
        </p>
        <Promo />
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;

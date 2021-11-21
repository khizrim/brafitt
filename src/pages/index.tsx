import React from 'react';

import Meta from '../components/Meta/Meta';
import Layout from '../components/Layout/Layout';

import Header from '../components/Header/Header';
import Promo from '../components/Promo/Promo';
import Footer from '../components/Footer/Footer';
import Steps from '../components/Steps/Steps';

const IndexPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <Layout>
        <Steps />
        <Promo />
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;

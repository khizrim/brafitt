import React from 'react';

import Meta from '../components/Meta/Meta';
import Layout from '../components/Layout/Layout';

import Header from '../components/Header/Header';
import Features from '../components/Features/Features';
import Steps from '../components/Steps/Steps';
import Promo from '../components/Promo/Promo';
import Footer from '../components/Footer/Footer';

import { BENEFITS, SAFETY } from '../utils/constants';

const IndexPage = () => {
  return (
    <>
      <Meta />
      <Header />
      <Layout>
        <Features data={BENEFITS} />
        <Features data={SAFETY} />
        <Steps />
        <Promo />
      </Layout>
      <Footer />
    </>
  );
};

export default IndexPage;

import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Learn with Param</Header>
    <Container center={center}>Nothing</Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
